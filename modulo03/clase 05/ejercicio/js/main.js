
  $(window).load(function() {

    $('.flexslider').flexslider();
    $(".owl-carousel").owlCarousel({
    	items:5,
    	margin:20,
    	loop:true,
    	nav:true
    });
  


  });

  $(window).scroll(function(){
  	var top=$(window).scrollTop();
  	if(top>100){
  	//	console.log("el menu debe ser fixed");
  		$(".header-script").addClass("fixed-menu");
  	}
  	else{
			$(".header-script").removeClass("fixed-menu");

  	}
  })
