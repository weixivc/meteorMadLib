
Meteor.startup(function () {
	$('.submit-btn').click(function() {
		event.preventDefault();
		console.log("Hello World");
	});
});

/** if (Meteor.isServer)*/