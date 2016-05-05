function FizzBuzz() {

    Number.prototype.isDivisibleBy = function(module) {
        return this % module == 0;
    };
    
    
    this.say = function (number) {
        var result = "";
       
        if(number.isDivisibleBy(3)) {
            result  += "Fizz";
        }
        
        if(number.isDivisibleBy(5)) {
            result += "Buzz";
        }
        
        if(result == "") {
            result += number;
        }
        return result;
        
 
    };
};


