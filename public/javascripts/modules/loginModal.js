$(function() {

    $('#dialog').dialog({
        title: "Good to see you again.",
            autoOpen: false,
            width: 550,
            height: 350,
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

