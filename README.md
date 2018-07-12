# bday-tracker

This is an example application built with Laravel and vuetify.js. <br> It's small application for me to keep track of Birthdays as I have a good few to remember.

It is also an application developed to cover a good approach to workflow via the Laravel framework, and outlines some of the frameworks capabilitys. 

Areas Covered (so far, a good fee to go yet):

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
