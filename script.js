// Declare variables of different data types
let stringVariable = "Hello";
let numberVariable = 42;
let booleanVariable = true;

// Define functions for simple operations
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Error: Division by zero";
    }
}

// Example of console.log for debugging
console.log(add(5, 3)); // Output: 8

// DOM manipulation
document.getElementById("addBtn").addEventListener("click", function() {
    let result = add(10, 5);
    document.getElementById("result").textContent = result;
});

document.getElementById("subtractBtn").addEventListener("click", function() {
    let result = subtract(10, 5);
    document.getElementById("result").textContent = result;
});

document.getElementById("multiplyBtn").addEventListener("click", function() {
    let result = multiply(10, 5);
    document.getElementById("result").textContent = result;
});

document.getElementById("divideBtn").addEventListener("click", function() {
    let result = divide(10, 5);
    document.getElementById("result").textContent = result;
});

// Chart.js integration
let ctx = document.getElementById('myChart').getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar', 
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
