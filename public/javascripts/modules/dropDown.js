$('.cool > li').mouseenter(
	function() {
		$('.dropdownBackground').addClass('open');
		$(this).addClass('trigger-enter');
		setTimeout(() => {
			$(this).addClass('trigger-enter-active');	
		}, 150)

	  const dropdownCoords = $(this).find('.dropdown').offset();

	$('.dropdownBackground').css("width", `${dropdownCoords.width}px`);
	$('.dropdownBackground').css("height", `${dropdownCoords.height}px`);
	$('.dropdownBackground').css("transform", `translate(${dropdownCoords.left}px, ${dropdownCoords.top}px)`);
})

$('.cool > li').mouseleave(
	function() {
		$('.dropdownBackground').removeClass('open');
		$(this).removeClass('trigger-enter', 'trigger-enter-active');	
})






