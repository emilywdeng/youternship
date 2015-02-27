(function(angular) {
  'use strict';
  angular.module('FilterInControllerModule', []).config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('{%');
    $interpolateProvider.endSymbol('%}');
  }).
  controller('FilterController', ['filterFilter', function(filterFilter) {
    this.array = [
  {
    'mentorName': 'Larry Page',
    'mentorImg': 'larrypage.jpg',
    'mentorMOOC': 'Search Engines',
    'mentorTeach': 'Search engine optimization, minimalist design, Java'
  },
{
  'mentorName': 'Marissa Mayer',
  'mentorImg': 'marissa.jpg',
  'mentorMOOC': 'Product Management',
  'mentorTeach': 'HTML, CSS, Javascript'
},
{
  'mentorName': 'Pooja Sankar',
  'mentorImg': 'pooja.jpg',
  'mentorMOOC': 'Entrepreneurship',
  'mentorTeach': 'Management skills, Python'
},
{
  'mentorName': 'Corbin Lewis',
  'mentorImg': 'CorbinLewisHacker.jpg',
  'mentorMOOC': 'Web Development',
  'mentorTeach': 'HTML, CSS, Javascript, Python, Postgres, MongoDB, AngularJS'
}

];
this.filteredArray = filterFilter(this.array, 'a');
}]);
})(window.angular);


mentors = {
  'mentor': [
{
  'mentorName': 'Larry Page',
  'mentorImg': 'larrypage.jpg',
  'mentorMOOC': 'Search Engines',
  'mentorTeach': 'Search engine optimization, minimalist design, Java'
},
{
  'mentorName': 'Marissa Mayer',
  'mentorImg': 'marissa.jpg',
  'mentorMOOC': 'Product Management',
  'mentorTeach': 'HTML, CSS, Javascript'
},
{
  'mentorName': 'Pooja Sankar',
  'mentorImg': 'pooja.jpg',
  'mentorMOOC': 'Entrepreneurship',
  'mentorTeach': 'Management skills, Python'
}]}
