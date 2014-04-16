$(document).on('ready', function() {

	$('.img').on('click',function(e){

		console.log(e);
		console.log($(this));
		var posX = e.pageX;
		var posY = e.pageY;
				var pointerContainer = $('<div class="pointer-container"></div>');
				var pointer = $('<div class="pointer"></div>');
				pointer.css('position','absolute').css('top', e.pageY-25).css('left', e.pageX-25);
				
				$('.container').append(pointerContainer.append(pointer));
				console.log(e.pageX, e.pageY);

				var notePad = $('<div class="note-pad"></div>');
				notePad.css('position','absolute').css('top', e.pageY-25).css('left', e.pageX-25);
				var note = $('<textarea class="note" type="text" placeholder="Enter Note Here!"></textarea>');
				var noteBtn = $('<button class="note-btn">Submit</button>');

				notePad.append(note).append(noteBtn);
				pointerContainer.append(notePad);

	});

	$('.container').on('click','.pointer', function(){

			$(this).remove();

	});

	$('.container').on('click', ".note-btn", function(){
			$(this).closest('.note-pad').toggle();
	})
	$('.container').on('mouseenter', ".pointer", function(){
		console.log('yup');
			$(this).siblings().toggle();
	})

  
});



