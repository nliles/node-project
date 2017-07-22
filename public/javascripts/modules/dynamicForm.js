$(document).ready(function() {
    var maxFields       = 5;
    var wrapper         = $(".container2");
    var addButton      = $(".addPhotoField");
  
    var x = 1;
    $(addButton).click(function(e) {
        e.preventDefault();
        if(x < maxFields){
            x++;
            $(wrapper).append('<div><input type="file" name="photo" accept="image/gif, image/png, image/jpeg" multiple/><a href="#" class="delete">Delete</a></div>'); //add input box
        }
	   else {
	  		alert('The maximum you can add is 5.')
	  	}
    });
  
    $(wrapper).on("click", ".delete", function(e){
        e.preventDefault(); 
        $(this).parent('div').remove(); 
        x--;
    })
});