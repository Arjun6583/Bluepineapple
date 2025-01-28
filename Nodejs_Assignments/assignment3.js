class Calculator {
  constructor() {
    this.value = 0; 
  }

  add(num) {
    this.value += num;
    return this;
  }

  subtract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  divide(num) {
    if (num === 0) {
      throw new Error("Cannot divide by zero"); // Handle division by zero
    }
    this.value /= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}


const calc = new Calculator();
//method chaining example
const result = calc.add(5).subtract(2).multiply(3).divide(2).getResult();
console.log("Calculator Result:", result);


// fetchData function
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const flag = true; // Simulate success or failure
      if (flag) {
        resolve("Data fetched successfully");
      } else {
        reject("Error: Unable to fetch data");
      }
    }, 2000); // Simulated 2-second delay
  });
}

// Example usage of fetchData
fetchData()
  .then((message) => {
    console.log("Fetch Success:", message); // Logs success message
  })
  .catch((error) => {
    console.error("Fetch Error:", error); // Logs error message if rejected
  });
