// Plan of attack
// 1. Label classes and grab data, make variables
// 2. Create for loops to put data in DOM
// 3. Calculate total price


var holidayPlaces = document.querySelectorAll('#holiday option');
var hotelNames = document.querySelectorAll('#hotel option');
var bookBtn = document.querySelector('#bookBtn');

bookBtn.addEventListener('click', calculatePrice, false)

var holidayData = Object.values(data);
var holidayPrice = 0;

  // displays the holidays and hotels
  for (var i = 0; i < holidayPlaces.length; i++) {
    holidayPlaces[i].textContent = holidayData[i].place;
  }
  for (var i = 0; i < hotelNames.length; i++) {
    hotelNames[i].textContent = holidayData[i + 2].name;
  }

// console.log(hotelNames.length);
  // calculates price
  function calculatePrice() {
    console.log("here's a price");
    console.log(Object.entries(hotelNames));
    if (hotelNames.textContent === 'Hilton'){
      hotel[]
    }
  }
