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
		$("#got-input").val("");

		makeButtons();

		console.log(topics);
	});

	makeButtons();

	//FUNCTION FOR GRABBING GIPHY API CONTENT

    $("button").on("click", function() {

   		var characterName = $(this).attr("data-name");
   		var characterStr = characterName.split(" ").join("+");
   		var giphyURL = "https://api.giphy.com/v1/gifs/search?q=" + characterStr + "&api_key=dc6zaTOxFJmzC&limit=10";

   		$.ajax({
          url: giphyURL,
          method: "GET"
        }).done(function(response) {
          
          console.log(giphyURL);
          console.log(response);

          var results = response.data;

          $("#gifs").empty();
          for (var i = 0; i < results.length; i++) {
          	
          	var characterDiv = $("<div>");
          	var para = $("<p>").text("Rating: " + results[i].rating);
          	var characterImage = $("<img>");

          	characterImage.attr("src", results[i].images.fixed_height.url);

          	characterDiv.append(para);
            characterDiv.append(characterImage);

            $("#gifs").prepend(characterDiv);

          }; //ENDS FOR LOOP
        }); // ENDS AJAX FUNCTION
    }); // ENDS ON.CLICK


}); //document.ready end

