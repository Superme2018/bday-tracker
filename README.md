# bday-tracker

This is an example application built with Laravel, to support my CV. <br> It's a way for me to keep track of Birthdays as I constantly forget.

It is also an application developed to cover a good approach to workflow via the Laravel framework.

Areas Covered:

Migrations, (Seeder)<br>
Models, <br>
Controllers (Carbon, Validation) (Resource Controller + Route Model Binding), <br> 
Resource, <br>
Tests, (Model Factory)<br>
PSR4 Autoload (custom class without dependency injection), <br>

Artisan Commands worth noting:

php artisan make:controller BdayController --resource --api --model=Bday <br>
php artisan db:seed <br>
./vendor/bin/phpunit <br>
