// Task A Psuedo
// 1. Label classes and grab data, make variables
// 2. Create for loops to put data in DOM
// 3. Calculate total price

// Task B Psuedo
// 1. Print total on DOM by altering element text content
// 2. Make panel on right side where total will be shown
// 3. Gather 4 images and place them into the right panel
// 4. Turn images into selections
// 5. Only display selected images after book
// 6. Add animations or style changes to show that you have selected the image

(function(){

  var holidayPlaces = document.querySelectorAll('#holiday option');
  var hotelNames = document.querySelectorAll('#hotel option');
  var bookBtn = document.querySelector('#bookBtn');
  var holidayData = Object.entries(data);
  var placeAndName = Object.values(data);

  var holidayImg = document.querySelector('#holidayImg');
  var hotelImg= document.querySelector('#hotelImg');

  bookBtn.addEventListener('click', calculatePrice, false)


  // START - Loop to show data
  for (var i = 0; i < holidayData.length; i++) {

    // console.log(holidayData[i]);
    // console.log(holidayData[i][i]); accesses the array within array


    if (holidayData[i][0] === "holidayOne"){
      holidayPlaces[i].textContent = placeAndName[i].place;
    } else if (holidayData[i][0] === "holidayTwo"){
      holidayPlaces[i].textContent = placeAndName[i].place;
    } else if (holidayData[i][0] === "hotelOne") {
      hotelNames[0].textContent = placeAndName[i].name;
    } else {
      hotelNames[1].textContent = placeAndName[i].name;
    }
  }
  // END - Loop to show data


  // START - Calculate and show total price and img
  function calculatePrice() {
    var holSelect = document.querySelector('#holiday')
    var holSelected = holSelect.value;
    var hotSelect = document.querySelector('#hotel')
    var hotSelected = hotSelect.value;
    var holidayPrice = 0;
    var hotelPrice = 0;
  
    if (holSelected === 'Samoa') {
      holidayPrice = holidayPrice + placeAndName[0].price;
      holidayImg.style.backgroundImage = placeAndName[0].img;
    }
    if (holSelected === 'Fiji'){
      holidayPrice = holidayPrice + placeAndName[1].price;
      holidayImg.style.backgroundImage = placeAndName[1].img;
    }
    if (hotSelected === 'Hilton'){
      hotelPrice = hotelPrice + placeAndName[2].pricePerNight;
      hotelImg.style.backgroundImage = placeAndName[2].img;
    }
    if (hotSelected === 'Sheraton'){
      hotelPrice = hotelPrice + placeAndName[3].pricePerNight;
      hotelImg.style.backgroundImage = placeAndName[3].img;
    }
    var totalPrice = holidayPrice + hotelPrice;
    console.log('Total price - $' + totalPrice);

    var totalDisplay = document.querySelector('#totalDisplay')
    totalDisplay.textContent = 'Total: $' + totalPrice;
  }
  // END - Calculate and show total price

}())
// END - IIFE
