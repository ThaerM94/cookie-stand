'use strict';
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var head = 'Pat\'s Salmon Cookies : Sales Data';
// var shops = [];
function shop (name,minNumCust,maxNumCust,avgNumOfCookeis){
this.name=name;
this.minNumCust=minNumCust;
this.maxNumCust=maxNumCust;
this.avgNumOfCookeis=avgNumOfCookeis;
this.custNum=0;
this.printArray=[];
this.total=0;
this.hours=hours;
this.head=head;
// shops.push(this);
}
shop.prototype.getCustNum = function (min,max){
    this.custNum =getRandomInt(min, max);
}
shop.prototype.finalResult = function (){
    for(var i = 0 ; i < this.hours.length; i++){
        this.getCustNum(this.minNumCust,this.maxNumCust);
        var randomNC = this.custNum;
        var NunOfCoPerHour = Math.ceil(randomNC * this.avgNumOfCookeis);
        var result = ` At  ${this.hours[i] }  :  ${NunOfCoPerHour} cookies `;
        this.printArray.push(result);
       this.total = this.total + NunOfCoPerHour;
    }
    this.printArray.push(this.total);
}
var tableE1;

shop.prototype.finalOutPut = function (){
    var container = document.getElementById('result');
    var articleEl = document.createElement('article');
    container.appendChild(articleEl);
    // var h2El = document.createElement('h2');
    // articleEl.appendChild(h2El);
    // h2El.textContent=this.name;
    // var ulEl = document.createElement('ul');
    // articleEl.appendChild(ulEl);
    // for(var j = 0 ; j < this.hours.length ; j++){
    //   var liEl = document.createElement('li');
    //   liEl.textContent = this.printArray[j];
    //   ulEl.appendChild(liEl);
    // }
    // liEl = document.createElement('li');
    // liEl.textContent = `Total ${this.total} ` ;
    // ulEl.appendChild(liEl);

     tableE1 = document.createElement('table');
    container.appendChild(tableE1);
    var trE1 = document.createElement('tr');
    tableE1.appendChild(trE1);
    var thE1 = document.createElement('th');
    trE1.appendChild(thE1);
    thE1.textContent='';
    for (var r=0;r<hours.length;r++){
         thE1 =document.createElement('th');
        trE1.appendChild(thE1),
        thE1.textContent=hours[r];

    }
    thE1 = document.createElement('th');
    trE1.appendChild(thE1);
    thE1.textContent='daily location total';
}

shop.prototype.finalseattle = function(){

    var trE2 = document.createElement('tr');
    tableE1.appendChild(trE2);
    var thE2 = document.createElement('th');
    trE1.appendChild(thE2);
    thE2.textContent=this.name
    for (var r=0;r<hours.length;r++){
         tdE2 =document.createElement('td');
        trE2.appendChild(tdE2),
        tdE2.textContent=this.printArray[r];

    }

}

shop.prototype.finaltokyo = function(){

    var trE3 = document.createElement('tr');
    tableE1.appendChild(trE3);
    var thE3 = document.createElement('th');
    trE3.appendChild(thE3);
    thE3.textContent=this.name
    for (var r=0;r<hours.length;r++){
        tdE2 =document.createElement('td');
        trE3.appendChild(tdE2),
        tdE2.textContent=this.printArray[r];

    }

}

shop.prototype.finaldubai=function(){
   
    var trE4 = document.createElement('tr');
    tableE1.appendChild(trE4);
    var thE4 = document.createElement('th');
    trE4.appendChild(thE4);
    thE4.textContent=this.name
    for (var r=0;r<hours.length;r++){
        tdE1 =document.createElement('td');
        trE4.appendChild(tdE1),
        tdE1.textContent=this.printArray;

    }
    
}

shop.prototype.finalparis=function(){
   
    var trE5 = document.createElement('tr');
    tableE1.appendChild(trE5);
    var thE5 = document.createElement('th');
    trE5.appendChild(thE5);
    thE5.textContent=this.name
    for (var r=0;r<hours.length;r++){
        tdE1 =document.createElement('td');
        trE5.appendChild(tdE1),
        tdE1.textContent=this.printArray;

    }
    
}

shop.prototype.finallima=function(){
   
    var trE6 = document.createElement('tr');
    tableE1.appendChild(trE6);
    var thE6 = document.createElement('th');
    trE6.appendChild(thE6);
    thE6.textContent=this.name
    for (var r=0;r<hours.length;r++){
        tdE1 =document.createElement('td');
        trE6.appendChild(tdE1),
        tdE1.textContent=this.printArray;

    }
    
}

// var trE2 = document.createElement('tr');
// tableE1.appendChild(trE2);
// var trE3 = document.createElement('tr');
// tableE1.appendChild(trE3);





// seattle
var seattle = new shop ('Seattel',23,65,6.3,);
seattle.getCustNum(this.minNumCust,this.maxNumCust);
seattle.finalResult();
seattle.finalOutPut();

// tokyo
var tokyo = new shop ('Tokyo',3,24,1.2);
tokyo.getCustNum(this.minNumCust,this.maxNumCust);
tokyo.finalResult();
tokyo.finaltokyo();

// dubai
var dubai = new shop ('Dubai',11,38,3.7);
dubai.getCustNum(this.minNumCust,this.maxNumCust);
dubai.finalResult();
dubai.finaldubai();

// paris
var paris = new shop ('Paris',20,38,2.3);
paris.getCustNum(this.minNumCust,this.maxNumCust);
paris.finalResult();
paris.finalparis();

// lima
var lima = new shop ('Lima',2,16,4.6);
lima.getCustNum(this.minNumCust,this.maxNumCust);
lima.finalResult();
lima.finallima();
// var tokyo = new shop ('Tokyo',3,24,1.2)
// var dubai = new shop ('Dubai',11,38,3.7,)
// var paris = new shop ('Paris',20,38,2.3,)
// var lima = new shop ('Lima',2,16,4.6,)

// for (var s=0;s<shops.length;s++){
// shops[s].getCustNum();
// shops[s].finalResult();
// shops[s].finalOutPut();
// }
// shop.getCustNum();
// shop.finalResult();
// shop.finalOutPut();
