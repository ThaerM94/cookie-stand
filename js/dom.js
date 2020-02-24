// 'use strict';
// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }
// var seattel = {
//     name : 'Seattel',
//     minNumCust : 23 ,
//     maxNumCust : 65 ,
//     avgNumOfCookeis : 6.3 ,
//     custNum : 0 ,
//     printArray : [] ,
//     total : 0 ,
//     hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   head : 'Pat\'s Salmon Cookies : Sales Data' ,
//   getCustNum : function (min , max){
//     this.custNum =getRandomInt(min, max);
//   } ,
//   finalResult : function (){
//     for(var i = 0 ; i < this.hours.length; i++){
//       this.getCustNum(23, 65);
//       var randomNC = this.custNum;
//       var NunOfCoPerHour = Math.ceil(randomNC * this.avgNumOfCookeis);
//       var result = ` At  ${this.hours[i] }  :  ${NunOfCoPerHour} cookies `;
//       this.printArray.push(result);
//       this.total = this.total + NunOfCoPerHour;
//     }
//     this.printArray.push(this.total);
//   } ,
//   finalOutPut : function (){
//     var container = document.getElementById('result');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h1El = document.createElement('h1');
//     articleEl.appendChild(h1El);
//     h1El.textContent = this.head;
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent=this.name;
//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(var j = 0 ; j < this.hours.length ; j++){
//       var liEl = document.createElement('li');
//       liEl.textContent = this.printArray[j];
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total ${this.total} ` ;
//     ulEl.appendChild(liEl);
//   }
// };
// seattel.finalResult();
// seattel.finalOutPut();
// var tokyo = {
//   name : 'Tokyo',
//   minNumCust : 3 ,
//   maxNumCust : 24 ,
//   avgNumOfCookeis : 1.2 ,
//   custNum : 0 ,
//   printArray : [] ,
//   total : 0 ,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCustNum : function (min , max){
//     this.custNum =getRandomInt(min, max);
//   } ,
//   finalResult : function (){
//     for(var i = 0 ; i < this.hours.length; i++){
//       this.getCustNum(3,24);
//       var randomNC = this.custNum;
//       // console.log(randomNC);
//       var NunOfCoPerHour = Math.ceil(randomNC * this.avgNumOfCookeis);
//       //console.log(NunOfCoPerHour);
//       var result = ` At  ${this.hours[i] }  :  ${NunOfCoPerHour} cookies `;
//       // var printArray = [];
//       this.printArray.push(result);
//       // console.log(result);
//       this.total = this.total + NunOfCoPerHour;
//     }
//     this.printArray.push(this.total);
//     //console.log(this.printArray);
//     //console.log(this.total);
//   } ,
//   finalOutPut : function (){
//     var container = document.getElementById('result');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent=this.name;
//     // console.log(articleEl);
//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(var j = 0 ; j < this.hours.length ; j++){
//       var liEl = document.createElement('li');
//       liEl.textContent = this.printArray[j];
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total ${this.total} ` ;
//     ulEl.appendChild(liEl);
//   }
// };
// tokyo.finalResult();
// tokyo.finalOutPut();
// var dubai = {
//   name : 'Dubai',
//   minNumCust : 11 ,
//   maxNumCust : 38 ,
//   avgNumOfCookeis : 3.7 ,
//   custNum : 0 ,
//   printArray : [] ,
//   total : 0 ,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCustNum : function (min , max){
//     this.custNum =getRandomInt(min, max);
//   } ,
//   finalResult : function (){
//     for(var i = 0 ; i < this.hours.length; i++){
//       this.getCustNum(11, 38);
//       var randomNC = this.custNum;
//       // console.log(randomNC);
//       var NunOfCoPerHour = Math.ceil(randomNC * this.avgNumOfCookeis);
//       //console.log(NunOfCoPerHour);
//       var result = ` At  ${this.hours[i] }  :  ${NunOfCoPerHour} cookies `;
//       // var printArray = [];
//       this.printArray.push(result);
//       // console.log(result);
//       this.total = this.total + NunOfCoPerHour;
//     }
//     this.printArray.push(this.total);
//     //console.log(this.printArray);
//     //console.log(this.total);
//   } ,
//   finalOutPut : function (){
//     var container = document.getElementById('result');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent=this.name;
//     // console.log(articleEl);
//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(var j = 0 ; j < this.hours.length ; j++){
//       var liEl = document.createElement('li');
//       liEl.textContent = this.printArray[j];
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total ${this.total} ` ;
//     ulEl.appendChild(liEl);
//   }
// };
// dubai.finalResult();
// dubai.finalOutPut();
// var paris = {
//   name : 'Paris',
//   minNumCust : 20 ,
//   maxNumCust : 38 ,
//   avgNumOfCookeis : 2.3 ,
//   custNum : 0 ,
//   printArray : [] ,
//   total : 0 ,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCustNum : function (min , max){
//     this.custNum =getRandomInt(min, max);
//   } ,
//   finalResult : function (){
//     for(var i = 0 ; i < this.hours.length; i++){
//       this.getCustNum(20,38);
//       var randomNC = this.custNum;
//       // console.log(randomNC);
//       var NunOfCoPerHour = Math.ceil(randomNC * this.avgNumOfCookeis);
//       //console.log(NunOfCoPerHour);
//       var result = ` At  ${this.hours[i] }  :  ${NunOfCoPerHour} cookies `;
//       // var printArray = [];
//       this.printArray.push(result);
//       // console.log(result);
//       this.total = this.total + NunOfCoPerHour;
//     }
//     this.printArray.push(this.total);
//     //console.log(this.printArray);
//     //console.log(this.total);
//   } ,
//   finalOutPut : function (){
//     var container = document.getElementById('result');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent=this.name;
//     // console.log(articleEl);
//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(var j = 0 ; j < this.hours.length ; j++){
//       var liEl = document.createElement('li');
//       liEl.textContent = this.printArray[j];
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total ${this.total} ` ;
//     ulEl.appendChild(liEl);
//   }
// };
// paris.finalResult();
// paris.finalOutPut();
// var lima = {
//   name : 'Lima',
//   minNumCust : 2 ,
//   maxNumCust : 16 ,
//   avgNumOfCookeis : 4.6 ,
//   custNum : 0 ,
//   printArray : [] ,
//   total : 0 ,
//   hours : ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   getCustNum : function (min , max){
//     this.custNum =getRandomInt(min, max);
//   } ,
//   finalResult : function (){
//     for(var i = 0 ; i < this.hours.length; i++){
//       this.getCustNum(2,16);
//       var randomNC = this.custNum;
//       // console.log(randomNC);
//       var NunOfCoPerHour = Math.ceil(randomNC * this.avgNumOfCookeis);
//       //console.log(NunOfCoPerHour);
//       var result = ` At  ${this.hours[i] }  :  ${NunOfCoPerHour} cookies `;
//       // var printArray = [];
//       this.printArray.push(result);
//       // console.log(result);
//       this.total = this.total + NunOfCoPerHour;
//     }
//     this.printArray.push(this.total);
//     //console.log(this.printArray);
//     //console.log(this.total);
//   } ,
//   finalOutPut : function (){
//     var container = document.getElementById('result');
//     var articleEl = document.createElement('article');
//     container.appendChild(articleEl);
//     var h2El = document.createElement('h2');
//     articleEl.appendChild(h2El);
//     h2El.textContent=this.name;
//     // console.log(articleEl);
//     var ulEl = document.createElement('ul');
//     articleEl.appendChild(ulEl);
//     for(var j = 0 ; j < this.hours.length ; j++){
//       var liEl = document.createElement('li');
//       liEl.textContent = this.printArray[j];
//       ulEl.appendChild(liEl);
//     }
//     liEl = document.createElement('li');
//     liEl.textContent = `Total ${this.total} ` ;
//     ulEl.appendChild(liEl);
//   }
// };
// lima.finalResult();
// lima.finalOutPut();








