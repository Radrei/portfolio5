//Sticky header animations
window.onscroll = function() {
	if (document.body.scrollTop > 50){  		
		document.getElementById("header").classList.add("sticky");
	}
	else{
		document.getElementById("header").classList.remove("sticky");
	}
};

//Modals
var modal1 = document.getElementById("popup1");
var modal2 = document.getElementById("popup2");
var modal3 = document.getElementById("popup3");
var modal4 = document.getElementById("popup4");

//Modal Buttons
var btn1 = document.getElementById("project1trigger");
var btn2 = document.getElementById("project2trigger");
var btn3 = document.getElementById("project3trigger");
var btn4 = document.getElementById("project4trigger");

//Close Button
var closeBtn1 = document.getElementById("close1");
var closeBtn2 = document.getElementById("close2");
var closeBtn3 = document.getElementById("close3");
var closeBtn4 = document.getElementById("close4");

//Overlay
var overlay = document.getElementById("overlay");

// When the user clicks on the button, open the modal
btn1.onclick = function() {
	modal1.style.display = "block";
	overlay.style.display = "block";
}
btn2.onclick = function() {
	modal2.style.display = "block";
	overlay.style.display = "block";
}
btn3.onclick = function() {
	modal3.style.display = "block";
	overlay.style.display = "block";
}
btn4.onclick = function() {
	modal4.style.display = "block";
	overlay.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn1.onclick = function() {
	modal1.style.display = "none";
	overlay.style.display = "none";
}
closeBtn2.onclick = function() {
	modal2.style.display = "none";
	overlay.style.display = "none";
}
closeBtn3.onclick = function() {
	modal3.style.display = "none";
	overlay.style.display = "none";
}
closeBtn4.onclick = function() {
	modal4.style.display = "none";
	overlay.style.display = "none";
}
