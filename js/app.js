'use strict';

//This is my salmon cookies progect
var storesContainer = document.getElementById('stores');
var listItemEl;

var openHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//The store in Pike Place
var pikePlace = {
  name: 'Pike Place',
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

pikePlace.renderHoursAndCookiesSold = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in openHours){
    listItemEl = document.createElement('li');
    listItemEl.textContent = openHours[i] + ': ' + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};

//The store at SeaTac
var seaTac = {
  name: 'SeaTac',
  min: 3,
  max: 24,
  avgCookiesPerSale: 1.2,
  cookiesSoldEachHour: [],
};

seaTac.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

seaTac.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

seaTac.renderHoursAndCookiesSold = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in openHours){
    listItemEl = document.createElement('li');
    listItemEl.textContent = openHours[i] + ': ' + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl);
};

//The store at Seattle Center
var seattleCenter = {
  name: 'Seattle Center',
  min: 11,
  max: 38,
  avgCookiesPerSale: 3.7,
  cookiesSoldEachHour: [],
};

seattleCenter.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

seattleCenter.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

seattleCenter.renderHoursAndCookiesSold = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in openHours){
    listItemEl = document.createElement('li');
    listItemEl.textContent = openHours[i] + ': ' + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl)
};

//The Store at Capitol Hill
var capitolHill = {
  name: 'Capitol Hill',
  min: 20,
  max: 38,
  avgCookiesPerSale: 2.3,
  cookiesSoldEachHour: [],
};

capitolHill.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

capitolHill.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

capitolHill.renderHoursAndCookiesSold = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in openHours){
    listItemEl = document.createElement('li');
    listItemEl.textContent = openHours[i] + ': ' + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl)
};

//The Store at Alki
var alki = {
  name: 'Alki',
  min: 2,
  max: 16,
  avgCookiesPerSale: 4.6,
  cookiesSoldEachHour: [],
};

alki.calculateCustomersPerHour = function(){
  var randomAmount = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
  return Math.floor(randomAmount * this.avgCookiesPerSale);
};

alki.calculateCookiesSoldEachHour = function(){
  for(var i = 0; i < 15; i++){
    this.cookiesSoldEachHour.push(this.calculateCustomersPerHour());
  }
};

alki.renderHoursAndCookiesSold = function(){
  this.calculateCookiesSoldEachHour();

  storesContainer;
  var headerEl = document.createElement('h2');
  headerEl.textContent = this.name;
  storesContainer.appendChild(headerEl);

  var ulEl = document.createElement('ul');

  for(var i in openHours){
    listItemEl = document.createElement('li');
    listItemEl.textContent = openHours[i] + ': ' + this.cookiesSoldEachHour[i];
    ulEl.appendChild(listItemEl);
  }
  storesContainer.appendChild(ulEl)
};

pikePlace.renderHoursAndCookiesSold();
seaTac.renderHoursAndCookiesSold();
seattleCenter.renderHoursAndCookiesSold();
capitolHill.renderHoursAndCookiesSold();
alki.renderHoursAndCookiesSold();
