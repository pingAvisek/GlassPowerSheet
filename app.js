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

const print = document.getElementById("print");

// print.addEventListener("click", () => {
//   window.print();
// });
