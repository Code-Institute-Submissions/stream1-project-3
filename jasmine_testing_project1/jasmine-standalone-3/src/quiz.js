Quiz = function() {
	this.value = 0;
};

/*Quiz.prototype.add = function(number) {
	this.value += number;
};*/

Quiz.prototype.add = function(firstNumber, secondNumber, thirdNumber, fourthNumber) {
	var sum = firstNumber + secondNumber + thirdNumber + fourthNumber;
	return sum;
}