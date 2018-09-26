'use strict';

//Constructor for all stores
var Store = function(name, minCustomersPerHour, maxCustomersPerHour, averageCookiesSoldPerCustomers){
  this.name = name;
  this.min = minCustomersPerHour;
  this.max = maxCustomersPerHour;
  this.avgCookiesPerSale = averageCookiesSoldPerCustomers;
  this.cookiesSoldEachHour = [];
};

Store.prototype.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

var seaTac = new Store('SeaTac', 30, 35, 3.14);
console.log(seaTac);

//Original object code
var storesContainer = document.getElementById('stores');
var listItemEl;

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

pikePlace.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

pikePlace.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in this.cookiesSoldEachHour){ //give ul content
    listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);

    //same as
    //for(var i = 0; i < this.cookiesSoldEachHour.length; i++)
  }

  //append the ul
  storesContainer.appendChild(ulEl);
};
pikePlace.renderHours();
// pikePlace.calculateCookiesSoldEachHour();

var dd = {
  name: 'dd',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

dd.dcalculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

dd.dcalculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.dcalculateCustomersPerHour());
  }
};

dd.drenderHours = function(){
  this.dcalculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in this.cookiesSoldEachHour){ //give ul content
    listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);

    //same as
    //for(var i = 0; i < this.cookiesSoldEachHour.length; i++)
  }

  //append the ul
  storesContainer.appendChild(ulEl);
};
dd.drenderHours();
// pikePlace.calculateCookiesSoldEachHour();

var aa = {
  name: 'aa',
  min: 23,
  max: 65,
  avgCookiesPerSale: 6.3,
  cookiesSoldEachHour: [],
};

aa.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

aa.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

aa.renderHours = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in this.cookiesSoldEachHour){ //give ul content
    listItemEl = document.createElement('li');
    listItemEl.textContent = this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);

    //same as
    //for(var i = 0; i < this.cookiesSoldEachHour.length; i++)
  }

  //append the ul
  storesContainer.appendChild(ulEl);
};
aa.renderHours();
// pikePlace.calculateCookiesSoldEachHour();