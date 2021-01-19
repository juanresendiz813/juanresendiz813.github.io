function myFunction() {
  var x = document.getElementById("headerNav");
  if (x.className === "headerNav") {
    x.className += " responsive";
  } else {
    x.className = "headerNav";
  }
}
