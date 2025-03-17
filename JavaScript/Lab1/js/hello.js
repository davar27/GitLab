var today = new Date();
var hourNow = today.getHours();
var minNow = today.getMinutes();
var greeting;

const date1 = new Date("1 January 2000 03:15:30 GMT+07:00");
if (hourNow > 18) {
greeting = 'Good evening';
}
else if (hourNow > 12) {
greeting = 'Good afternoon';

}
else if (hourNow > 0) {
greeting = 'Good morning';
}
else {
greeting = 'Welcome';
}

document.write(greeting);
document.write("<br>");
document.write(hourNow.toString().padStart(2, '0') + ":" + minNow.toString().padStart(2, '0'));
