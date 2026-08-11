const display = document.getElementById("display");

// Display numbers and operators
function SHOW(value) {
  display.value += value;
}

// Calculate result
function calculate() {
  let expression = display.value.trim();

  // Allow only numbers, operators, decimal point, spaces and %
  const valid = /^[0-9+\-*/.% ]+$/;

  if (!valid.test(expression)) {
    display.value = "Error";
    return;
  }

  // Convert percentage to /100
  expression = expression.replaceAll("%", "/100");

  try {
    let result;

    if (expression.includes("+")) {
      const [a, b] = expression.split("+").map(Number);
      result = a + b;

    } else if (expression.includes("-")) {
      const [a, b] = expression.split("-").map(Number);
      result = a - b;

    } else if (expression.includes("*")) {
      const [a, b] = expression.split("*").map(Number);
      result = a * b;

    } else if (expression.includes("/")) {
      const [a, b] = expression.split("/").map(Number);

      if (b === 0) {
        display.value = "Error";
        return;
      }

      result = a / b;

    } else {
      result = Number(expression);
    }

    display.value = result;

  } catch (error) {
    console.error(error);
    display.value = "Error";
  }
}

// Clear display
function cleardisplay() {
  display.value = "";
}

// Delete last character
function deletelast() {
  display.value = display.value.slice(0, -1);
}

// Convert current value to percentage
function percntage() {
  if (display.value !== "") {
    display.value = Number.parseFloat(display.value) / 100;
  }
}
