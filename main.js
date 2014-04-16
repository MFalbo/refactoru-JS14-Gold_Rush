$(document).on('ready', function() {

	$('.img').on('click',function(e){

		console.log(e);
		console.log($(this));
		var posX = e.pageX;
		var posY = e.pageY;

				var pointer = $('<div class="pointer"></div>');
				pointer.css('position','absolute').css('top', e.pageY-25).css('left', e.pageX-25);
				$('.container').append(pointer);
				console.log(e.pageX, e.pageY);

	});

	$('.container').on('click','.pointer', function(){

			$(this).remove();
			
	});

  
});



