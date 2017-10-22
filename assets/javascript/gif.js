$(document).ready(function() {

var topics = ["Jon Snow", "Daenerys Targaryen", "Jaime Lannister", "Ned Stark", "Sansa Stark"]
//var giphyURL = "https://api.giphy.com/v1/gifs/trending?api_key=FksXZxJtNgMhBh9yoAtA6sJfP13eNyd4";

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

    //FUNCTION FOR GRABBING GIPHY API CONTENT

     $(".character-btn").on("click", function() {

   		var characterName = $(this).attr("data-name");
   		var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + characterName + "&api_key=dc6zaTOxFJmzC&limit=10";

   		$.ajax({
          url: giphyURL,
          method: "GET"
        }).done(function(response) {
          
          console.log(giphyURL);
          
          console.log(response);

        });
    });

}); //document.ready end

