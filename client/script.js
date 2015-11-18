
Meteor.startup(function () {
	$('.submit-btn').click(function() {
				event.preventDefault();
		var exclamation = $('[id=exclamation]').val();
		var adverb = $('[id=adverb]').val();
		var noun = $('[id=noun]').val();
		var verb = $('[id=verb]').val();
		var madLib = "\'"+exclamation+"\'"+" he said,as he " +adverb+" jumped onto his "+noun+ " and "+verb+" into the sunset.";

		console.log(madLib);
	});
});

/** if (Meteor.isServer)*/