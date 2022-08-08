// get full date
let date = new Date();

let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDay();

if (month < 10) {
  month = month.toString();
  month = "0" + month;
  // month = parseInt(month);
}

if (day < 10) {
  day = day.toString();
  day = "0" + day;
  // day = parseInt(day);
}

let today = `${year}-${month}-${day}`;

window.onload = () => {
  let dateAppo = document.getElementById("date");
  dateAppo.setAttribute("value", today);
};

var input = document.querySelector("input"); // get the input element
input.addEventListener("input", resizeInput); // bind the "resizeInput" callback on "input" event
resizeInput.call(input); // immediately call the function

function resizeInput() {
  this.style.width = this.value.length + "ch";
}
