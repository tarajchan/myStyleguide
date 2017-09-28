
document.addEventListener("DOMContentLoaded", main);


function main() {
	"use strict";
	let dropDownArrow = document.querySelectorAll(".triangle--down-white");
	let buttonAbs = document.querySelectorAll(".button--absolute");
	let accordion = document.querySelectorAll(".accordion");

	for (var i = 0; i < buttonAbs.length; i++) {
		buttonAbs[i].addEventListener("click", toggle(i), false);
	}

	for (var i = 0; i < accordion.length; i++) {
		accordion[i].addEventListener("click", toggle(i), false);
	}

	for (var i = 0; i < dropDownArrow.length; i++) {
		dropDownArrow[i].addEventListener("click", toggleDropDown(i), false);
	}

	if (matchMedia) {
		const MQ_TABLETBP = window.matchMedia("@media screen and (min-width: 640px)");
		MQ_TABLETBP.addListener(WidthChange);
		WidthChange(MQ_TABLETBP);
	}
} 

function toggle(i) {
	return function() {
		this.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	};
}

function toggleDropDown(i) {
	return function() {
		this.parentNode.classList.toggle("active");
		this.nextElementSibling.classList.toggle("show");
	};
}

function WidthChange(MQ_TABLETBP) {
	let mainWrapper = document.querySelectorAll(".main__sectionDescription-wrapper");

	if (MQ_TABLETBP.matches) {
		mainWrapper.classList.remove("grid__container--2");
		mainWrapper.classList.add("grid__container--3");
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
