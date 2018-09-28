'use strict';

//This is my salmon cookies progect
var storesContainer = document.getElementById('stores');
var listItemEl;
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var CookieStores = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomers){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomers;
  this.cookiesSoldEachHour = [];
};

CookieStores.prototype.calculateCookiesPerHour = function() {
  var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomCustomers * this.avgCookiesPerSale);
};

CookieStores.prototype.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

CookieStores.prototype.calculateCookiesSoldEachHour = function(){
  for(var i in openHours){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

// CookieStores.prototype.renderHours = function(){
//   this.calculateCookiesSoldEachHour();

//   storesContainer;
//   var headerEl = document.createElement('h2');
//   headerEl.textContent = this.name;
//   storesContainer.appendChild(headerEl);

//   var ulEl = document.createElement('ul');

//   for(var i in this.cookiesSoldEachHour){ //give ul content
//     listItemEl = document.createElement('li');
//     listItemEl.textContent = openHours[i] + this.cookiesSoldEachHour[i];
//     ulEl.appendChild(listItemEl);
//   }

//   storesContainer.appendChild(ulEl);
// };

CookieStores.prototype.renderTableRow = function(){
  this.calculateCookiesSoldEachHour();

  var pandaTableEl = document.getElementById('panda-table');

  var trEl = document.createElement('tr'); //table row

  var thEl = document.createElement('th'); //table header
  thEl.textContent = this.name;
  trEl.appendChild(thEl); // add table header to the row

  var tdEl = document.createElement('td'); //table data
  tdEl.textContent = this.min;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td'); //Added new data to tdEl
  tdEl.textContent = this.max;
  trEl.appendChild(tdEl);

  tdEl = document.createElement('td');
  tdEl.textContent = this.averageCookiesPerHour;
  trEl.appendChild(tdEl);

  pandaTableEl.appendChild(trEl);
};


var pikePlace = new CookieStores('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStores('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieStores('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStores('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStores('Alki', 2, 16, 4.6);

console.log(pikePlace);
