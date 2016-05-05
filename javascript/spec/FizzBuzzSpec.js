describe("Fizz Buzz", function() {
   var fizzBuzz;
   
   beforeEach(function() {
       fizzBuzz = new FizzBuzz();
   });
       
   
   it('should return 1 when input is 1', function() {
       expect(fizzBuzz.say(1)).toEqual("1");
   });
   
   it('should return 2 when input is 2', function() {
       expect(fizzBuzz.say(2)).toEqual("2");
   });
   
   it('should return Fizz when input is 3', function() {
       expect(fizzBuzz.say(3)).toEqual("Fizz");
   });

    it('should return 4 when input is 4', function() {
       expect(fizzBuzz.say(4)).toEqual("4");
   });
   
   it('should return Buzz when input is 5', function() {
       expect(fizzBuzz.say(5)).toEqual("Buzz");
   }); 
   
   it('should return Fizz when input is 6', function() {
       expect(fizzBuzz.say(6)).toEqual("Fizz");
   }); 
   
    it('should return Buzz when input is 10', function() {
       expect(fizzBuzz.say(10)).toEqual("Buzz");
   });   
   
   it('should return FizzBuzz when input is 15', function() {
       expect(fizzBuzz.say(15)).toEqual("FizzBuzz");
   });      
});