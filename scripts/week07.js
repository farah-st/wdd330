// Define a calculator object
let calculator = {
    num1: 0,
    num2: 0,
    setInput: function(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
    },
    sum: function() {
      return this.num1 + this.num2;
    }
  };
  
  // Access the calculator object using "this"
  calculator.setInput(5, 10);
  let result = calculator.sum();
  
  // Display the result on the HTML page
  var outputElement = document.getElementById("output");
  outputElement.textContent = "The sum is: " + result;