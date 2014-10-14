$(document).ready(function(){
	// toggle boxes
	$('a.toggle').toggle(function(){
			el = $(this);
			$(this).parent('<h3>').parent('div').next('div').slideToggle('fast',function(){
			el.removeClass('close').addClass('open');
		});
		return false;
	},function(){
			el = $(this);
			$(this).parent('<h3>').parent('div').next('div').slideToggle('flast',function(){
			el.removeClass('open').addClass('close');
		});
		return false;
	});
	
	// apply 'imagelink' class to images in the main content
	$('a img').parent('a').addClass('imagelink');
	// apply 'textlink' class to regular links in the main content
	$('p a').addClass('textlink');
	//$('#main-entry-container ul li a').addClass('textlink');
	// apply 'textlink' class to author box links
	$('p.generic-text a').addClass('textlink');
	// apply 'citelink' class to links in block quote
	$('blockquote a').addClass('citelink');
	
	// attach a function to the quote comment link
	$('a.quote-comment').click( function() { 
		var tb = $('#comment');
		var strQuote = $(this).attr('title');
		// assign the value
		tb.val('<blockquote>' + strQuote + '</blockquote>');
		return false;
	 });
	
	// assign blockquote styles to comment boxes
	$('div.box-body blockquote').addClass('blockquote-quote');
	
});