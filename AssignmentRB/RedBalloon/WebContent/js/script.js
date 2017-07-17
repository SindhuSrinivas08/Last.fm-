var app = angular.module('myApp', ['ui.bootstrap']);
    app.controller('artistCtrl', function ($scope, $http) {
        $scope.artistData = [],
            $scope.artistResult = [],
            $scope.currentPage = 1,
            $scope.numPerPage = 10,
            $scope.maxSize = 50;
        $scope.search = function () {
            $http.get("http://localhost:8080/RedBalloon/rest/artist/findAll/" + $scope.country).then(function (response) {
                $scope.artistData = response.data.artist;
            }).then(function () {
                $scope.$watch('currentPage + numPerPage', function () {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;
                    $scope.artistResult = $scope.artistData.slice(begin, end);
                });
            });
        };
    });