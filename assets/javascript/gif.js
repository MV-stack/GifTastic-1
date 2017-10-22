$(document).ready(function() {

var topics = ["Jon Snow", "Daenerys Targaryen", "Jaime Lannister", "Ned Stark", "Sansa Stark"]

	// MAKE BUTTONS	AND ADD ONCLICK FUNCTION

	function makeButtons() {

		$("#got-buttons").empty();

		for (i = 0; i < topics.length; i++) {
			
			var b = $("<button>");

			b.addClass("character-btn");
			b.attr("data-name", topics[i]);
			b.text(topics[i]);

			$("#got-buttons").append(b);
		};
	};

	$("#add-character").on("click", function(event) {

		event.preventDefault();

		var character = $("#got-input").val().trim();

		topics.push(character);

		makeButtons();

		console.log(topics);
	});

	makeButtons();

}); //document.ready end

