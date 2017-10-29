
document.addEventListener("DOMContentLoaded", main);


function main() {
	"use strict";
	let dropDownArrow = document.querySelectorAll(".triangle--down-white--small");
	let accordion = document.querySelectorAll(".accordion");
	let accordionSingle = document.querySelectorAll(".accordion--singleSelect");
	let sidebarButton = document.querySelectorAll(".sidebar__module");
	let search = document.querySelectorAll(".icon__search");
	let showHTML = document.querySelectorAll(".main__sectionHeading-expander-icon");
	let navItemThin = document. querySelectorAll(".navigationBar__menu-item--thin");
	let textLink = document.querySelectorAll(".text__link");
	let menuDropDown = document.querySelectorAll(".menu__expander-icon");
	let menuFlexItem = document.querySelectorAll(".menu__dropDown--flex .text__link");
	const MQ_DESKTOPBP = window.matchMedia("(min-width: 768px)");
	const MQ_TABLETBP = window.matchMedia("max-width: 640px");


	for (var i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", toggle(i), false);
	}

	for (var i = 0; i < search.length; i++) {
		search[i].addEventListener("click", toggle(i), false);
	}

	for (var i = 0; i < accordionSingle.length; i++) {
		accordionSingle[i].addEventListener("click", toggleSingle(i), false);
	}

	for (var i = 0; i < dropDownArrow.length; i++) {
		dropDownArrow[i].addEventListener("click", toggleDropDown(i), false);
	}

	for (var i = 0; i < showHTML.length; i++) {
		showHTML[i].addEventListener("click", showCode(i), false);
	}

	for (var i = 0; i < textLink.length; i++) {
		textLink[i].addEventListener("click", toggleMenu(i), false);
	}

	for (var i = 0; i < menuDropDown.length; i++) {
		menuDropDown[i].addEventListener("click", toggleMenu(i), false);
	}

	for (var i = 0; i < menuFlexItem.length; i++) {
		menuFlexItem[i].addEventListener("click", toggleThisAndNext(i), false);
	}	

	for (var i = 0; i < sidebarButton.length; i++) {
		sidebarButton[i].addEventListener("click", toggleThisAndNext(i), false);
	}

	for (var i = 0; i < navItemThin.length; i++) {
		navItemThin[i].addEventListener("mouseover", scaleItem(i), false);
	}


	WidthChange(MQ_TABLETBP);
	MQ_TABLETBP.addListener(WidthChange);

	WidthChange(MQ_DESKTOPBP);
	MQ_DESKTOPBP.addListener(WidthChange);
} 

function toggle(i) {
	return function() {
		this.parentNode.classList.toggle("active");
		this.classList.toggle("active");
	};
}

function toggleThisAndNext(i) {
	return function() {
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	};
}

function toggleChild(i) {
	return function() {
		this.classList.toggle("active");
		this.childNodes[1].classList.toggle("show");
	};
}

//doesn't work
function toggleSingle(i) {
	return function() {
		let setClasses =  this.classList.contains("active");

		setClass(accordionSingle, "active", "remove");
		setClass(accordionPanel, "active", "remove");

		if (setClasses) {
		 this.classList.toggle("active");
		 this.parentNode.nextElementSibling.classList.toggle("show");
		} 
	};
}

function scaleItem(i) {
	return function() {
		this.nextElementSibling.removeProperty("border-left");
	};
}



function setClass(variable, className, methodName) {
	for (var i=0; i < variable.length; i++) {
		variable[i].classList[methodName](className);
	}
}


function toggleDropDown(i) {
	return function() {
		this.parentNode.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	};
}

function toggleMenu(i) {
	return function() { 
		this.parentNode.classList.toggle("active");
		this.parentNode.nextElementSibling.classList.toggle("show");
	};
}


//doesn't work
function showCode(i) {
	let example = document.querySelectorAll(".example--pop-out");
	let exampleText = document.querySelectorAll(".example__section--pop-out");

	return function() {
		example.classList.toggle("active");
		exampleText.classList.toggle("active");
	};
}

function WidthChange(MQ_TABLETBP) {
	let navItemThin = document.querySelectorAll(".navigationBar__menu-item--thin");
	let icon = document.createElement("i");
	let iconContent = document.createAtttribute("class");
	iconContent.value = "fa fa-bars icon--left"; 

	if (MQ_TABLETBP.matches) {
		icon.setAttributeNode(iconContent);

		for (var i=0; i < navItemThin.length; i++) {
			navItemThin[i].appendChild(icon);
			console.log(icon.getAttribute("class"));
		}
	}
}


//Fucked up here
function WidthChange(MQ_DESKTOPBP) {
	let navBarStateCenter = document.querySelector(".navigationBar--state.center");
	let navBarStateLeft = document.querySelector(".navigationBar--state.left");
	let iconSearch = document.querySelector(".icon__search");
	let textHeading = document.querySelector(".text__heading--outline-cap");

	if (MQ_DESKTOPBP.matches) {
		if (navBarStateCenter.classList.contains("navigationBar--state-3")) {
			alert("!");
			navBarStateCenter.classList.remove("navigationBar--state-3");
			navBarStateLeft.classList.add("navigationBar--state-3");
			navBarStateLeft.replaceChild(textHeading, iconSearch);
			navBarStateCenter.removeChild(textHeading);
			navBarStateCenter.appendChild(iconSearch);
		} 
	} 
	else if (navBarStateLeft.classList.contains("navigationBar--state-3")) {
		navBarStateLeft.classList.remove("navigationBar--state-3");
		navBarStateCenter.classList.add("navigationBar--state-3");
		navBarStateLeft.replaceChild(iconSearch, textHeading);
		navBarStateCenter.appendChild(textHeading);
	}
}

/*function toggleDropDown(i) {
	let sideModules = document.querySelectorAll(".sidebar__module"); 
	let parentNode = this.parentNode.className;

	return function(event) {
		let clickedElement = event.currentTarget;

		for (var i = 0; i < sideModules.length; i++) {
			sideModules[i].className = "sidebar__module closed";
			if (parentNode.classList.contains("closed")) {
					parentNode.classList.toggle("closed");
			}
		}
	};
}
*/
	
		




/*var indexValuesForEachRow = [0, 1, 2, 3, 4];

	function main() {
		var flexRowList = document.getElementsByClassName('row--flex-12');
		var flexRowArray = [];

		console.log(flexRowList);
		for (var i=0; i < flexRowList.length; i++) {
			flexRowList[i].addEventListener('click', showHTML(i));
			flexRowArray.push(flexRowList[i]);
		}

	}
*/

/*pair appropriate HTML code snipet with the corresponding row based
	the array index value of the "row--flex-12" by creating a for loop
	and a forEach function*/
	
	/*function showHTML(i) {
		 
		 var flexRowList = document.getElementsByClassName('row--flex-12');
		 var flexRowArray = [];

		 for (var i=0; i < flexRowList.length; i++) {
			flexRowArray.push(flexRowList[i]);
		}

		 return function(event) {
		 	var clickedElement = event.currentTarget;

		 	indexValuesForEachRow.forEach(function() {
		 		if (indexValuesForEachRo  w[0] === )
		 	

		 		});

		 }
	}	
	
	*/
	/* function toggleItems() {
		var toggle = document.querySelectorAll('.toggle');

		
		for (var i=0; i < toggle.length; i++) {
			if (toggle[i].style.display = 'none') {
				toggle[i].style.display = 'block';
			} else {
				toggle[i].style.display = 'none';
			}
		}	
	} */
