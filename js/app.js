'use strict';
var time = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var cookies = [];

var firstAndPike = {
  min: 23,
  max: 65,
  averageSale: 6.3,
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

cookies.push(Math.floor(firstAndPike.averageSale * firstAndPike.random(firstAndPike.min, firstAndPike.max)));

var timeSheet = time.forEach(function(element){
  console.log(element + ': ' + cookies);
});

// console.log(firstAndPike.averageSale * firstAndPike.random(firstAndPike.min, firstAndPike.max));
// console.log(firstAndPike.random(firstAndPike.min, firstAndPike.max));

// var seaTac = {
//   min: 3,
//   max: 24,
//   averageSale: 1.2,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// console.log(seaTac.random(seaTac.min, seaTac.max));

// var seattleCenter = {
//   min: 11,
//   max: 38,
//   averageSale: 3.7,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// console.log(seattleCenter.random(seattleCenter.min, seattleCenter.max));

// var capitolHill = {
//   min: 20,
//   max: 38,
//   averageSale: 2.3,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// console.log(capitolHill.random(capitolHill.min, capitolHill.max));

// var alki = {
//   min: 2,
//   max: 16,
//   averageSale: 4.6,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// console.log(alki.random(alki.min, alki.max));
