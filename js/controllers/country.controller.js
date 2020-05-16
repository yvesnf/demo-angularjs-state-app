stateApp.controller("CountryController", function CountryController(
    $scope,
    CountriesService,
    $stateParams
) {
    $scope.title = "COUNTRY CONTROLLER WORKING!";

    $scope.country = {};

    function init() {
        CountriesService.getCountry($stateParams.id)
            .then(function(res) {
                $scope.country = res;
                $scope.$apply();
            })
            .catch(function(reason) {
                console.log(reason);
            });
    }

    init();

});