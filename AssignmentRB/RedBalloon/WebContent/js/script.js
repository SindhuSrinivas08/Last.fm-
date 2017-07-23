var app = angular.module('myApp', ['ui.bootstrap','ngRoute']);


app.config(function($routeProvider,$locationProvider) {
	
	$routeProvider
		.when('/track', {
			templateUrl: 'track.jsp',
			controller: 'trackCtrl'
		})
		.when('/', {
			templateUrl: 'artist.jsp',
			controller: 'artistCtrl'
		})
		.otherwise({
			redirectTo: 'index.jsp'
		});
});

    app.controller('artistCtrl', function ($scope, $http,myService,$location) {
        $scope.artistData = [],
        $scope.trackResult =[],
            $scope.artistResult = [],
            $scope.currentPage = 1,
            $scope.numPerPage = 5,
            $scope.maxSize = 100;
        $scope.search = function () {
            $http.get("http://ec2-13-54-241-239.ap-southeast-2.compute.amazonaws.com:8080/rest/artist/findAll/" + $scope.country).then(function (response) {
                $scope.artistData = response.data.artist;
            }).then(function () {
                $scope.$watch('currentPage + numPerPage', function () {
                    var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                        , end = begin + $scope.numPerPage;
                    $scope.artistResult = $scope.artistData.slice(begin, end);
                });
            });
        };
        
        $scope.fetchDetails = function (name){
        	$http.get("http://ec2-13-54-241-239.ap-southeast-2.compute.amazonaws.com:8080/rest/artist/findArtistTracks/" + name).then(function (response) {
                $scope.trackResult = response.data.track;
                myService.set($scope.trackResult);
                $location.path('/track').replace();
                
            });
        	
        };
     
    });
    
    app.controller('trackCtrl', function ($scope, $http,myService,$window) {
        	var checj=myService.get();
        	$scope.trackResult = myService.get();
        
    });
    
    app.factory('myService', function() {
    	 var savedData = {}
    	 function set(data) {
    	   savedData = data;
    	 }
    	 function get() {
    	  return savedData;
    	 }

    	 return {
    	  set: set,
    	  get: get
    	 }

    	});
    
