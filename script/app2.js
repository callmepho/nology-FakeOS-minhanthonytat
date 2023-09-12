const captcha = document.getElementById("captchaText");
const app2Answer = document.getElementById("app2Answer");

const captchaReset2 = () => {
	let uniquechar = "";
	app2Answer.innerHTML = "";
	const randomchar =
		"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 1; i < 10; i++) {
		uniquechar += randomchar.charAt(Math.random() * randomchar.length);
	}
	captcha.innerHTML = uniquechar;
};

const submit2 = () => {
	const submit = document.querySelector("#submit2").value;
	if (submit == captcha.innerHTML) {
		app2Answer.innerHTML = "Correct";
		console.log("correct");
		captchaReset2();
	} else {
		app2Answer.innerHTML = "Incorrect";
		console.log("Incorrect");
	}

	document.querySelector("#submit2").value = "";
};
captchaReset2();
const app2Reset = document.querySelector(".app2__reset");
const app2Submit = document.querySelector(".app2__submit");

app2Reset.addEventListener("click", captchaReset2);
app2Submit.addEventListener("click", submit2);
