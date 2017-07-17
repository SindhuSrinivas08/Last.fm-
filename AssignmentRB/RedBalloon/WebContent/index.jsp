<!DOCTYPE html>
<html>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<link data-require="bootstrap-css@*" data-semver="3.3.1" rel="stylesheet"
      href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
<script data-require="ui-bootstrap@*" data-semver="0.12.1"
        src="http://angular-ui.github.io/bootstrap/ui-bootstrap-tpls-0.12.1.min.js"></script>
<body>
<div class="container" ng-app="myApp" ng-controller="artistCtrl">
    <div class="row">
        <form class="form-inline">
            <div class="form-group">
                <label class="sr-only" for="CountrySearch">Amount (in dollars)</label>
                <div class="input-group">
                    <div class="input-group-addon">Country Name:</div>
                    <input type="text" class="form-control" id="CountrySearch" placeholder="Country" ng-model="country">
                </div>
            </div>
            <button class="btn btn-primary" ng-click="search()">Search</button>
        </form>
    </div>
    <div class="row">
        <table class="table table-striped">
            <thead>
            <tr>
                <th>Listeners</th>
                <th>MDID</th>
                <th>Name</th>
                <th>URL</th>
            </tr>
            </thead>
            <tbody>
            <tr ng-repeat="artist in artistResult">
                <td>{{artist.listeners}}</td>
                <td>{{artist.mbid}}</td>
                <td>{{artist.name}}</td>
                <td>{{artist.url}}</td>
            </tr>
            </tbody>
        </table>
    </div>
    <div class="row">
        <div class="col-xs-12">
            <pagination
                    ng-model="currentPage"
                    total-items="artistData.length"
                    max-size="maxSize"
                    boundary-links="true">
            </pagination>
        </div>
    </div>
</div>
<script>
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
</script>
</body>
</html>