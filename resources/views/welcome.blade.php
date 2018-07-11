<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <title>{{ config('app.name') }}</title>

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet">
    <link href="https://unpkg.com/vuetify/dist/vuetify.min.css" rel="stylesheet">

    <style>

    </style>

</head>
    <body>

      <div id="app">

        <v-app dark>

          <v-toolbar
            color="blue darken-1"
            dense
            fixed
            app>

          <v-toolbar-title class="mr-5 align-center">
            <span class="title">Birthday Tracker</span>
          </v-toolbar-title>

          </v-toolbar>

          <v-content>
            <v-container grid-list-md text-xs-center>
                <birthdays-component></birthdays-component>
            </v-container>
          </v-content>

          <v-footer app class="pa-4">
              <v-spacer></v-spacer>
              <div class="caption">
                An Laravel/Vuetify.js application crafted by:<v-btn color="error" small flat>J.Robo</v-btn>
              </div>
          </v-footer>

        </v-app>

      </div>

      <script src="{{ url (mix('/js/app.js')) }}" type="text/javascript"></script>

    </body>
</html>
