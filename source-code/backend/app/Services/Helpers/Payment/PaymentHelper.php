<?php

namespace App\Services\Helpers\Payment;

use YooKassa\Client;
use YooKassa\Common\Exceptions\ApiConnectionException;
use YooKassa\Common\Exceptions\ApiException;
use YooKassa\Common\Exceptions\AuthorizeException;
use YooKassa\Common\Exceptions\BadApiRequestException;
use YooKassa\Common\Exceptions\ExtensionNotFoundException;
use YooKassa\Common\Exceptions\ForbiddenException;
use YooKassa\Common\Exceptions\InternalServerError;
use YooKassa\Common\Exceptions\NotFoundException;
use YooKassa\Common\Exceptions\ResponseProcessingException;
use YooKassa\Common\Exceptions\TooManyRequestsException;
use YooKassa\Common\Exceptions\UnauthorizedException;

class PaymentHelper implements PaymentHelperService
{
    public Client $client;

    public function __construct()
    {
        $this->client = new Client();
        $this->client->setAuth(config('services.yookassa.shop_id',356895), config('services.yookassa.secret_id','test_14bOwg2TSk_dHoYAUe1_eu0ve_GXYNsakzHD8x1uQaE'));
    }

    /**
     * @param float $amount
     * @param string $description
     * @param array $options
     * @return string
     * @throws ApiConnectionException
     * @throws ApiException
     * @throws AuthorizeException
     * @throws BadApiRequestException
     * @throws ExtensionNotFoundException
     * @throws ForbiddenException
     * @throws InternalServerError
     * @throws NotFoundException
     * @throws ResponseProcessingException
     * @throws TooManyRequestsException
     * @throws UnauthorizedException
     */
    public function createPayment(int $amount, array $options = []) : string
    {
        $payment = $this->client->createPayment(
            array(
                'amount' => array(
                    'value' => $amount,
                    'currency' => 'RUB',
                ),
                'confirmation' => array(
                    'type' => 'redirect',
                    'return_url' => 'https://bikini-star.com/',
                ),
                'capture' => false,
                'description' => 'Покупка услуги на сайте bikini-star',
                'metadata' => [
                    'transaction_id' => $options['transaction_id'],
                ]
            ),
            uniqid('', true)
        );

        return $payment->getConfirmation()->getConfirmationUrl();
    }
}
