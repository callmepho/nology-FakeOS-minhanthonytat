const bike = "../img/captcha/bike.jpg";
const car = "../img/captcha/car.jpg";
const hydrant = "../img/captcha/hydrant.jpg";
const traffic = "../img/captcha/trafficlight.jpg";
const train = "../img/captcha/train.jpg";
const app1Reset = document.querySelector(".app1__reset");
const app1Submit = document.querySelector(".app1__submit");
const captchaPic = new Array(bike, car, hydrant, traffic, train);
const captchaName = new Array(
	"Bike",
	"Car",
	"Hydrant",
	"Traffic Light",
	"Train"
);
let counter = 0;
const captchaReset = () => {
	counter = 0;
	let randomFind = Math.floor(Math.random() * 5);
	document.getElementById("find").innerHTML = captchaName[randomFind];
	for (let i = 0; i < 9; i++) {
		let randomCaptcha = Math.floor(Math.random() * 5);

		document.getElementById("captcha" + i).src = captchaPic[randomCaptcha];
		if (randomCaptcha === randomFind) {
			counter += 1;
		}
	}
};

const submit = () => {
	const submitted = document.querySelector("#submit1").value;
	const app1Answer = document.getElementById("app1Answer");
	if (submitted == counter) {
		app1Answer.innerHTML = "Correct";
		captchaReset();
	} else {
		app1Answer.innerHTML = "Incorrect";
	}
	document.querySelector("#submit1").value = "";
};
captchaReset();

app1Reset.addEventListener("click", captchaReset);
app1Submit.addEventListener("click", submit);
