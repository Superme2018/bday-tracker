# bday-tracker

This is an example application built with <a target="_blank" href="https://laravel.com/">Laravel</a> and <a target="_blank" href="https://vuetifyjs.com/en/">vuetify.js</a>. <br> It's small application for me to keep track of Birthdays as I have a good few to remember.

It is also an application developed to cover a good approach to workflow via the Laravel framework.

<strong><u>Areas Covered</u></strong> (so far, a good few to go yet):

Migrations, (Seeder)<br>
Models, <br>
Controllers (Carbon, Validation) (Resource Controller + Route Model Binding), <br> 
Resource, <br>
Tests, (Model Factory)<br>
PSR4 Autoload (custom class without dependency injection), <br>

<strong><u>Artisan Commands worth noting</u></strong>:

php artisan make:controller BdayController --resource --api --model=Bday <br>
php artisan db:seed <br>
./vendor/bin/phpunit <br>
