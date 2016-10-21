$(function() {
	const maxLen = 140;
	var button = $("input[type=submit]")
	var counter = $(".counter")
	$('textarea').on("input", function(event){
		var Length = $('textarea').val().length;
		var AmountLeft = maxLen - Length;
		counter.text(AmountLeft);

		var tweetOver = (AmountLeft < 0);
		if (tweetOver) {
			counter.addClass('error');
		} else {
			counter.removeClass('error');
		}
		
		button.prop("disabled", tweetOver)
	});
});

