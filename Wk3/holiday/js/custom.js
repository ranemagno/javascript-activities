// Plan of attack
// 1. Label classes and grab data, make variables
// 2. Create for loops to put data in DOM
// 3. Calculate total price


var holidayPlaces = document.querySelectorAll('#holiday option');
var hotelNames = document.querySelectorAll('#hotel option');
var bookBtn = document.querySelector('#bookBtn');

bookBtn.addEventListener('click', calculatePrice, false)

var holidayData = Object.entries(data);

// console.log(holidayData[0]);
// console.log(holidayData[0][0]);


var placeAndName = Object.values(data);


// Loop to show data
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


var holSelect = document.querySelector('#holiday')

// Calculate total price
function calculatePrice(holidayPrice) {
  var holidayPrice = 0;
  console.dir(holSelect);
  console.log(holSelect[0]);
  console.log(holidayPlaces[0].textContent);
  console.log(hotelNames);

  if (holidayPlaces.textContent) {

  }


  for (var i = 0; i < holSelect.length; i++) {
    console.log(holSelect[i].textContent);
  }
  for (var i = 0; i < holidayPlaces.length; i++) {
    console.log(holidayPlaces[i].textContent);
  }

  // for (var i = 0; i < holidayPlaces.length; i++) {
  //   console.log(holidayPlaces[i]);
  //   if (holidayPlaces[i] === 'Samoa') {
  //     holidayPrice = holidayPrice + placeAndName[0].price;
  //     break;
  //   } else {
  //     holidayPrice = holidayPrice + placeAndName[1].price;
  //   }
  // }
    console.log('Total price - $' + holidayPrice);
}

//
//   console.dir(holidayPlaces[0].textContent);
//   if (holidayPlaces[0].textContent === 'Samoa') {
//     holidayPrice = holidayPrice + placeAndName[0].price;
//   }
//    if (holidayPlaces[1].text === 'Fiji') {
//     holidayPrice = holidayPrice + placeAndName[1].price;
//     console.log('hello');
//   }
//    if (hotelNames[0].text === 'Hilton') {
//     holidayPrice = holidayPrice + placeAndName[2].price;
//     console.log('wow');
//   }
//   if (hotelNames[1].text === 'Sheraton') {
//     holidayPrice = holidayPrice + placeAndName[3].price;
//     console.log('gday');
//   }
//   console.log('Total price - $' + holidayPrice);
// }



  // displays the holidays and hotels
//   for (var i = 0; i < holidayPlaces.length; i++) {
//     holidayPlaces[i].textContent = holidayData[i].place;
//   }
//   for (var i = 0; i < hotelNames.length; i++) {
//     hotelNames[i].textContent = holidayData[i + 2].name;
//   }
//
// // console.log(hotelNames.length);
//   // calculates price
//   function calculatePrice() {
//     console.log("here's a price");
//     console.log(Object.entries(hotelNames));
//     if (hotelNames.textContent === 'Hilton'){
//       console.log('this is expensive');
//     }
//   }
