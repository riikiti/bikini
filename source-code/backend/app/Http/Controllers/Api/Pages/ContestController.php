<?php

namespace App\Http\Controllers\Api\Pages;

use App\Http\Controllers\Controller;
use App\Http\Resources\ContestModelsResource;
use App\Http\Resources\ContestResource;
use App\Models\Contest;
use App\Models\ContestModel;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

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

    public function modelBlock(Request $request): JsonResponse
    {
        $user = $request->user();
        // Если юзер не модель, ему этот блок не нужен
        if ($user->role == User::MODEL) {
            //активный конкурс
            $contest = Contest::query()->where('is_active', true)->first();
            //получаем запись о конкурсе данной модели
            $contestModel = ContestModel::query()
                ->where('contest_id', $contest->id)
                ->where('user_id', $user->id)
                ->first();
            // выходим, если записи нет / если есть, считаем рейтинг и отдаем на фронт
            if ($contestModel) {
                $rating = $contestModel->freeRating + $contestModel->additionalFreeRating + $contestModel->paidRating;
                return response()->json(['status' => 'ok', 'rating' => $rating]);
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

    public function winnersList(Request $request)
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

        return response()->json(['status' => 'oks', 'data' => $data,'check' => $check]);
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

    public function storePhoto()
    {
//
    }

    public function updatePhoto()
    {
//
    }

    public function deletePhoto()
    {

    }
}
