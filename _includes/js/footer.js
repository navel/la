  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: 'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  });

// forward slide

  $( "#slider" ).click(function() {
    mySwiper.slideNext();
  });

//ScrollMagic

  $(function() {
    // init controller
  	var controller = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: "onEnter", duration: "200%"}});

  	// build scenes
  	new ScrollMagic.Scene({triggerElement: "#parallax1"})
  					.setTween("#parallax1 > .post", {y: "150%", ease: Linear.easeNone})
  					// .addIndicators()
  					.addTo(controller);

  	new ScrollMagic.Scene({triggerElement: "#parallax2"})
  					.setTween("#parallax2 > .post", {y: "-150%", ease: Linear.easeNone})
  					// .addIndicators()
  					.addTo(controller);
  });
