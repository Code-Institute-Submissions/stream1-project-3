describe("Quiz", function() {
	var quiz;
	var question;

	beforeEach(function() {
		quiz = new Quiz();
		question = new Question();
	}); 

	describe("addition function", function() {
		it("should add the score together and return the result", function() {
			quiz.add(1);
			quiz.add(1);
			quiz.add(0);
			quiz.add(1);
			expect(quiz.value).toBe(3);
		});
	});


	describe("Question function", function(){
		it('should return "This is question 1" for question index 0', function(){
			var questionNum = quiz.question(0);
			expect(questionNum).toBe("This is question 1");
		});
	});
});