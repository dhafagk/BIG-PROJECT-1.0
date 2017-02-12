$(document).ready(function() {

	$('.parallax').parallax();

	$('.modal-trigger').leanModal();

	$(".my-rating").starRating({
  initialRating: 4,
  strokeColor: '#894A00',
  strokeWidth: 10,
  starSize: 19
});
 
  $("#owl-demo").owlCarousel({
 
      autoPlay : false,
      stopOnHover : false,
 		
 	  pagination : true,

      items : 4,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [979,3]
 
  });

  $(".project").hover3d({
				selector: ".project__card",
				shine: false,
			});

			$(".movie").hover3d({
				selector: ".movie__card",
				shine: true,
				sensitivity: 20,
			});
 
});