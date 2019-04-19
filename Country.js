var countryApp = angular.module('countryApp', ['ngRoute']);

      countryApp.config(function($routeProvider) {
        $routeProvider.
          when('/', {
            templateUrl: 'country-list.html',
            controller: 'CountryListCtrl'
          }).
          when('/:countryName', {
            templateUrl: 'country-detail.html',
            controller: 'CountryDetailCtrl'
          }).
          otherwise({
            redirectTo: '/'
          });
      });

      countryApp.factory('countries', function($http){

        function getData(callback){
         callback([
          {
            "name": "China",
            "population": 1359821000,
            "flagURL": "//upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
            "capital": "Beijing",
            "gdp": 12261
          },
          {
            "name": "India",
            "population": 1205625000,
            "flagURL": "//upload.wikimedia.org/wikipedia/en/4/41/Flag_of_India.svg",
            "capital": "New Delhi",
            "gdp": 4716
          },
          {
            "name": "United States of America",
            "population": 312247000,
            "flagURL": "//upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg",
            "capital": "Washington, D.C.",
            "gdp": 16244
          }
        ])
        }

        return {
          list: getData,
          find: function(name, callback){
            getData(function(data) {
              var country = data.filter(function(entry){
                return entry.name === name;
              })[0];
              callback(country);
            });
          }
        };
      });

      countryApp.controller('CountryListCtrl', function ($scope, countries){
        countries.list(function(countries) {
          $scope.countries = countries;
        });
      });

      countryApp.controller('CountryDetailCtrl', function ($scope, $routeParams, countries){
        countries.find($routeParams.countryName, function(country) {
          $scope.country = country;
        });
      });