/* Because unicorn farts are colorful. */

setTimeout(function() {
	var $icons = $('.icon');
	var n = $icons.length;
	var colors = randomColor({count: n, luminosity: 'random', hue: 'random'});

	$icons.each(function(i) {
		$(this).css('background', colors[i]);
	})
}, 10)
