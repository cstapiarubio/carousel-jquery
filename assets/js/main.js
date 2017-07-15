$(function() {
	/** -----------------------------------------
	 * Modulo del Slider 
	 -------------------------------------------*/
	 var SliderModule = (function() {
	 	var pb = {};
	 	pb.el = $('#slider');
	 	pb.items = {
	 		panels: pb.el.find('li'),
	 	}

	 	// Interval del Slider
	 	var SliderInterval,
	 		currentSlider = 0,
	 		nextSlider = 1,
	 		lengthSlider = pb.items.panels.length;

	 	// Constructor del Slider
	 	pb.init = function(settings) {
	 		this.settings = settings || {duration: 6000}
	 		/*var items = this.items,
	 			lengthPanels = items.panels.length,*/
	 			 var output = '';

	 // Activamos nuestro Slider
	 		activateSlider();

	 		// Insertamos nuestros botones
	 		for(var i = 0; i < lengthSlider; i++) {
	 			if(i == 0) {
	 				output += '<li class="active"></li>';
	 			} else {
	 				output += '<li></li>';
	 			}
	 		}

	 		/*$('#slider-controls').html(output);*/

	 		
	 		// Eventos para los controles
	 		$('#slider-controls').html(output).on('click', 'li', function(e) {
	 			var $this = $(this);
	 			if(currentSlider !== $this.index()) {
	 				changePanel($this.index());
	 			};
	 		});

	 	}

	 	// Funcion para activar el Slider
	 	var activateSlider = function() {
	 		SliderInterval = setInterval(pb.startSlider, 6000);
	 	}

	 	// Funcion para la Animacion
	 	pb.startSlider = function() {
	 		var panels = pb.items.panel,
	 			controls = $('#slider-controls li');
	 		// Comprobamos si es el ultimo panel para reiniciar el conteo
	 		if(nextSlider >= lengthSlider) {
	 			nextSlider = 0;
	 			currentSlider = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(currentSlider).addClass('active');
	 		items.panels.eq(currentSlider).fadeOut('slow');
	 		items.panels.eq(nextSlider).fadeIn('slow');

	 		// Actualizamos los datos del slider
	 		currentSlider = nextSlider;
	 		nextSlider += 1;
	 	}

	 	// Funcion para Cambiar de Panel con Los Controles
	 	pb.startSlider = function() {
	 		clearInterval(SliderInterval);
	 		var panels = pb.items.panel,
	 			controls = $('#slider-controls li');
	 		// Comprobamos si el ID esta disponible entre los paneles
	 		if(nextSlider >= lengthSlider) {
	 			nextSlider = 0;
	 			currentSlider = lengthSlider-1;
	 		}

	 		controls.removeClass('active').eq(currentSlider).addClass('active');
	 		panels.eq(currentSlider).fadeOut('slow');
	 		panels.eq(nextSlider).fadeIn('slow');

	 		// Volvemos a actualizar los datos del slider
	 		currentSlider = nextSlider;
	 		nextSlider +=1;
	 		// Reactivamos nuestro slider
	 		activateSlider();
	 	}

		return pb;
	 }());

	 SliderModule.init({duration: 2000});

});