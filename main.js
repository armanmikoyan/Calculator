let input = document.querySelector(".val"),
  item = document.querySelectorAll(".item");

function insert(num) {
  input.value = input.value + num;
}

function back() {
  input.value = input.value.substring(0, input.value.length - 1);
}

function equal() {
  input.value = eval(input.value);
}

function clean() {
  input.value = "";
}
