'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])


.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.courses = [
    {code:'10156', name:'Interactive Prototyping in Design', credits:5, period: ['I', 'II', 'III'], language:'EN', school:'ENG School of Engineering'},
    {code:'25107', name:'Interactive Art', credits:3, period: ['III', 'IV'], language:'EN', school:'ENG School of Engineering'},
    {code:'25406', name:'Interactive and Generative Narratives', credits:5, period: ['I'], language:'EN', school:'ENG School of Engineering'},
    {code:'DOM-E5016', name:'Interactive Cinema', credits:3, period: ['I', 'II'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'DOM-E5038', name:'Generative and Interactive Narratives', credits:8, period: ['IV'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'DOM-E5043', name:'Physical Interaction Design', credits:2, period: ['III', 'IV'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'DOM-E5056', name:'Multitouch Interaction', credits:3, period: ['II'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'DOM-E505', name:'Bodily Interaction', credits:5, period: ['II', 'III'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'DOM-E5067', name:'Sound and Music Interaction', credits:3, period: ['I', 'II'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'DOM-E5070', name:'Sound Design for Interactive Commodities', credits:4, period: ['III'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'MUO-E3002', name:'Interactive Prototyping', credits:5, period: ['III', 'IV'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'MUO-E5012', name:'Product and Space Interaction', credits:5, period: ['IV'], language:'EN', school:'ARTS School of Arts, Design, and Architecture'},
    {code:'T-121.5450', name:'Interaction Design and Evaluation P', credits:7, period: ['III', 'IV', 'V'], language:'EN', school:'BIZ School of Business'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group A', credits:1, period: ['I'], language:'EN', school:'BIZ School of Business'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group B', credits:2, period: ['II'], language:'EN', school:'BIZ School of Business'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group C', credits:3, period: ['III'], language:'FI', school:'Language Centre'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group B/1', credits:4, period: ['IV'], language:'FI', school:'Language Centre'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group B/2', credits:5, period: ['V'], language:'FI', school:'Language Centre'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group B/3', credits:6, period: ['IV', 'V'], language:'FI', school:'SCI School of Science'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group B/4', credits:7, period: ['III', 'IV'], language:'FI', school:'SCI School of Science'},
    {code:'T-121.5000', name:'Interaction Design and Evaluation group B/5', credits:8, period: ['III'], language:'FI', school:'SCI School of Science'},
    {code:'DOM-E5038', name:'Generative and Interactive Narratives', credits:4, period: ['V'], language:'FI', school:'ELEC School of Electrical Engineering'},
    {code:'DOM-E5059', name:'Bodily Interaction', credits:4, period: ['V'], language:'FI', school:'ELEC School of Electrical Engineering'},
    {code:'DOM-E5043', name:'Physical Interaction Design', credits:1, period: ['I', 'II', 'III', 'IV'], language:'FI', school:'ELEC School of Electrical Engineering'},
    {code:'T-121.5450', name:'Interaction Design and Evaluation P', credits:8, period: ['I','II', 'III', 'IV', 'V'], language:'FI', school:'SCI School of Science'},
  ];

  $scope.getPeriods = function(periods) {
    if (periods.length === 1) {
      return periods[0];
    }
    else {
      var per = periods[0].concat('-', periods[periods.length - 1]);
      return per;
    }
  };

  $scope.predicate = 'name';
  $scope.searchText = 'Intera';
  $scope.periods = {
    period1: false,
    period2: false,
    period3: false,
    period4: false,
    period5: false,
  };
  $scope.credits = {
    credit1: false,
    credit2: false,
    credit3: false,
    credit4: false,
    credit5: false,
    credit6: false,
  };
  $scope.languages = {
    finnish: false,
    english: false,
    swedish: false,
  };
  $scope.schools = 'all';
  $scope.resetFilters = function() {
    $scope.periods = {
      period1: false,
      period2: false,
      period3: false,
      period4: false,
      period5: false,
    };
    $scope.credits = {
      credit1: false,
      credit2: false,
      credit3: false,
      credit4: false,
      credit5: false,
      credit6: false,
    };
    $scope.languages = {
      finnish: false,
      english: false,
      swedish: false,
    };
    $scope.schools = 'all';
  };
}]);


