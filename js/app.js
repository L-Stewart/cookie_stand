'use strict';
//This is my salmon cookies progect

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
//The store in Pike Place
var pikePlace = {
  name: 'First and Pike',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

pikePlace.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};
console.log(pikePlace.calculateCustomersPerHour());

pikePlace.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());

  }
};

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  var storesContainer = document.getElementById('stores');
  console.log(storesContainer);
  var headerEl = document.createElement('h2');
  console.log(headerEl);
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul'); //create an elemnt
  console.log(this.cookiesSoldEachHour);

  for(var i in openHours){
    var listItemEl = document.createElement('li');
    listItemEl.textContent = openHours[i] + ': ' + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);

    //same as
    //for(var i = 0; i < this.cookiesSoldEachHour.length; i++)
  }

  //append the ul
  storesContainer.appendChild(ulEl);
};
// pikePlace.calculateCookiesSoldEachHour();

//The store at SeaTac
var seaTac = {
  name: 'First and Pike',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
};

//The store at Seattle Center
var seattleCenter = {
  name: 'First and Pike',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
};

//The Store at Capitol Hill
var capitolHill = {
  name: 'First and Pike',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
  cookiesSoldEachHour: [],
};

//The Store at Alki
var alki = {
  name: 'First and Pike',
  min: 2,
  max: 16,
  avgCookiesPerSale: 4.6,
  cookiesSoldEachHour: [],
};