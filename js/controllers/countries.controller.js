stateApp.controller("CountriesController", function Countries(
    $scope,
    CountriesService
) {
    $scope.title = "COUNTRIES CONTROLLER WORKING!";

    $scope.countries = [];
    $scope.filter = "";

    function init() {

        CountriesService.getCountries()
            .then(function(res) {
                $scope.countries = res;
                $scope.$apply();
            })
            .catch(function(reason) {
                console.log(reason);
            });

    }

    init();

});