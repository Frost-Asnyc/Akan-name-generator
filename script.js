document.getElementById("akanForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get values
  let day = parseInt(document.getElementById("day").value);
  let month = parseInt(document.getElementById("month").value);
  let year = parseInt(document.getElementById("year").value);

  let gender = document.getElementById("gender").value;
  let name = document.getElementById("name").value;
  let result = document.getElementById("result");

  // Check if fields are empty
  if (!day || !month || !year || !gender || !name) {
    result.textContent = "Please fill in all fields.";
    return;
  }

  // VALID DATE CHECK (Fixes Feb 30, Apr 31, etc.)
  function isValidDate(day, month, year) {
    // Check month range first
    if (month < 1 || month > 12) {
      return false;
    }

    // Days in each month
    let daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    // Leap year check
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      daysInMonth[1] = 29; // February = 29 days
    }

    // Check if day is valid for that month
    return day >= 1 && day <= daysInMonth[month - 1];
  }

  // Show error if invalid date
  if (!isValidDate(day, month, year)) {
    result.textContent =
      "Invalid date! Please enter a real birthdate (example: February has only 28 or 29 days).";
    return;
  }

  // Zeller's formula: Jan & Feb belong to previous year
  if (month <= 2) {
    month += 12;
    year -= 1;
  }

  let CC = Math.floor(year / 100);
  let YY = year % 100;

  // Zeller's congruence
  let d =
    (day +
      Math.floor((26 * (month + 1)) / 10) +
      YY +
      Math.floor(YY / 4) +
      Math.floor(CC / 4) -
      2 * CC) %
    7;

  // Fix negative values
  if (d < 0) d += 7;

  // Remap: Zeller gives 0=Saturday, we need 0=Sunday
  let dayMap = [1, 2, 3, 4, 5, 6, 0];
  d = dayMap[d];

  // Akan names
  let maleNames = [
    "Kwasi",  //1. sunday
    "Kwadwo", //2. monday
    "Kwabena", //3.tuesday
    "Kwaku", // 4.wednesday
    "Yaw",  //5.thursday
    "Kofi", //6.friday
    "Kwame", //7.saturday
  ];

  let femaleNames = [
    "Akosua", //1.sunday
    "Adwoa", //2.monday
    "Abenaa", //3.tuesday
    "Akua",//4.wednesday
    "Yaa",//5.thursday
    "Afua",//6.friday
    "Ama",//7.saturday
  ];

  // Show result
  let akanName = gender === "male" ? maleNames[d] : femaleNames[d];
  result.textContent = name + ", your Akan name is: " + akanName;
});
