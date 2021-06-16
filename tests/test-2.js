/*
Test 2:
  Change the text of the cells that say "Boy" to say "Fool" instead.
*/
const arr = document.querySelectorAll(".actor em strong");

arr.forEach((elm) => {
  elm.innerHTML = "Fool";
});
