
Meteor.startup(function () {
	$('.submit-btn').click(function() {
		event.preventDefault();
		let exclamation = $('[id=exclamation]').val();
		let adverb = $('[id=adverb]').val();
		let noun = $('[id=noun]').val();
		let verb = $('[id=verb]').val();
		let madLib = "\'"+exclamation+"\'"+" he said,as he " +adverb+" jumped onto his "+noun+ " and "+verb+" into the sunset.";

		$('.text').hide();
		$('#mad-lib-console').text(madLib).addClass('color');
		$('.text').fadeIn(1000);
		console.log(madLib);
	});
});

/** if (Meteor.isServer)*/