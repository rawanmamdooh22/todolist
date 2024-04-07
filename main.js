const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function addTask() {
  if (inputBox.value === "") {
    alert("you must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveDate();
}
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveDate();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveDate();
    }
  },
  false
);
function saveDate() {
  localStorage.setItem("date", listContainer.innerHTML);
}
function shpwTask() {
  listContainer.innerHTML = localStorage.getItem("date");
}
shpwTask();
let togglerr = document.getElementById("tog");
let togglericon = document.getElementById("icon");
let todoo = document.getElementById("todoo");
function toggler() {
  todoo.classList.toggle("dark");
  toggler.classList.toggle("active");
  isDark = !isDark;
}
