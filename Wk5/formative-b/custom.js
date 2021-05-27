(function(){

  var submitBtn = document.querySelector('#submit');
  submitBtn.addEventListener('click', updateCard, false)

  function updateCard(){
    var imgResult = document.querySelector('#image').value;
    var bgResult = document.querySelector('#background').value;
    var fontResult = document.querySelector('#font').value;
    var msgResult = document.querySelector('#message').value;

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
    var text = document.querySelector('#cardText');
    text.textContent = msgResult
    if (fontResult === 'handwriting'){
      text.classList.add('handwriting');
      text.classList.remove('sketch');
      text.classList.remove('print');
    } else if (fontResult === 'print'){
      text.classList.add('print');
      text.classList.remove('sketch');
      text.classList.remove('handwriting');
    } else {
      text.classList.add('sketch');
      text.classList.remove('handwriting');
      text.classList.remove('print');
    }
    // Change Border ------ issue -------
    var borderResult = document.querySelector('#border').value;
    var border = document.querySelector('#cardBorder');
    if (borderResult === 'thin'){
      console.log('thin');
      border.classList.add('smallBorder');
      border.classList.remove('bigBorder');
      border.classList.remove('filledBorder');
      border.classList.remove('noneBorder');
    }
    if (borderResult === 'thin'){
      border.classList.add('smallBorder');
      border.classList.remove('bigBorder');
      border.classList.remove('filledBorder');
      border.classList.remove('noneBorder');
      console.log('thin');
    } else if (borderResult === 'thick'){
      border.classList.add('bigBorder');
      border.classList.remove('smallBorder');
      border.classList.remove('filledBorder');
      border.classList.remove('noneBorder');
      console.log('thick');
    } else if (borderResult === 'filled'){
      border.classList.add('filledBorder');
      border.classList.remove('smallBorder');
      border.classList.remove('bigBorder');
      border.classList.remove('noneBorder');
      console.log('filled');
    } else {
      border.classList.add('noneBorder');
      border.classList.remove('smallBorder');
      border.classList.remove('bigBorder');
      border.classList.remove('filledBorder');
      console.log('none');
    }
  }



}());
