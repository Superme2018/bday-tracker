# bday-tracker

This is an example application built with <a target="_blank" href="https://laravel.com/">Laravel</a> and <a target="_blank" href="https://vuetifyjs.com/en/">vuetify.js</a>. <br> It's a small application for me to keep track of birthdays, as I have a good few to remember.

It is also an application developed to cover a good approach to workflow via the Laravel framework.

<strong>Areas Covered:</strong> (so far, a good few to go yet)

Migrations, (Seeder)<br>
Models, <br>
Controllers (Carbon, Validation) (Resource Controller + Route Model Binding), <br> 
Resource, (Transforms) <br>
Tests, (Model Factory)<br>
PSR4 Autoload (custom class without dependency injection), (Helpers) <br>

<strong>Artisan Commands worth noting:</strong>

php artisan make:controller BdayController --resource --api --model=Bday <br>
php artisan db:seed <br>
./vendor/bin/phpunit <br>

<strong>Application Hi-lights (Vuetify.js in action)</strong>

Some .gif mov recordings to capture some of the applications features.

<strong>*Realtime validation and responce button loader.<strong>
<img src="https://media.giphy.com/media/2bXt6lBcnnRT3Vv8hf/giphy.gif"/>
