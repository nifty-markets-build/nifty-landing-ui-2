//clicking logo refreshes page
const logoRefresh = document.querySelector('.nav-logo');
logoRefresh.addEventListener('click', () => {
    window.setTimeout(() => {
        window.location.reload(true);
    }, 200);
});



$(document).on('scroll', function (e) {
    if ($(window).width() > 992) {
		var rgba = $(document).scrollTop() / 500;
   $('.main-navigation').css('background-color', 'rgba(255,255,255,' + rgba + ')');
	}
})