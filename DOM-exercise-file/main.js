//  your solutions start here
//  make sure to connect your main.js file with your html
// happy coding 🧑‍💻
const sample = document.getElementById("sample1");
console.log(sample.textContent);
const techcomp = document.getElementById("techCompanies");
console.log(techcomp);
const query = document.querySelector("#techCompanies");
console.log(query);
const query1 = document.querySelectorAll("#techCompanies");
console.log(query1);
const red2 = document.getElementsByClassName("red");
console.log(red2);
const redQS = document.querySelectorAll(".red");
console.log(redQS);
const facebook = document.createElement("li");
facebook.textContent = "Facebook";
console.log(facebook);
const fikr = document.createElement("li");
fikr.textContent = "Apple";
console.log(fikr);
facebook.classList.add("blue");
fikr.classList.add("blue");
const sony = document.querySelector("#techCompanies li:nth-child(4)");
sony.after(facebook);
function addBackground() {
  document.body.style.backgroundColor = "rgba(228, 20, 20, 1)";
}

function removeBackground() {
  document.body.style.backgroundColor = "transparent";
}

documendocument.getElementById("yes").addEventListener("click", addBackground);
document.getElementById("No").addEventListener("click", removeBackground);
const form = document.getElementById("additionForm");
const resultDiv = document.getElementById("sumResult");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = Number(document.getElementById("firstNumber").value);
  const num2 = Number(document.getElementById("secondNumber").value);

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.textContent = "Please enter numerical values only";
  } else {
    const sum = num1 + num2;
    console.log("Sum:", sum);
    resultDiv.textContent = "Result: " + sum;
  }
});
