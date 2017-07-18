$('.cool > li').mouseenter(
	function() {
		$('.dropdownBackground').addClass('open');
		$(this).addClass('trigger-enter');
		setTimeout(() => {
			$(this).addClass('trigger-enter-active');	
		}, 150)

	  const dropdownCoords = $(this).find('.dropdown').offset();
	  const navCoords = $('nav').offset();
	  const left = dropdownCoords.left - navCoords.left
	  const top = dropdownCoords.top - navCoords.top


		$('.dropdownBackground').css("width", `${dropdownCoords.width}px`);
		$('.dropdownBackground').css("height", `${dropdownCoords.height}px`);
		$('.dropdownBackground').css("transform", `translate(${left}px, ${top}px)`);
})

$('.cool > li').mouseleave(
	function() {
		$('.dropdownBackground').removeClass('open');
		$(this).removeClass('trigger-enter', 'trigger-enter-active');	
})






