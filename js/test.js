// 'use strict';

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





var Character = function(name, level, race, characterClass) {
    this.name = name;
    this.level = level;
    this.race = race;
    this.characterClass = characterClass;
    this.isCool = true;
};

CharacterData.prototype.talkAboutSelf = function(){
    var resultString = `Hi my name is ${this.name}, I am a level ${this.level} ${this.race} ${this.characterClass}`;
    console.log(resultString);
}

var makeCharacter = function(exampleEvent) { //whole block best practice syntax
  exampleEvent.preventDefault();
  exampleEvent.stopPropagation();
  //   console.log(exampleEvent);
  //   console.log(exampleEvent.target);
  //   console.log(exampleEvent.target.level);
  //   console.log(exampleEvent.target.level.value);
  var level = exampleEvent.target.level.value;
  var characterName = exampleEvent.target['character-name'].value;
  var fantasyRace = exampleEvent.target['fantasy-race'].value;
  var characterClass = exampleEvent.target.class.value;
  console.log(level, characterName, fantasyRace, characterClass);
};


characterForm.addEventListener('submit', makeCharacter);


characterForm.addEventListener('submit', function(exampleEvent){
  console.log(exampleEvent);
});





// pikePlace.prototype.renderStoreHours = function(){
//   if(!this.cookiesSoldEachHour.length){
//     this.calculateCookiesSoldEachHour();

//     var storesContainer = document.getElementById('stores');

//     var headerEl = document.createElement('h2');

//     headerEl.textContent = this.name;

//     storesContainer.appendChild(headerEl);

//     var ulEl = document.createElement('ul');

//     for(var i in this.cookiesSoldEachHour){
//       var listItemEl = document.createElement('li');

//       listItemEl.textContent = this.cookiesSoldEachHour[i];

//       ulEl.appendChild(listItemEl);
//     }

//     storesContainer.appendChild(ulEl);
//   }
// };



// var sdds = new Store('Sdds', 3, 5, 3.4, 15);



// PandaStore.prototype.renderTableRow = function(){
//   this.calculateCookiesSoldEachHour();

//   var pandaTableEl = document.getElementById('panda-table');

//   var trEl = document.createElement('tr'); //table row

//   var thEl = document.createElement('th'); //table header
//   thEl.textContent = this.name;
//   trEl.appendChild(thEl); // add table header to the row

//   var tdEl = document.createElement('td'); //table data
//   tdEl.textContent = this.min;
//   trEl.appendChild(tdEl);

//   tdEl = document.createElement('td'); //Added new data to tdEl
//   tdEl.textContent = this.max;
//   trEl.appendChild(tdEl);

//   tdEl = document.createElement('td');
//   tdEl.textContent = this.averageCookiesPerHour;
//   trEl.appendChild(tdEl);

//   pandaTableEl.appendChild(trEl);
// };

// var allStores = [];

// allStores.push//storename();

// var renderallStoresAsTableRows = function(){
//   for(var i in allStores){

//   }
// }



//The store in Pike Place
// var pikePlace = {
//   name: 'Pike Place',
//   min: 23,
//   max: 65,
//   avgCookiesPerSale: 6.3,
//   cookiesSoldEachHour: [],
// };

// //The store at SeaTac
// var seaTac = {
//   name: 'SeaTac',
//   min: 3,
//   max: 24,
//   avgCookiesPerSale: 1.2,
//   cookiesSoldEachHour: [],
// };

// //The store at Seattle Center
// var seattleCenter = {
//   name: 'Seattle Center',
//   min: 11,
//   max: 38,
//   avgCookiesPerSale: 3.7,
//   cookiesSoldEachHour: [],
// };

// //The Store at Capitol Hill
// var capitolHill = {
//   name: 'Capitol Hill',
//   min: 20,
//   max: 38,
//   avgCookiesPerSale: 2.3,
//   cookiesSoldEachHour: [],
// };

// //The Store at Alki
// var alki = {
//   name: 'Alki',
//   min: 2,
//   max: 16,
//   avgCookiesPerSale: 4.6,
//   cookiesSoldEachHour: [],
// };