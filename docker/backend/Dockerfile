FROM php:8.2-fpm-alpine

RUN apk update && apk --no-cache add \
    freetype-dev \
    zlib-dev \
    libzip-dev \
    libpng-dev \
    libjpeg-turbo-dev \
    libpq-dev \
    icu-dev \
    supervisor \
    && docker-php-ext-configure gd --enable-gd --with-freetype --with-jpeg \
    && docker-php-ext-install zip gd intl pdo pdo_pgsql exif

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

COPY composer.json composer.lock ./
RUN composer install --no-autoloader

ADD workers/*.conf /etc/supervisor/conf.d/
COPY supervisord.conf /etc/supervisord.conf
COPY crontab/root /etc/crontabs/

COPY --chown=www-data . .

RUN mkdir /var/www/public_container && cp -r /var/www/public/* /var/www/public_container

CMD composer dump-autoload && \
    php artisan migrate --force && \
    php artisan db:seed --force && \
    /usr/bin/supervisord -c /etc/supervisord.conf && \
    php artisan queue:restart && \
    crond -b && \
    php-fpm