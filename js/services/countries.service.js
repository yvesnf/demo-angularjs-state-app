stateApp.service("CountriesService", function($http) {
    var _countries = [];

    var interfice = {
        getCountries: function() {
            var promise = new Promise(function(resolve, reject) {
                if (_countries.length == 0) {
                    $http({
                        method: "GET",
                        url: "https://restcountries.eu/rest/v2/all",
                    }).then(
                        function successCallback(response) {
                            _countries = response.data;
                            resolve(_countries);
                        },
                        function errorCallback(response) {
                            reject(response.status);
                        }
                    );
                } else {
                    resolve(_countries);
                }
            });

            return promise;
        },

        getCountry: function(id) {
            var promise = new Promise(function(resolve, reject) {
                $http({
                    method: "GET",
                    url: "https://restcountries.eu/rest/v2/alpha/" + id,
                }).then(
                    function successCallback(response) {

                        resolve(response.data);
                    },
                    function errorCallback(response) {
                        reject(response.status);
                    }
                );
            });

            return promise;
        },

    };

    return interfice;
});