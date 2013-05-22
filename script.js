$(document).ready(function() {

console.log("doc ready");

$('.carousel').carousel({
				  interval: 3000
				})



startParallax();

});

function startParallax()
{

	/*$('.wrapper').localScroll(800);
	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('.slide').parallax("50%", 0.1);
	$('.pegaso-logo-bg').parallax("50%", 0.1);
	$('.bar1').parallax("50%", 0.4);
	$('.main-1').parallax("50%", 0.3);
*/

console.log("start parallax");


	$.localScroll.defaults.axis = 'xy';

	$.localScroll.hash({
		target: '#footer', // Could be a selector or a jQuery object too.
		queue:true,
		duration:1500
	}); 

	$.localScroll({
	target: '#footer', // could be a selector or a jQuery object too.
	queue:true,
	duration:1000,
	hash:true,
	onBefore:function( e, anchor, $target ){
	// The 'this' is the settings object, can be modified
	},
	onAfter:function( anchor, settings ){
	// The 'this' contains the scrolled element (#content)
	}
	}); 


}


