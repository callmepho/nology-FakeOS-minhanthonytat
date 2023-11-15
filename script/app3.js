let startTime;
let endTime;
let reactionTime;
let begin = false;
let ready = false;
let random;
let timer;
const colorBlock = document.querySelector(".color-block");
const reactionText = document.getElementById("reactionText");

const start = () => {
	if (!begin) {
		startTime = new Date();
		colorBlock.style.backgroundColor = "red";
		random = Math.random() * 10;

		begin = true;
		setTimeout(active, random * 1000);
	}
};

const active = () => {
	colorBlock.style.backgroundColor = "green";
	ready = true;
};

const end = () => {
	if (begin) {
		colorBlock.style.backgroundColor = "grey";
		endTime = new Date();
		reactionTime = (endTime.getTime() - startTime.getTime()) / 1000 - random;
		begin = false;
		reactionText.innerHTML = `Your reaction is ${reactionTime}s!`;
	}
};

const reaction = () => {
	if (!begin) {
		startTime = new Date();
		colorBlock.style.backgroundColor = "red";
		random = Math.random() * 10;
		begin = true;
		timer = setTimeout(active, random * 1000);
	} else if (begin && !ready) {
		reactionText.innerHTML = `Too early!`;
		colorBlock.style.backgroundColor = "white";
		begin = false;
		clearTimeout(timer);
	} else if (begin && ready) {
		colorBlock.style.backgroundColor = "white";
		endTime = new Date();
		reactionTime = (endTime.getTime() - startTime.getTime()) / 1000 - random;
		begin = false;
		ready = false;
		reactionText.innerHTML = `Your reaction is ${
			Math.round(reactionTime * 100) / 100
		}s!`;
	}
};

colorBlock.addEventListener("click", reaction);
