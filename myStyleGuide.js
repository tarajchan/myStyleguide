

/*const addBorder = (i) => {
	return function() {
		if (this.style.borderRight = "0.05em solid $grey-dark") {
			this.previousSibling.style.border = "0";
		} else {
			this.previousSibling.style.borderRight = "0.05em solid $grey-dark";
		}
	};
};
*/

function toggle(i) {
	return function() {
		this.parentNode.classList.toggle("active");
		this.classList.toggle("active");
	};
/*
	for (let i = 0; i < navIconMenu.length; i++) {
		if (navIconMenu[i].classList.contains("active")) {
		  navIconMenu[i].parentNode.classList.toggle("navigationBar--state-5");
			navIconMenu[i].parentNode.previousSibling.classList.toggle("navigationBar--state-3");
		} 
	}
*/

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

const removeBorder = (i) => {
	return function() {
		this.previousSibling.style.removeProperty("border");	
	};
};

function scaleItem(i) {
	return function() {
		this.nextElementSibling.style.removeProperty("border-left");
	};
}

const showDropDown = (i) => {
	let absDropDown = document.querySelector(".menu__dropDown--absolute"); 

	return () => {
		absDropDown.classList.toggle("active");
		absDropDown.classList.toggle("menu__dropDown--absolute--thin--right");	
	};
};

function setClass(letiable, className, methodName) {
	for (let i=0; i < letiable.length; i++) {
		letiable[i].classList[methodName](className);
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
	if (MQ_TABLETBP.matches) {
		alert("!");
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

function main() {
	"use strict";
	let today = new Date();
	let dateStringToday = today.toDateString();

	let formInput = document.querySelector(".form__input-segment");

	let dropDownArrow = document.querySelectorAll(".triangle--down-white--small");
	let ellipsis = document.querySelectorAll(".icon__ellipsis");
	let accordion = document.querySelectorAll(".accordion");
	let accordionSingle = document.querySelectorAll(".accordion--singleSelect");
	let sidebarButton = document.querySelectorAll(".sidebar__module");
	let iconWrapper = document.querySelectorAll(".icon__wrapper");
	let search = document.querySelectorAll(".icon__search");
	let showHTML = document.querySelectorAll(".main__sectionHeading-expander-icon");
	let mediaDate = document.querySelectorAll(".media__date");
	let navItemThin = document. querySelectorAll(".navigationBar__menu-item--thin");
	let textLink = document.querySelectorAll(".text__link");
	let menuDropDown = document.querySelectorAll(".menu__expander-icon");
	
	const MQ_DESKTOPBP = window.matchMedia("(min-width: 768px)");
	const MQ_TABLETBP = window.matchMedia("(max-width: 640px)");


	for (let i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", toggle(i), false);
	}

	for (let i = 0; i < search.length; i++) {
		search[i].addEventListener("click", toggle(i), false);
	}

	for (let i = 0; i < accordionSingle.length; i++) {
		accordionSingle[i].addEventListener("click", toggleSingle(i), false);
	}

	for (let i = 0; i < dropDownArrow.length; i++) {
		dropDownArrow[i].addEventListener("click", toggleDropDown(i), false);
	}

	for (let i = 0; i < ellipsis.length; i++) {
		ellipsis[i].addEventListener("click", showDropDown(i), false);
	}

	// for (let i = 0; i < iconWrapper.length; i++) {
	// 	iconWrapper[i].addEventListener("mouseover", removeBorder(i), false);
	// }

	// for (let i = 0; i < iconWrapper.length; i++) {
	// 	iconWrapper[i].addEventListener("mouseleave", addBorder(i), false);
	// }

	for (let i = 0; i < showHTML.length; i++) {
		showHTML[i].addEventListener("click", showCode(i), false);
	}

	for (let i = 0; i < textLink.length; i++) {
		textLink[i].addEventListener("click", toggleMenu(i), false);
	}

	for (let i = 0; i < menuDropDown.length; i++) {
		menuDropDown[i].addEventListener("click", toggleMenu(i), false);
	}

	// for (let i = 0; i < menuFlexItem.length; i++) {
	// 	menuFlexItem[i].addEventListener("click", toggleThisAndNext(i), false);
	// }

	for (let i = 0; i < sidebarButton.length; i++) {
		sidebarButton[i].addEventListener("click", toggleThisAndNext(i), false);
	}

	for (let i = 0; i < navItemThin.length; i++) {
		navItemThin[i].addEventListener("mouseover", scaleItem(i), false);
	}

	for (let i = 0; i < mediaDate.length; i++) {
		mediaDate[i].textContent = dateStringToday;
	}



	WidthChange(MQ_TABLETBP);
	MQ_TABLETBP.addListener(WidthChange);

	WidthChange(MQ_DESKTOPBP);
	MQ_DESKTOPBP.addListener(WidthChange);
} 

document.addEventListener("DOMContentLoaded", main);

/*function toggleDropDown(i) {
	let sideModules = document.querySelectorAll(".sidebar__module"); 
	let parentNode = this.parentNode.className;

	return function(event) {
		let clickedElement = event.currentTarget;

		for (let i = 0; i < sideModules.length; i++) {
			sideModules[i].className = "sidebar__module closed";
			if (parentNode.classList.contains("closed")) {
					parentNode.classList.toggle("closed");
			}
		}
	};
}
*/
	

/*pair appropriate HTML code snipet with the corresponding row based
	the array index value of the "row--flex-12" by creating a for loop
	and a forEach function*/
	
	/*function showHTML(i) {
		 
		 let flexRowList = document.getElementsByClassName('row--flex-12');
		 let flexRowArray = [];

		 for (let i=0; i < flexRowList.length; i++) {
			flexRowArray.push(flexRowList[i]);
		}

		 return function(event) {
		 	let clickedElement = event.currentTarget;

		 	indexValuesForEachRow.forEach(function() {
		 		if (indexValuesForEachRo  w[0] === )
		 	

		 		});

		 }
	}	
	
	*/
