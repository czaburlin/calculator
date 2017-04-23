'use strict';

angular.module('calculator').controller('CalculatorController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
    function ($scope, $state, $http, $location, $window, Authentication) {
        $scope.authentication = Authentication;

        // Set default value for time
        $scope.credentials = {};
        $scope.credentials.time = 'Years';
        $scope.frequency = ['Daily','Monthly','Bimonthly','Quarterly','Every four months','Years',];

        $scope.answerI = 0;
        $scope.answerI2 = 0;
        $scope.answerTA = 0;

        $scope.calculate = function (isValid) {
            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'simpleForm');
                return false;
            }

            var timeAux = 12;

            switch ($scope.credentials.time) {
                case 'Daily':
                    timeAux = 1/360;
                    break;
                case 'Bimonthly':
                    timeAux = timeAux/2;
                    break;
                case 'Quarterly':
                    timeAux = timeAux/3;
                    break;
                case 'Every four months':
                    timeAux = timeAux/4;
                    break;
                case 'Biannual':
                    timeAux = timeAux/6;
                    break;
                case 'Years':
                    timeAux = timeAux/12;
                    break;
                }

                $scope.answerI = ($scope.credentials.principal * $scope.credentials.interest * $scope.credentials.timeValue) / (100 * timeAux);
                $scope.answerTA = $scope.credentials.principal + $scope.answerI;
        };

        $scope.calculate2 = function (isValid) {
            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'compoundForm');
                return false;
            }

            $scope.answerI2 = $scope.credentials.principal * Math.pow(1 + $scope.credentials.interest/100,$scope.credentials.timeValue);
        };

        $scope.clear = function() {
            //Credentials
            $scope.credentials = {};
            $scope.credentials.time = 'Years';
            $scope.credentials.principal = 0;
            $scope.credentials.interest = 0;
            $scope.credentials.timeValue = 0;
            //Simple
            $scope.answerI = 0;
            $scope.answerTA = 0;
            //Compound
            $scope.answerI2 = 0;            
        };
  }
]);
