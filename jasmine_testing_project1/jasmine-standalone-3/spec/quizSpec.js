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
			expect(Quiz.value().toBe(3));
		});

	it("throws error message if no option is chosen", function() {
		spyOn(window, "alert");
		expect(window.alert).toHaveBeenCalledWith("Oops don't forget to choose an answer");
		});

	});
});