$(function() {

    $('#dialog').dialog({
            autoOpen: false,
            width: 600,
            height: 400,
            modal: true,
            resizable: false,
            draggable: false
    })
	$('.login').click(function(e) {
		   $('#dialog').dialog('open'); 
		   // $('html').css('overflow', 'hidden');
           // $('body').bind('touchmove', function(e) {
           //      e.preventDefault()
           //  });
	});
	$('#dialog').dialog({
   		close: function( event, ui ) {
            $('html').css('overflow', 'scroll');
            // $('body').unbind('touchmove');			
   		}
	});
});  

