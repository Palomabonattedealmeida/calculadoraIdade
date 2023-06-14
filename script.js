function calculateAge() {
    var dayInput = document.getElementById('day');
    var monthInput = document.getElementById('month');
    var yearInput = document.getElementById('year');
    var ageDays = document.getElementById('ageDays');
    var ageMonths = document.getElementById('ageMonths');
    var ageYears = document.getElementById('ageYears');
  
    var birthDate = new Date(yearInput.value, monthInput.value - 1, dayInput.value);
    var today = new Date();
  
    var ageInMilliseconds = today - birthDate;
    var ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    var ageInMinutes = Math.floor(ageInSeconds / 60);
    var ageInHours = Math.floor(ageInMinutes / 60);
    var ageInDays = Math.floor(ageInHours / 24);
  
    var ageDate = new Date(ageInMilliseconds);
    var ageYearsDiff = ageDate.getUTCFullYear() - 1970;
    var ageMonthsDiff = ageDate.getUTCMonth();
    var ageDaysDiff = ageDate.getUTCDate() - 1;
  
    ageDays.textContent = ageDaysDiff;
    ageMonths.textContent = ageMonthsDiff;
    ageYears.textContent = ageYearsDiff;
  }
  