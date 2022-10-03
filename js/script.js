//JavaScript 1 - Module 3
//Lesson Task 2 Questions

//Question 1
// Give the below function's `name` parameter a default value of `"John"`

function greet(name = "John") {
    return `Hello ${name}!`;
}

//Question 2

const messageContainer = document.querySelector(".message-container");

const message = createMessage();

messageContainer.innerHTML = message;

