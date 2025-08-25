let clock=document.querySelector(".clock")
 let dt=document.querySelector(".showDate")
function updateClock(){



let date=new Date();
let hrs=date.getHours();
let mins=date.getMinutes();
let sec=date.getSeconds();


 let ampm="AM";
if(hrs>=12){
 ampm="PM"
}

 if(hrs==0){
    hrs=12;

 }
 else if(hrs>12){
    hrs=hrs-12;
 }

 console.log(hrs+ " "+ ampm);
 
 function formatTime(unit){
     return unit<10 ? "0"+ unit:unit;

 }
 let formattedTime= formatTime(hrs)+":" + formatTime(mins)+":" + formatTime(sec);
 console.log(formattedTime);
 clock.innerText=formattedTime;
 
}
 setInterval(updateClock,1000);

 updateClock();

  function updateDate(){
    let date=new Date();
    let day=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();

    let weekdays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
     let weekday=weekdays[date.getDay()];

     day=day<10? "0"+day:day;
     month=month<10? "0"+month:month;

     let dateString=weekday+","+ day +"/"+ month+"/"+ year;
dt.innerText=dateString;

  }
  updateDate();