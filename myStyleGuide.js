
document.addEventListener("DOMContentLoaded", main);


function main() {
	"use strict";
	let navDropDown = document.querySelector(".navigationBar__dropDown");

	navDropDown.addEventListener("click", showDropDown(), false);
}

function showDropDown(event) {
	let action = event.currentTarget;
	let dropDownMenu = document.querySelector(".navigationBar__dropDown-menu");
	let hidden = document.querySelectorAll(".hidden");

	
		dropDownMenu.classList.toggle(hidden);
}




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
