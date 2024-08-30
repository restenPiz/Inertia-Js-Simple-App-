<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Truck Parking') }}</title>

    <!-- Scripts -->
    <link href="{{ asset('src/index.css') }}" rel="stylesheet" />
    @viteReactRefresh
    @vite('resources/js/app.jsx')
</head>

<body>
    @inertia
</body>

</html>
