var base = function(binary) {

	var binaryArray = binary.split('').reverse();
	var sum = 0;

	binaryArray.forEach(function(currentValue, index){
		if (currentValue == 1) {
			sum += Math.pow(2, index);
		}
	});
	return sum;
};

var customBase = function(binary, place) {
	var number = base(binary);
	return Math.pow(number, place);
};

$(document).ready(function() {
  $("form#bases").submit(function(event) {
    var binary = $("input#base").val();
		var baseValue = $("input#custom_base").val();
    var result = customBase(binary, baseValue);


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
