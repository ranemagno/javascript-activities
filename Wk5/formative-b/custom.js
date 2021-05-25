(function(){

  var submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', updateCard, false)

  function updateCard(){
    var imgResult = document.querySelector('#image').value;
    var bgResult = document.querySelector('#background').value;
    var fontResult = document.querySelector('#font').value;
    var msgResult = document.querySelector('#message');

    // Change card image
    var bgImg = document.querySelector('#bgImg');
    if (imgResult === 'christmas'){
      bgImg.src = 'assets/christmas.jpg';
    } else if (imgResult === 'valentines'){
      bgImg.src = 'assets/valentines.jpg';
    } else {
      bgImg.src = 'assets/birthday.jpg';
    }

    // Change card inside color
    var bgColor = document.querySelector('.card');
    if (bgResult === 'graphite') {
      bgColor.classList.remove('celadonBackground');
      bgColor.classList.remove('roseBackground');
      bgColor.classList.add('graphiteBackground');
    } else if (bgResult === 'rose') {
      bgColor.classList.remove('celadonBackground');
      bgColor.classList.remove('graphiteBackground');
      bgColor.classList.add('roseBackground');
    } else {
      bgColor.classList.add('celadonBackground');
      bgColor.classList.remove('roseBackground');
      bgColor.classList.remove('graphiteBackground');
    }

    // Change font
    var font = document.querySelector('#cardFont');
    if (fontResult === 'handwriting'){
      font.classList.add('handwriting');
      font.classList.remove('sketch');
      font.classList.remove('print');
    } else if (fontResult === 'print'){
      console.log('print font');
      font.classList.add('print');
      font.classList.remove('sketch');
      font.classList.remove('handwriting');
    } else {
      console.log('sketch font');
      font.classList.add('sketch');
      font.classList.remove('handwriting');
      font.classList.remove('print');
    }
  }

  // Change Border
  var borderResult = document.querySelector('#border').value;
  var border = document.querySelector('#cardBorder');
  if (borderResult === 'thin'){
    console.log('thin');
  }
  // if (borderResult === 'thin'){
  //   border.classList.add('smallBorder:after');
  //   border.classList.remove('bigBorder:after');
  //   border.classList.remove('filledBorder:after');
  //   border.classList.remove('noneBorder:after');
  //   console.log('thin');
  // } else if (borderResult === 'thick'){
  //   border.classList.add('bigBorder:after');
  //   border.classList.remove('smallBorder:after');
  //   border.classList.remove('filledBorder:after');
  //   border.classList.remove('noneBorder:after');
  //   console.log('thick');
  // } else if (borderResult === 'filled'){
  //   border.classList.add('filledBorder:after');
  //   border.classList.remove('smallBorder:after');
  //   border.classList.remove('bigBorder:after');
  //   border.classList.remove('noneBorder:after');
  //   console.log('filled');
  // } else {
  //   border.classList.add('noneBorder');
  //   border.classList.remove('smallBorder:after');
  //   border.classList.remove('bigBorder:after');
  //   border.classList.remove('filledBorder:after');
  //   console.log('none');
  //
  // }

}());
