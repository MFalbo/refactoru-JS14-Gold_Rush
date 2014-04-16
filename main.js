$(document).on('ready', function() {

	$(document).on('click',function(e){

		console.log(e);
		console.log($(this));
		var posX = e.pageX;
		var posY = e.pageY;

		$('.container').children().each(function(i,elem){

			var elemTop = $(elem).css('top');
			var elemLeft = $(elem).css('left');	

			if((elemTop >= posY && elemTop <= posY+50) && (elemTop >= posX && elemTop <= posX+50)){

				$(elem).remove();
			}
			else{
				var pointer = $('<div class="pointer"></div>');
				pointer.css('position','absolute').css('top', e.pageY-25).css('left', e.pageX-25);
				$('.container').append(pointer);
				console.log(e.pageX, e.pageY);
			}
		});


	});

  
});



