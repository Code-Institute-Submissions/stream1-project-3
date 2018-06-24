Quiz = function() {
	this.value = 0;
};

Quiz.prototype.add = function(number) {
	this.value += number;
};

Question = function(){
	return true;
}

Quiz.prototype.question = function(questionNumber) {
	var questions = [
		'This is question 1',
		'This is question 2',
		'This is question 3',
	];

	return questions[questionNumber];
}

