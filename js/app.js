'use strict';

var firstAndPike = {
  min: 23,
  max: 65,
  averageSale: 6.3,
  random: function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
};
var fNpCookies = [];

for(var i = 0; i < 15; i++){
  fNpCookies.push(Math.floor(firstAndPike.averageSale * firstAndPike.random(firstAndPike.min, firstAndPike.max)));
  fNpCookies.toString(fNpCookies[i]);
}
console.log(fNpCookies);

// var seaTac = {
//   min: 3,
//   max: 24,
//   averageSale: 1.2,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// var sTcookies = [];

// for(var i = 0; i < 15; i++){
//   sTcookies.push(Math.floor(seaTac.averageSale * seaTac.random(seaTac.min, seaTac.max)));
// }
// console.log(sTcookies);
// // console.log(seaTac.random(seaTac.min, seaTac.max));

// var seattleCenter = {
//   min: 11,
//   max: 38,
//   averageSale: 3.7,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// var sCcookies = [];

// for(var i = 0; i < 15; i++){
//   sCcookies.push(Math.floor(seattleCenter.averageSale * seattleCenter.random(seattleCenter.min, seattleCenter.max)));
// }
// console.log(sCcookies);
// console.log(seattleCenter.random(seattleCenter.min, seattleCenter.max));

// var capitolHill = {
//   min: 20,
//   max: 38,
//   averageSale: 2.3,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// var cHcookies = [];

// for(var i = 0; i < 15; i++){
//   cHcookies.push(Math.floor(capitolHill.averageSale * capitolHill.random(capitolHill.min, capitolHill.max)));
// }
// console.log(cHcookies);

// console.log(capitolHill.random(capitolHill.min, capitolHill.max));

// var alki = {
//   min: 2,
//   max: 16,
//   averageSale: 4.6,
//   random: function(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }
// };
// var aCookies = [];

// for(var i = 0; i < 15; i++){
//   aCookies.push(Math.floor(alki.averageSale * alki.random(alki.min, alki.max))).toString();
// }
// console.log(aCookies);

// // console.log(alki.random(alki.min, alki.max));

// var options = {
//   time: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
//   customers: [fNpCookies, sTcookies, sCcookies, cHcookies, aCookies]
// };

// function makeUL(array) {
// // Create the timeList element:
//   var timeList = document.createElement('ul');
//   for(var i = 0; i < 15; i++) {
//   // Create the timeList item:
//     var item = document.createElement('li');

//     // Set its contents:
//     item.appendChild(document.createTextNode(options.time[i]));
//     item.appendChild(document.createTextNode(options.customers[fNpCookies[i]]));

//     // Add it to the timeList:
//     timeList.appendChild(item);
//   }
//   // Finally, return the constructed timeList:
//   return timeList;
// }

// // Add the contents of options[0] to #sale:
// document.getElementById('fNp').appendChild(makeUL(options.time));
// document.getElementById('sT').appendChild(makeUL(options.time));
// document.getElementById('sC').appendChild(makeUL(options.time));
// document.getElementById('cH').appendChild(makeUL(options.time));
// document.getElementById('alki').appendChild(makeUL(options.time));
// console.log(options);
