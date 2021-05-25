// All Custom JS

// Console log the global scope
console.log(window);

// A self invoking function
(function(){
// Write all custom code here

// Setting up all of the tooltips
	$(function () {
	  $('[data-toggle="tooltip"]').tooltip({animation: true, html: false});
	})

// Setting up popover
	$(function () {
	  $('[data-toggle="popover"]').popover()
	})

// My modal
	var powerButton = document.querySelector('.fa-power-off');
	powerButton.addEventListener('click', showModal, false)

	function showModal() {
		$('.modal').modal('show')
	}

}());
// Global Wrapping Function ENDS
