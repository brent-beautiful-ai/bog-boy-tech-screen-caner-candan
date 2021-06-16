/*
Test 3:
  Alternate the text color of every other cell.
*/
const arr = document.querySelectorAll("cell:nth-child(odd)");

arr.forEach((elm) => {
  elm.style.color = "yellow";
});
