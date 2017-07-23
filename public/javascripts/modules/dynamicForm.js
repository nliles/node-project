function dynamicForm(max, containerClass, buttonClass, html) {
    var maxFields       = max;
    var wrapper         = $(containerClass);
    var addButton      = $(buttonClass);
  
    var x = 1;

    $(addButton).click(function(e) {
        e.preventDefault();
        if(x < maxFields){
            x++;
            $(wrapper).append(html + '<a href="#" class="delete">Delete</a></div>'); 
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
}

const html = '<div><input type="file" name="photo" accept="image/gif, image/png, image/jpeg" multiple/>'
dynamicForm(5, ".container2", ".addPhotoField", html)

html1 = '<div><label for="address">Address</label><input type="text" class="address" name="location[address]/><label for="lng">Address lng</label><input type="lng" class="lng" name="location[coordinates][0]" required/><label for="lat">Address Lat</label><input type="lat" class="lat" name="location[coordinates][1]" required />'
dynamicForm(10, ".container1", ".addLocationField", html1)





