'use strict';

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
   var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
   var total=0;
   var custNum=0;
function shop (name,minCust,maxCust,avgCust){
    this.name=name;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCust=avgCust;
    this.custNum=0;
    this.total=0;
    this.printArray=[];
}
shop.prototype.getCustNum = function (min , max){
    this.custNum =getRandomInt(min, max);
}

shop.prototype.numCookies =function(){
    
    this.getCustNum(this.minCust,this.maxCust);
    for (var i=0;i<hours.length;i++){
        // var randomNum= this.getCustNum(this.minCust,this.maxCust);
        // console.log(this.custNum);
        var cookiesPerH=Math.ceil(this.custNum*this.avgCust);
        this.total+=this.cookiesPerH
        this.printArray.push(cookiesPerH);
    }


}


 var container = document.getElementById('result');
 var table1=document.createElement('table');

 shop.prototype.finalOutPut = function (){
        container.appendChild(table1);
        var tr1 = document.createElement('tr');
        table1.appendChild(tr1);
        var th1 =document.createElement('th');
        tr1.appendChild(th1);
        th1.textContent=' ';

        for(var i=0;i<hours.length;i++){
           var myCookies = document.createElement('th');
            tr1.appendChild(myCookies);
            myCookies.textContent = hours[i];
        }

        myCookies = document.createElement('th');
        tr1.appendChild(myCookies);
        myCookies.textContent = "Daily location total";
    }



function render (){
     var tr2 =document.createElement('tr');
     table1.appendChild(tr2);
     var td =document.createElement('td');
     tr2.appendChild(td);
     td.textContent=this.name;
     for(var i=0;i<hours.length;i++){
         var td=document.createElement('td');
         tr2.appendChild(td);
         td.textContent=this.printArray[i];
     }
}

var seattle = new shop ('seattle',23,65,6.3);
var tokyo = new shop('tokya',)


    getRandomInt();
    shop.prototype.finalOutPut();
 
shop.prototype.runderseattle = function(){
    salesResule.appendChild(tr2);
    var myCookies = document.createElement('td');
            tr3.appendChild(myCookies);
            myCookies.textContent = this.name;
    for (var x = 0; x <hours.length ; x++){
             myCookies = document.createElement('td');
            tr3.appendChild(myCookies);
            myCookies.textContent = this.numCoocky[x] ;
          }
          myCookies = document.createElement('td');
          tr3.appendChild(myCookies);
          myCookies.textContent = this.printArray[x];
    }

    var seattle = new shop ('seattle',23,65,6.3);
    seattle.getCustNum();
    seattle.numCookies();
    console.log(seattle);
    //     console.log(printArray)
    // shop.prototype.numCookies();
    //     shop.finalOutPut();
    // shop.runderseattle();


