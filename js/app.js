'use strict';

//This is my salmon cookies progect
var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var storeArray = [];

var CookieStores = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomers){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomers;
  this.cookiesSoldEachHour = [];

  storeArray.push(this);
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
  var storeTableHeader = document.getElementById('store-table');

  var tableHeader = document.createElement('thead');

  var headerRow = document.createElement('tr');

  var headerTitle = document.createElement('th');
  headerTitle.textContent = 'Open Hours: ';
  headerRow.appendChild(headerTitle);
  tableHeader.appendChild(headerRow);
  storeTableHeader.appendChild(tableHeader);

  var tableHeaderHeader = document.createElement('th');

  for(var i in openHours){
    tableHeaderHeader = document.createElement('th');
    tableHeaderHeader.textContent = openHours[i];
    headerRow.appendChild(tableHeaderHeader);
    tableHeader.appendChild(headerRow);
    storeTableHeader.appendChild(tableHeader);
  }
};

CookieStores.prototype.renderTableRow = function(){
  if(!this.cookiesSoldEachHour.length){
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

    tableDataElement = document.createElement('th');
    tableDataElement.textContent = 'Total: ' + this.totalCookiesSum();
    tableRowElement.appendChild(tableDataElement);

    salmonCookieStoreTable.appendChild(tableRowElement);
  }
};

var renderFooter = function(){
  var storeTableFooter = document.getElementById('store-table');

  var tableFooter = document.createElement('tfoot');

  var footerRow = document.createElement('tr');

  var footerTitle = document.createElement('th');
  footerTitle.textContent = 'Cookies Per Hour';
  footerRow.appendChild(footerTitle);
  tableFooter.appendChild(footerRow);
  storeTableFooter.appendChild(tableFooter);

  var footerHeader = document.createElement('th');

  var totalCookiesPerHour = 0; //Loop for getting the total cookies per hour from all stores.
  for(var i in openHours){
    for(var h in storeArray){
      totalCookiesPerHour += storeArray[h].cookiesSoldEachHour[i];
    }
    footerHeader = document.createElement('th');
    footerHeader.textContent = totalCookiesPerHour;
    footerRow.appendChild(footerHeader);
    tableFooter.appendChild(footerRow);
    storeTableFooter.appendChild(tableFooter);
    totalCookiesPerHour = 0;
  }

  var allCookies = 0;
  for(var a in openHours){
    for(var b in storeArray){
      allCookies += storeArray[b].cookiesSoldEachHour[a];
    }
  }
  footerHeader = document.createElement('th');
  footerHeader.textContent = 'Grand Total: ' + allCookies;
  footerRow.appendChild(footerHeader);
  tableFooter.appendChild(footerRow);
  storeTableFooter.appendChild(tableFooter);
};


var renderCookieStores = function(stores){
  for(var i in stores){
    stores[i].renderTableRow();
  }
};

var characterForm = document.getElementById('store-generator');
// var bodyElement = document.getElementById('body');

var newCookieStores = function (exampleEvent) {
  exampleEvent.preventDefault();
  // exampleEvent.stopPropagation();

  var storeName = exampleEvent.target['store'].value;
  var minCustomers = parseInt(exampleEvent.target.min.value);
  var maxCustomers = parseInt(exampleEvent.target.max.value);
  var avrCookieSales = parseInt(exampleEvent.target.average.value);

  var newStore = new CookieStores(storeName, minCustomers, maxCustomers, avrCookieSales);
};

characterForm.addEventListener('submit', newCookieStores);
characterForm.addEventListener('reset', resetTable);

var resetTable = function(){
  var deleteFooter = document.getElementById('store-table').deleteTFoot();
  deleteFooter;
  renderCookieStores(storeArray);
  renderFooter();
};



renderHeader();
renderCookieStores(storeArray);
renderFooter();

