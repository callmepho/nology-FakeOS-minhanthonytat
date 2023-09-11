var dt = new Date();

function formatAMPM(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
}

document.getElementById("datetime").innerHTML = formatAMPM(dt);
const startmenu = document.querySelector(".startmenu");
const startbutton = document.querySelector(".taskbar__start");
startbutton.addEventListener("click", hidden);

function hidden() {
  console.log("click");
  startmenu.classList.toggle("startmenu__hidden");
}
