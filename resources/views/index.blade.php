<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>Logic ERP</title>
        {{--<link rel="stylesheet" href="/css/app.css">--}}
        <!-- Fonts -->
        <link rel="stylesheet" type="text/css" href="/css/logic.css">
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">

        <!-- Styles -->
        <style>

        </style>
    </head>
    <body class="platform header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden pace-done pace-done">

        <div id="app"></div>

        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
