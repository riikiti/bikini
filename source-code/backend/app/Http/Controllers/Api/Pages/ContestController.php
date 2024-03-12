<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContestModelsResource;
use App\Http\Resources\ContestResource;
use App\Http\Resources\UserResource;
use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ContestController extends Controller
{
    public function index()
    {
        return response()->json([
            'status' => 'success',
            'data' => ContestResource::collection(Contest::all())]);
    }

    public function prizesBlock(Request $request): JsonResponse
    {
        $check = $this->checkService->checkUser($request);

        $contest = Contest::query()->where('is_active', true)->first();

        return response()->json([
            'status' => 'ok',
            'contest' => ContestResource::make($contest),
            'check' => $check,
        ]);

    }

    //хз вроде работает
    public function addPhoto(Request $request): JsonResponse
    {
        $contest = Contest::query()->where('is_active', true)->first();
        $contestModel = ContestModel::query()
            ->where('contest_id', $contest->id)
            ->where('user_id', auth()->user()->id)
            ->exists();
        if ($contestModel) {
            return response()->json([
                'status' => 'photo already exists',
            ]);
        } else {
            $data = [
                'photo' => Storage::disk('public')->put('/public/ContestPhotos', $request->file('image')),
                'user_id' => auth()->user()->id,
                'contest_id' => $contest->id,
            ];
            return response()->json([
                'status' => 'ok',
                'contest_model' => ContestModelsResource::make(ContestModel::create($data)),
            ]);
        }

    }

    public function updatePhoto(Request $request): JsonResponse
    {
        $contest = Contest::query()->where('is_active', true)->first();
        $contestModel = ContestModel::query()
            ->where('contest_id', $contest->id)
            ->where('user_id', auth()->user()->id)
            ->first();
        if ($request->hasFile('image')) {
            $photo = Storage::disk('public')->put('/public/ContestPhotos', $request->file('image'));
            $contestModel->photo = $photo;
            $contestModel->save();
            return response()->json([
                'status' => 'ok',
                'contest_model' => ContestModelsResource::make($contestModel),
            ]);
        } else {
            return response()->json([
                'error' => 'No image file provided',
            ], 400);
        }
    }

    public function deletePhoto(Request $request): JsonResponse
    {
        $contest = Contest::query()->where('is_active', true)->first();
        $contestModel = ContestModel::query()
            ->where('contest_id', $contest->id)
            ->where('user_id', auth()->user()->id)
            ->first();
        if ($contestModel) {
            $contestModel->delete();
            return response()->json([
                'status' => 'ok',
            ]);
        } else {
            return response()->json([
                'status' => 'photo not found',
            ]);
        }


    }


    public function modelBlock(Request $request): JsonResponse
    {
        // Если юзер не модель, ему этот блок не нужен
        if (auth()->user()->role == User::MODEL) {
            //активный конкурс
            $contest = Contest::query()->where('is_active', true)->first();
            //получаем запись о конкурсе данной модели
            $contestModel = ContestModel::query()
                ->where('contest_id', $contest->id)
                ->where('user_id', auth()->user()->id)
                ->first();
            // выходим, если записи нет / если есть, считаем рейтинг и отдаем на фронт
            if ($contestModel) {
                return response()->json([
                    'status' => 'ok',
                    'contest_model' => ContestModelsResource::make($contestModel),
                ]);
            } else {
                return response()->json(['status' => 'the model is not involved']);
            }

        } else {
            return response()->json(['status' => 'not model']);
        }
    }

    public function allContestPublicationsBlock(): JsonResponse
    {
        $contest = Contest::query()->where('is_active', true)->first();

        $allPublications = ContestModel::query()
            ->where('contest_id', $contest->id)
            ->get();

        return response()->json(['status' => 'ok', 'data' => ContestModelsResource::collection($allPublications)]);
    }

    public function winnersList(Request $request): JsonResponse
    {
        $check = $this->checkService->checkUser($request);
        $contests = Contest::all();
        $data = [];
        $i = 0;

        foreach ($contests as $contest) {
            $i++;
            //берем верхние 3 по данному конкурсу
            $allPublications = ContestModel::where('contest_id', $contest->id)->take(3)->get();
            // сортируем по рейтингу в порядке убывания
            $sorted = $allPublications
                ->sortByDesc(function ($publication) {
                    return $publication->freeRating + $publication->additionalFreeRating + $publication->paidRating;
                });
            $data[] = [
                "contest_$i" => $contest,
                "contest_models_$i" => $sorted,
            ];
        }

        return response()->json(['status' => 'oks', 'data' => $data, 'check' => $check]);
    }

    public function show()
    {
        $contest = Contest::query()->where('is_active', true)->first();

        $contestModels = ContestModel::query()->where('contest_id', $contest->id)->get();

        if (!empty($contest)) {
            return response()->json([
                'status' => 'success',
                'data' => ContestResource::make($contest),
                'models' => ContestModelsResource::collection($contestModels)]);
        } else {
            return response()->json(['status' => 'not found']);
        }
    }
}
