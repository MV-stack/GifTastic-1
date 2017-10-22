var topics = ["Jon Snow", "Daenerys Targaryen", "Jaime Lannister", "Ned Stark", "Sansa Stark"]

function makeButtons() {

	$(".got-buttons").empty();

	for (i = 0; i < topics.length; i++) {
		
		var b = $("<button>");

		b.addclass("character-btn");
		b.attr("data-name", topics[i]);
		b.text(topics[i]);

		$(".got-buttons").append(b);
	};
};