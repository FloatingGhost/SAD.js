console.loggy = console.log
console.log = function(msg) {
  var p = document.createElement("h4");
  p.innerHTML += ":(\n";
  document.documentElement.appendChild(p);
  console.loggy(msg)
}
