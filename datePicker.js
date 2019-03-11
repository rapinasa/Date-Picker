
var choosenDate = document.getElementById("choosenDateFrom");
var choosenDateFrom = document.getElementById("choosenDateFrom");
var choosenDateTo = document.getElementById("choosenDateTo");
var mainDateFrom = document.getElementById("mainDateFrom");
var mainDateTo =  document.getElementById("mainDateTo");

function chooseDate(){
var choosenOption = document.getElementById('selection').value;
var date = new Date();
var todayDate = new Date(date.setDate(date.getDate()));
var yersterdayDate = new Date(date.setDate(date.getDate()-1));
var last7Date =new Date(date.setDate(date.getDate()-6));
var last30Date = new Date(date.setDate(date.getDate()-23));
var last90Date = new Date(date.setDate(date.getDate()-60));


if( choosenOption == "value2") {
     mainDateFrom.valueAsDate = new Date (yersterdayDate);
     mainDateTo.valueAsDate = new Date (todayDate);
}
else if( choosenOption == "value3") {
     mainDateFrom.valueAsDate = new Date (last7Date);
     mainDateTo.valueAsDate = new Date (todayDate);
}
else if( choosenOption == "value4") {
     mainDateFrom.valueAsDate = new Date (last30Date);
     mainDateTo.valueAsDate = new Date (todayDate);
}
else if( choosenOption == "value5") {
     mainDateFrom.valueAsDate = new Date (last90Date);
     mainDateTo.valueAsDate = new Date (todayDate);
}
else{
	mainDateFrom.valueAsDate = new Date (todayDate);
	mainDateTo.valueAsDate = new Date (todayDate);
}
}

function apply(){
var monthArr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var a = mainDateFrom.value
var b = mainDateTo.value;
var monthFrom = monthArr[((a.slice(5,7))-1)]
var dateFrom = a.slice(8,10);
var yearFrom = a.slice(2,4);
var monthTo = monthArr[((b.slice(5,7))-1)]
var dateTo = b.slice(8,10);
var yearTo = b.slice(2,4);
choosenDateFrom.innerHTML = monthFrom+' '+dateFrom+','+yearFrom;
choosenDateTo.innerHTML = '- '+monthTo+' '+dateTo+','+yearTo;
}

function remove(){
choosenDateFrom.innerHTML = 'Date from...';
choosenDateTo.innerHTML = 'Date to...';
}

window.onload = apply();