  $('#dialog2').dialog({
            autoOpen: false,
            width: 550,
            height: 350,
            modal: true,
            resizable: false,
            draggable: false
    })
	$('.signup').click(function(e) {
		   $('#dialog2').dialog('open'); 
		   // $('html').css('overflow', 'hidden');
           // $('body').bind('touchmove', function(e) {
           //      e.preventDefault()
           //  });
	});
	$('#dialog2').dialog({
   		close: function( event, ui ) {
            $('html').css('overflow', 'scroll');
            // $('body').unbind('touchmove');			
   		}
	});


