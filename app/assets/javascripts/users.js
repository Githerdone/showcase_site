// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.


// $(document).on('click', '#nav a, .clients-capabilities a', function(){
// 	var target = $(this);
// 	var hash = this.hash;
// 	var destination = $(hash).offset().top;

// 	stopAnimatedScroll();

// 	$('#nav li').removeClass('on');
// 	target.parent().addClass('on');

// 	 $('html, body').stop().animate({
// 		scrollTop: destination
// 	}, 400, function() { window.location.hash = hash; });
// 	return false;
// });

// function stopAnimatedScroll(){
// 	if ( $('*:animated').length > 0 ) { $('*:animated').stop(); }
// }
// if(window.addEventListener) {
//     document.addEventListener('DOMMouseScroll', stopAnimatedScroll, false);
// }
// document.onmousewheel = stopAnimatedScroll;

// if($('body').hasClass('home')){
// 	var $filter = $('#nav');
// 	var $filterSpacer = $('<div />', {
// 		"class": "filter-drop-spacer",
// 		"height": $filter.outerHeight()
// 	});


// 	if ($filter.size())
// 	{
// 		$(window).scroll(function ()
// 		{
// 			if (!$filter.hasClass('fix') && $(window).scrollTop() > $filter.offset().top)
// 			{
// 				$filter.before($filterSpacer);
// 				$filter.addClass("fix");
// 			}
// 			else if ($filter.hasClass('fix')  && $(window).scrollTop() < $filterSpacer.offset().top)
// 			{
// 				$filter.removeClass("fix");
// 				$filterSpacer.remove();
// 			}
// 		});
// 	}
// }


// (function() {
// var transitionDuration = 250;

// $(function(){
// 	$('.triggerable').hide();
// 	$('form .contact .contact-content').hide();
// 	$('form .contact').hide();
// });

// $(document).on('change', '.trigger', function(e) {
// 	$('.triggerable').slideUp(transitionDuration);
// 	if ( $(this).hasClass('project') ) $('.triggerable.project').slideDown(transitionDuration);
// 	if ( $(this).hasClass('question') ) $('.triggerable.question').slideDown(transitionDuration);
// 	if ( $(this).hasClass('speaker') ) $('.triggerable.speaker').slideDown(transitionDuration);
// 	$('form .contact').slideDown(transitionDuration);
// });

// $(document).on('change', 'input[name="contact-type"]', function(e) {
// 	var parent = $(this).closest('.contact');
// 	var contactType = $(this).val();
// 	parent.find('.contact-content').slideUp(transitionDuration);
// 	parent.find('.contact-content-' + contactType).slideDown(transitionDuration);
// });
// })();

// $(document).on('click', '.work-toggle-trigger a', function(e){
// 	$('.work-toggle-content').slideToggle();
// 	$(this).fadeOut();
// 	e.preventDefault();

// })


// $(function() {
//     $(".highlighted-work a")
//         .mouseover(function() {
//             var src = $(this).find("img.cs-logo").attr("src").match(/[^\.]+/) + "-hover.jpg";
//             $(this).find("img.cs-logo").attr("src", src);
//         })
//         .mouseout(function() {
//             var src = $(this).find("img.cs-logo").attr("src").replace("-hover.jpg", ".jpg");
//             $(this).find("img.cs-logo").attr("src", src);
//         });
// });


// $(document).on('click', '.dropdown p a', function(e){
// 	$('.dropdown ul').fadeToggle("fast");
// 	e.preventDefault();

// });


// /* Thanks to CSS Tricks for pointing out this bit of jQuery
// http://css-tricks.com/equal-height-blocks-in-rows/
// It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

// equalheight = function(container){

// var currentTallest = 0,
//      currentRowStart = 0,
//      rowDivs = new Array(),
//      $el,
//      topPosition = 0;
//  $(container).each(function() {

//    $el = $(this);
//    $($el).height('auto')
//    topPostion = $el.position().top;

//    if (currentRowStart != topPostion) {
//      for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//        rowDivs[currentDiv].height(currentTallest);
//      }
//      rowDivs.length = 0; // empty the array
//      currentRowStart = topPostion;
//      currentTallest = $el.height();
//      rowDivs.push($el);
//    } else {
//      rowDivs.push($el);
//      currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
//   }
//    for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
//      rowDivs[currentDiv].height(currentTallest);
//    }
//  });
// }

// $(window).load(function() {
//   equalheight('.eq-height > div');
// });


// $(window).resize(function(){
//   equalheight('.eq-height > div');
// });

// $(document).ready(function(){
// $(".promo-vid, .case-vid").fitVids();
// });

