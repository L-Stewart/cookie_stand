'use strict';
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
// //Random number generator
// var minMax = function() {
//   var randomNum = Math.floor((Math.random() * 100) +1);
//   console.log(randomNum);
// };
// minMax();

var firstAndPike = {
  min: 23,
  max: 65,
  averageSale: 6.3,
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
console.log(firstAndPike);

// var seaTac = {
//   min: 3,
//   max: 24,
//   averageSale: 1.2,
// };
// console.log(seaTac);

// var seattleCenter = {
//   min: 11,
//   max: 38,
//   averageSale: 3.7,
// };
// console.log(seattleCenter);

// var capitolHill = {
//   min: 20,
//   max: 38,
//   averageSale: 2.3,
// };
// console.log(capitolHill);

// var alki = {
//   min: 2,
//   max: 16,
//   averageSale: 4.6,
// };
// console.log(alki);
