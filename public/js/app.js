let App = angular.module("App", []);

App.controller("AppController", ($scope, $http, $log) => {

    $scope.getShortLink = (fullLink) => {

        if (!$scope.fullLink) {
            $scope.shortLink = "Please, input address!";
            return;
        }

        $http.post("/generator/" + fullLink).then((ans) => {
            $scope.shortLink = ans.data;
        }, (err) => {
            console.log(err);
        });

    }

});