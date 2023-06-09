const clickMeBtn = document.getElementById("clickMeBtn");
console.log(clickMeBtn);

function sayHello() {
  console.log("Hello world!");
  alert("hello");
}

function printWin() {
  console.log("I'm the WINNER");
  alert("hello from second function");
}

// Passing a function reference as the value (function definition not result from calling it)
clickMeBtn.onclick = sayHello;

// First function will not be executed like this because we replace the value for onclick on our btn
clickMeBtn.onclick = printWin;

// Event listener example

//const nameBtn = document.querySelector("#nameBtn");

function printFullName() {
  console.log("Danilo Borozan");
}

console.log(nameBtn);

//nameBtn.addEventListener("click", printFullName);
//nameBtn.addEventListener("mouseenter", sayHello);
//nameBtn.addEventListener("mouseleave", printWin);

// Blur event example

const usernameInput = document.getElementById("username");
const errorMsgEl = document.querySelector(".error-msg");

//errorMsgEl.style.color = "red";

// console.log(usernameInput, errorMsgEl);

// function inputGreeting(event) {
//   console.log(`This is the target element value ${event.target.value}`);
//   // How to access an html inputs value
//   console.log(`This is the input's value: ${usernameInput.value}`);

//   console.log(`Hello from ${usernameInput.value}!`);
//   usernameInput.value = "";
// }

// usernameInput.addEventListener("blur", inputGreeting);

function validateUsernameLength(minLength) {
  if (usernameInput.value.length < minLength) {
    errorMsgEl.textContent = "Username too short, please try again";
  } else {
    errorMsgEl.textContent = "";
  }
}

/////////////
function testFunction() {
  // We can write whatever we need here
  console.log("i am printed from an anonymous function");
  validateUsernameLength(6);
}
usernameInput.addEventListener("blur", testFunction);

//// anonimna funkcija, isti primer kao gore
// usernameInput.addEventListener("blur", function () {
//   // We can write whatever we need here
//   console.log("i am printed from an anonymous function");
//   validateUsernameLength(6);
// });
////////////////////

// Exercise 2 Solution

const styleParagraphEl = document.querySelector(".style-paragraph");
const changeBtn = document.querySelector(".change-btn");

// always check selectors with console.log
console.log(styleParagraphEl, changeBtn);

changeBtn.addEventListener("click", function () {
  // always check eventListeners with console log
  console.log("clicked");
  styleParagraphEl.style.color = "red";
  styleParagraphEl.style.backgroundColor = "lightblue";
  styleParagraphEl.style.fontSize = "40px";
});

// Exercise 3 solution

const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const userBtn = document.getElementById("userBtn");
const userDetailsEl = document.querySelector(".user-details");

function generateUserDetails(
  firstNameValue,
  lastNameValue,
  ageValue,
  emailValue
) {
  return `User: ${firstNameValue} ${lastNameValue}, Age: ${ageValue}, Email: ${emailValue}`;
}

userBtn.addEventListener("click", function () {
  console.log("user btn clicked");

  userDetailsEl.textContent = generateUserDetails(
    firstNameInput.value,
    lastNameInput.value,
    ageInput.value,
    emailInput.value
  );
});

let input = document.getElementById("username");
let btn = document.getElementById("nameBtn");

btn.addEventListener("click", function () {
  alert(`Uneto ime je ${input.value}`);
});
