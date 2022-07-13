let isSpin = false;
const btn = document.getElementById("btn");
const spinningText = document.getElementById("spiningText");
let rotation = 0;

btn.addEventListener("click", function() {
	isSpin = !isSpin;
	if (isSpin) {
		btn.innerText = "Stop!";
		spinningText.innerText = "weeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
	} else {
		btn.innerText = "Start!";
		spinningText.innerText = "waiting... HIT THE BUTTON ALREADY!!!!";
	}
});

setInterval (function() {
	if (isSpin)
		rotation++;
		spiningText.style.transform = "rotate(" + rotation + "deg)";
}, 1);
