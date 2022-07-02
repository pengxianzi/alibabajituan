var imgList = document.querySelectorAll(".box>img");
var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");
var box = document.querySelector(".box");
var liList = document.querySelectorAll(".banner li");
var picIndex = 0;
btnRight.onclick = function() {
	if (picIndex == imgList.length - 1) {
		box.id = "notransition";
		picIndex = 0;
		box.style.transform = "translateX(" + (-1000) * picIndex + "px)";
		console.log(box.offsetHeight);
	}
	box.id = "";
	picIndex++;
	box.style.transform = "translateX(" + (-1000) * picIndex + "px)";

	for (var i = 0; i < liList.length; i++) {
		liList[i].id = "";
		liList[picIndex == imgList.length - 1 ? 0 : picIndex].id = "active";
	}
	liList[picIndex].id = "active";
}

var timer = setInterval(function() {
	if (picIndex == imgList.length - 1) {
		box.id = "notransition";
		picIndex = 0;
		box.style.transform = "translateX(" + (-1000) * picIndex + "px)";
		console.log(box.offsetHeight);
	}
	box.id = "";
	picIndex++;
	box.style.transform = "translateX(" + (-1000) * picIndex + "px)";

	for (var i = 0; i < liList.length; i++) {
		liList[i].id = "";
		liList[picIndex == imgList.length - 1 ? 0 : picIndex].id = "active";
	}
	liList[picIndex].id = "active";
}, 2000);

box.onmouseenter = function() {
	clearInterval(timer);
}
box.onmouseleave = function() {
	timer = setInterval(function() {

	}, 1000);
}

btnLeft.onclick = function() {
	if (picIndex == 0) {
		box.id = "notransition";
		picIndex = imgList.length - 1;
		box.style.transform = "translateX(" + (-1000) * picIndex + "px)";
		console.log(box.offsetHeight);
	}
	box.id = "";
	picIndex--;
	box.style.transform = "translateX(" + (-1000) * picIndex + "px)";


	for (var i = 0; i < liList.length; i++) {
		liList[i].id = "";
	}
	// if(picIndex == imgList.length - 1){
	// 	liList[0].id = "active";
	// }else{
	// 	liList[picIndex].id = "active";
	// }
	liList[picIndex == imgList.length - 1 ? 0 : picIndex].id = "active";
}

for (var i = 0; i < liList.length; i++) {
	liList[i].onclick = function() {
		picIndex = this.getAttribute("data-index");
		box.style.transform = "translateX(" + (-1000) * picIndex + "px)";
		for (var i = 0; i < liList.length; i++) {
			liList[i].id = "";
		}
		this.id = "active";
	}
}
