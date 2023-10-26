const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];
const MONTH_DAYS = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let calendar = document.getElementById("calendar");
let date = new Date();
// date.setMonth(9);
let month = date.getMonth();
let monthLength = MONTH_DAYS[month];
let innerHTML = "<table border = 1><tr>";
let rowCounter = 1;

date.setDate(1);
let weekday = date.getDay() === 0 ? 7 : date.getDay();

for (let i = 0; i < WEEKDAYS.length; i++) {
    innerHTML += `<td>${WEEKDAYS[i]}</td>`;
}
innerHTML += "</tr><tr>";

let whiteDays = weekday - 1;
for (let i = 1; i <= whiteDays; i++) {
    innerHTML += "<td></td>";
}

for (let i = 1; i <= (7 - whiteDays); i++){
    innerHTML += `<td>${i}</td>`;
}

innerHTML += "<tr>";
for (let i = (7 - whiteDays) + 1; i <= monthLength; i++) {
    innerHTML += `<td>${i}</td>`;
    if (rowCounter % 7 === 0){
        innerHTML += "<tr>";
    }
    rowCounter++;
}
innerHTML += "</table><br><table border = 1><tr>";

let row = 1;
for (let i = 2 - weekday; i <= monthLength; i++) {
    innerHTML += (i <= 0) ? "<td>" : `<td>${i}`;
    if (row % 7 === 0){
        innerHTML += "<tr>";
    }
    row++;
}
innerHTML += "</table>";
calendar.innerHTML += innerHTML;


