<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\PropertyRequest;
use App\Http\Resources\BreastResurce;
use App\Http\Resources\CountryResurce;
use App\Http\Resources\HairColorResurce;
use App\Models\Property\Breast;
use App\Models\Property\Country;
use App\Models\Property\HairColor;
use App\Models\User;
use Illuminate\Support\Collection;

class PropertyController extends Controller
{

    private Collection $hair_colors;
    private Collection $breasts;
    private Collection $countries;

    public function index(PropertyRequest $request)
    {


        $data = [];
        match ($request->role) {
            User::USER => $this->getUserProperty($data),
            User::MODEL => $this->getModelProperty($data),
        };
        return response()->json([
            'status' => 'success',
            'data' => $data
        ]);


    }

    public function getModelProperty(array &$data): array
    {
        $this->hair_colors = HairColor::all();
        $this->breasts = Breast::all();
        $this->countries = Country::all();
        $data = [
            'hair_colors' => HairColorResurce::collection($this->hair_colors),
            'breasts' => BreastResurce::collection($this->breasts),
            'countries' => CountryResurce::collection($this->countries),
        ];
        return $data;
    }

    public function getUserProperty(array &$data): array
    {
        $this->countries = Country::all();
        $data = [
            'countries' => CountryResurce::collection($this->countries),
        ];
        return $data;
    }
}
