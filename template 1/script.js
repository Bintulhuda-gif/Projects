$(document).ready(function(){
    $('#menu').click(function(){
     $(this).toggleClass('fa-times');
     $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });
});
var dt=new Date();
dt.setDate(1);
var day=dt.getDay();
console.log(dt.getDay());
var endDate=new Date(
    dt.getFullYear(),dt.getMonth()+1,0).getDate();
var prevDate=new Date(dt.getFullYear(),dt.getMonth(),0).getDate();
var today=new Date().getDate();
var months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
document.getElementById("date_str").innerHTML=dt.toDateString();
document.getElementById("month").innerHTML=months[dt.getMonth()];
var cells="";
for(i=day;i>0;i--){
    cells+="<div class=>" + i + "</div>";
    }
for(i=1;i<=endDate;i++){
    if(i==today){
        cells+="<div class='today'>" + i + "</div>";
    }
    else{
        cells+="<div>" + i + "</div>"; 
    }
}
 document.getElementsByClassName("days")[0].innerHTML=cells;   