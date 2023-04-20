var timeNow = new Date();  //local time

var nextYearGreenwich = new Date(timeNow.getFullYear() + 1, 0, 1);
nextYearGreenwich.setHours(nextYearGreenwich.getHours() + 2);  //+2 because of greenwich time

var hoursLeftToGreenwichNewYear = Math.floor((nextYearGreenwich - timeNow) / (1000 * 60 * 60));

alert("Hours left to New Year by UTC: " + hoursLeftToGreenwichNewYear);