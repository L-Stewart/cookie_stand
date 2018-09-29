'use strict';

//This is my salmon cookies progect
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var CookieStores = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomers){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomers;
  this.cookiesSoldEachHour = [];
};

var pikePlace = new CookieStores('1st and Pike', 23, 65, 6.3);
var seaTac = new CookieStores('SeaTac', 3, 24, 1.2);
var seattleCenter = new CookieStores('Seattle Center', 11, 38, 3.7);
var capitolHill = new CookieStores('Capitol Hill', 20, 38, 2.3);
var alki = new CookieStores('Alki', 2, 16, 4.6);


CookieStores.prototype.calculateCustomersPerHour = function() {
  var randomCustomers = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomCustomers * this.avgCookiesPerSale);
};

CookieStores.prototype.calculateCookiesSoldEachHour = function(){
  for(var i in openHours){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

CookieStores.prototype.totalCookiesSum = function(){
  var cookiesSum = function(total, num){
    return total + num;
  };
  return this.cookiesSoldEachHour.reduce(cookiesSum);
};

var renderHeader = function(){
  openHours;

  var salmonCookieStoreTableHeader = document.getElementById('store-table');

  var tableHeaderRow = document.createElement('tr');
  openHours;

  var storename = document.createElement('th');

  storename.textContent = 'Open Hours: ';

  var tableHeaderHeader = document.createElement('th');
  tableHeaderHeader.appendChild(storename);
  salmonCookieStoreTableHeader.appendChild(tableHeaderHeader);


  for(var i in openHours){
    tableHeaderHeader = document.createElement('th');
    tableHeaderHeader.textContent = openHours[i];
    tableHeaderRow.appendChild(tableHeaderHeader);
    salmonCookieStoreTableHeader.appendChild(tableHeaderHeader);
  }
};
renderHeader();

CookieStores.prototype.renderTableRow = function(){
  this.calculateCookiesSoldEachHour();

  var salmonCookieStoreTable = document.getElementById('store-table');

  var tableRowElement = document.createElement('tr'); //table row

  var tableHeaderElement = document.createElement('th'); //table header
  tableHeaderElement.textContent = this.name;
  tableRowElement.appendChild(tableHeaderElement); // add table header to the row

  for(var i in this.cookiesSoldEachHour){
    var tableDataElement = document.createElement('td'); //table data
    tableDataElement.textContent = this.cookiesSoldEachHour[i];
    tableRowElement.appendChild(tableDataElement);
    salmonCookieStoreTable.appendChild(tableRowElement);
  }

  tableDataElement = document.createElement('td');
  tableDataElement.textContent = 'Total: ' + this.totalCookiesSum();
  tableRowElement.appendChild(tableDataElement);

  salmonCookieStoreTable.appendChild(tableRowElement);
};

var renderFooter = function(){

};

var storeArray = [
  pikePlace,
  seaTac,
  seattleCenter,
  capitolHill,
  alki
];

var renderCookieStores = function(stores){
  for(var i in stores){
    stores[i].renderTableRow();
  }
};

renderCookieStores(storeArray);
