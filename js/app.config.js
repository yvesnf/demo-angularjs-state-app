stateApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: "/home",
            templateUrl: "home.html",
            controller: "HomeController"
        })
        .state('countries', {
            url: "/countries",
            templateUrl: "countries.html",
            controller: "CountriesController"
        })
        .state('country', {
            url: "/country/:id",
            templateUrl: "country.html",
            controller: "CountryController"
        });

});