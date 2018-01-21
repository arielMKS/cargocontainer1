$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	// set up event handlers for links
	$("#image_list a").click(function(evt) {
		// swap image
		var imageURL = $(this).attr("href"); // grab the href value...
		$("#image").attr("src", imageURL);   // and use it as src here

		//swap caption
		var caption = $(this).attr("title"); // grab the title out of <a> and use that string for caption
		$("#caption").text(caption); 	// set the caption

		// hide all
		// $("#div1").hide();
		$("#div2").hide();
		$("#div3").hide();
		$("#div4").hide();
		$("#div5").hide();
		$("#div6").hide();
		// get the class attribute from <a> element...
		var className = $(this).attr("class");
		$(className).show();	// ...display <div> with that value

		// cancel the default action of the link
	    evt.preventDefault();  // jQuery method that's cross-browser compatible
	}); // end click

	// move focus to first thumbnail
	$("li:first-child a:first-child").focus();
}); // end ready
