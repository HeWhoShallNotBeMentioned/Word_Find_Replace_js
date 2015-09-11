var wordFindReplace = function(sentence, searchWord, replaceWord) {
	// var sentence = sentence;
	// var sentenceArray = sentence.split(" ");
 	var searchWord = searchWord;
 	var replaceWord = replaceWord;
	var result = sentence.replace(searchWord, replaceWord);

	return result;
 // 	sentenceArray.forEach(function (itemWord, i){
 // 		if (searchWord == itemWord) {
	//
	// 		sentenceArray = replaceWord;
	// 	}
	//
	// });
	//
	// return result = sentenceArray.join(" ");

};

$(document).ready(function() {
  $("form#wordFindReplace").submit(function(event) {
    var sentence = $("input#sentence").val();
		var searchWord = $("input#searchWord").val();
		var replaceWord = $("input#replaceWord").val();
    var result = wordFindReplace(sentence, searchWord, replaceWord);

  $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  });


	// Background colors
	var colors = ['lightred', 'red', 'darkred'];


	// setInterval(function() {
	// 	var backgroundColor = colors[Math.floor(Math.random() * colors.length)];
	// 	$(document.body).css('background-color', backgroundColor);
	//
	// }, 10000);

});
