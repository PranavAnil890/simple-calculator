// let display=document.getElementById("display");

// function SHOW(value)
//     {
//         display.value +=value;

//     }

//     function calculate()
//     {
//         display.value = eval(display.value)
//     }

//     function cleardisplay()
//     {
//         display.value = "";
//     }

//     function deletelast()  
//     {
//         display.value = display.value.slice(0,-1);
//     }

 const display = document.getElementById("display");

// Show numbers and operators on the display
function SHOW(value) {
    display.value += value;
}

// Calculate the result safely
function calculate() {
    const expression = display.value;

    // Allow only numbers, operators, decimal point, parentheses, spaces, and %
    const valid = /^[0-9+\-*/().% ]+$/;

    if (!valid.test(expression)) {
        display.value = "Error";
        return;
    }

    try {
        const result = Function(
            `"use strict"; return (${expression.replace(/%/g, "/100")})`
        )();

        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}

// Clear the display
function cleardisplay() {
    display.value = "";
}

// Delete the last character
function deletelast() {
    display.value = display.value.slice(0, -1);
}

// Percentage function
function percntage() {
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}
