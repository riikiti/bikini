<?php

namespace App\Services\Helpers\Images;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

class ImageHelper implements ImageHelperService
{
    private string $savingPath = 'images';

    public const DISK = 'public';

    public function setSavingPath(string $path): void
    {
        $this->savingPath = $path;
    }

    public function handleImageUpload($value, Model $model, string $attribute): ?string
    {
        $prefix = '';
        $link = Str::remove('/storage/', $model->{$attribute});
        $path = null;

        switch (true) {
            case Str::startsWith($value, 'data:image'):
                $image = $this->processImage($value);
                $filename = $this->generateFilename($value);

                $this->storeImageOnDisk($image, $prefix.$this->savingPath.'/'.$filename, self::DISK);

                $this->deletePreviousImage($link, $attribute, $model);

                $path = $this->getPublicPath($this->savingPath, $filename);

                break;
            case is_null($value) && $model->$attribute:
                @unlink(public_path($model->$attribute));
                break;
            case $value == $model->$attribute:
                $path = $model->$attribute;
                break;
        }

        return $path;
    }

    private function processImage($value)
    {
        if (Str::contains($value, 'png')) {
            return Image::make($value)->encode('png', 90);
        } else {
            return Image::make($value)->encode('webp', 90);
        }
    }

    private function generateFilename($value)
    {
        return uniqid().(Str::contains($value, 'png') ? '.png' : '.webp');
    }

    private function storeImageOnDisk($image, $path)
    {
        Storage::disk(self::DISK)->put($path, $image->stream());
    }

    private function deletePreviousImage($link, $attribute_name, $model)
    {
        if (isset($model->{$attribute_name}) && ! empty($model->{$attribute_name})) {
            Storage::disk(self::DISK)->delete($link);
        }
    }

    private function getPublicPath($destination_path, $filename)
    {
        $public_destination_path = Str::replaceFirst('public/', '', $destination_path);

        return '/storage/'.$public_destination_path.'/'.$filename;
    }
}
