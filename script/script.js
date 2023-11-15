const formatAMPM = (date) => {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

const updateTime = () => {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = formatAMPM(dt);
  setTimeout(updateTime, 1000);
};
const startmenu = document.querySelector(".startmenu");
const startbutton = document.querySelector(".taskbar__start");
const app1Icon = document.querySelector("#app1Icon");
const app2Icon = document.querySelector("#app2Icon");
const app3Icon = document.querySelector("#app3Icon");
const app1 = document.querySelector("#app1");
const app2 = document.querySelector("#app2");
const app3 = document.querySelector("#app3");
const app1Exit = document.querySelector("#app1Exit");
const app2Exit = document.querySelector("#app2Exit");
const app3Exit = document.querySelector("#app3Exit");

const startMenuHide = () => {
  console.log("click");
  startmenu.classList.toggle("startmenu__hidden");
};

const reveal1 = () => {
  console.log("click");
  app1.classList.remove("hidden");
};

const reveal2 = () => {
  console.log("click");
  app2.classList.remove("hidden");
};

const reveal3 = () => {
  console.log("click");
  app3.classList.remove("hidden");
};

const hide1 = () => {
  console.log("click");
  app1.classList.add("hidden");
};

const hide2 = () => {
  console.log("click");
  app2.classList.add("hidden");
};

const hide3 = () => {
  console.log("click");
  app3.classList.add("hidden");
};

updateTime();
startbutton.addEventListener("click", startMenuHide);
app1Icon.addEventListener("click", reveal1);
app2Icon.addEventListener("click", reveal2);
app3Icon.addEventListener("click", reveal3);
app1Exit.addEventListener("click", hide1);
app2Exit.addEventListener("click", hide2);
app3Exit.addEventListener("click", hide3);
