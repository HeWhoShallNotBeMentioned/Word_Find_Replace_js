var wordFindReplace = function(sentence, searchWord, replaceWord) {
	var sentenceWord = sentence;
	var sentenceArrary = sentenceWord.split(" ");
 	var searchWord = searchWord;
 	var replaceWord = replaceWord;
	var result = ""

 	sentenceArrary.forEach(function (itemWord){
 		if (itemWord == searchWord) {
			itemWord = replaceWord;
		}

	});

	return result = sentenceArrary.join(" ")

}


  $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });


	// Background colors
	var colors = ['lightred', 'red', 'darkred'];


	setInterval(function() {
		var backgroundColor = colors[Math.floor(Math.random() * colors.length)];
		$(document.body).css('background-color', backgroundColor);

	}, 10000);

});
