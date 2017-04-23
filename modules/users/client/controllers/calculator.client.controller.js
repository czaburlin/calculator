'use strict';

angular.module('calculator').controller('CalculatorController', ['$scope', '$state', '$http', '$location', '$window', 'Authentication',
    function ($scope, $state, $http, $location, $window, Authentication) {
        $scope.authentication = Authentication;


        // Set default value for time
        $scope.credentials = {};
        $scope.credentials.time = 'Years';
        $scope.frequency = ['Daily','Monthly','Bimonthly','Quarterly','Every four months','Years',];

        $scope.answerI = 0;
        $scope.answerTA = 0;

        // If user is signed in then redirect back home
        if ($scope.authentication.user) {
            $location.path('/');
        }

        $scope.calculate = function (isValid) {
            $scope.error = null;
            if (!isValid) {
                $scope.$broadcast('show-errors-check-validity', 'userForm');
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

        $scope.clear = function() {
            $scope.credentials = {};
            $scope.credentials.time = 'Years';
            $scope.credentials.principal = 0;
            $scope.credentials.interest = 0;
            $scope.credentials.timeValue = 0;
            $scope.answerI = 0;
            $scope.answerTA = 0;
        };
  }
]);
