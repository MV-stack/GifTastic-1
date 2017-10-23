$(document).ready(function() {

var topics = ["Jon Snow", "Daenerys Targaryen", "Jaime Lannister", "Ned Stark", "Sansa Stark", "Tyrion Lannister", "Samwell Tarly", "Bran Stark", "Hodor", "Drogo"]
const theme = new Audio("assets/got-theme-song.mp3");
var musicPlaying = false;
//var giphyURL = "https://api.giphy.com/v1/gifs/trending?api_key=FksXZxJtNgMhBh9yoAtA6sJfP13eNyd4";

	// MUSIC FUNCTION 

	$("#title-button").on("click", function() {
		if(musicPlaying == false){
        	theme.play();
        	musicPlaying = true;
   		}else {
        	theme.pause();
        	musicPlaying = false;
    	}
	});

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

  //$("button").on("click", function() {

  	function dataPull() {

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

        	para.addClass("rating-text")
        	
          characterImage.addClass("image-gifs")
        	characterImage.attr("src", results[i].images.fixed_height_still.url);
        	characterImage.attr("data-state", "still");

        	characterDiv.append(para);
          	characterDiv.append(characterImage);
          	characterDiv.addClass("individual-gifs")

          $("#gifs").prepend(characterDiv);

        }; //ENDS FOR LOOP
      }); // ENDS AJAX FUNCTION
  
 	 //}); // ENDS ON.CLICK
	};

	$(document).on("click", ".character-btn", dataPull);

	// ANIMATE GIFS

	$(".image-gifs").on("click", function () {
      var state = $(this).attr("data-state");

      if (state === "still") {
        $(this).attr("src", $(this).attr(results[i].images.fixed_height.url));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr(results[i].images.fixed_height_still.url));
        $(this).attr("data-state", "still");
      }
    });

}); //document.ready 



