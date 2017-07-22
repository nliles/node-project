$(document).ready(function() {
    var maxFields = 10;
    var wrapper = $(".container1");
    var addButton = $(".addLocationField");
  
    var x = 1;
    $(addButton).click(function(e) {
        e.preventDefault();
        if(x < maxFields){
            x++;
 			$(wrapper).append('<div><label for="address">Address</label><input type="text" class="address" name="location[address]/><label for="lng">Address lng</label><input type="lng" class="lng" name="location[coordinates][0]" required/><label for="lat">Address Lat</label><input type="lat" class="lat" name="location[coordinates][1]" required /><a href="#" class="delete">Delete</a></div></div>'); 
        }
	   else {
	  		alert('The maximum you can add is 10.')
	  	}
    });
  
    $(wrapper).on("click", ".delete", function(e){
        e.preventDefault(); 
        $(this).parent('div').remove(); 
        x--;
    })
});