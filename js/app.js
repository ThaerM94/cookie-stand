'use strict';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var container = document.getElementById('result');
var table1=document.createElement('table');
var total=0;
var custNum=0;
   var shops=[];
function shop (name,minCust,maxCust,avgCust){
    this.name=name;
    this.minCust=minCust;
    this.maxCust=maxCust;
    this.avgCust=avgCust;
    this.custNum=0;
    this.total=0;
    this.printArray=[];
    shops.push(this);
}
shop.prototype.getCustNum = function (min , max){
    this.custNum =getRandomInt(min, max);
}

shop.prototype.numCookies =function(){
    
    for (var i=0;i<hours.length;i++){
        this.getCustNum(this.minCust,this.maxCust);
        // var randomNum= this.getCustNum(this.minCust,this.maxCust);
        // console.log(this.custNum);
        var cookiesPerH=Math.ceil(this.custNum*this.avgCust);
        this.printArray.push(cookiesPerH);
        this.total+=cookiesPerH;

    }
}

shop.prototype.render =function(){
    for (var j=0;j<shops.length;j++)
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
    var tdt = document.createElement('td');
    tr2.appendChild(tdt)
    tdt.textContent=this.total;

}



 function header (){
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
    header();





var seattle = new shop ('Seattle',23,65,6.3);
var tokyo = new shop('Tokya',3,24,1.2);
var dubai = new shop('Dubai',11,38,3.7);
var paris = new shop ('Paris',20,38,2.3);
var lima = new shop ('Lima',2,16,4.6)

for (var i =0;i<shops.length;i++){
    // shops[i].getCustNum();
    shops[i].numCookies();
    shops[i].render();
}
 

function footer (){
    var totalOfTotal=0;
var totalAll =document.createElement('tr')
table1.appendChild(totalAll);
var td3 =document.createElement('td');
totalAll.appendChild(td3);
td3.textContent='Total';
for(var i=0;i<hours.length;i++){
    var hourTotal=0; 
    for (var t=0;t<shops.length;t++){
        hourTotal += shops[t].printArray[i];
    }
    var td5 =document.createElement('td');
    totalAll.appendChild(td5);
    td5.textContent=hourTotal;
    totalOfTotal+=hourTotal;
}
var td7 =document.createElement('td');
totalAll.appendChild(td7);
td7.textContent=`${totalOfTotal}.`;
}
footer();
