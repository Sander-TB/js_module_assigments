const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto/";
const apiUrl2 = "https://randomuser.me/api/";

const wrapperDiv = document.querySelector(".wrapper");

fetch(apiUrl2)
	.then(function(response) {
		if (response.status === 200) {
			return response.json();
		} else {
			console.log("Ooops, error happened");
		}
	})
	.then(function(json) {
		const results = json.results;
		// pas in results array into function as an argument
		getName(results);
		getImage(results);
	})
	.catch(function(error) {
		console.log(error);
	});

//resultsArray is a parameter, waiting for an array to be passed in.
function getName(resultArray) {
	for (let i = 0; i < resultArray.length; i++) {
		let returnHTML = ``;
		let userFirstName = resultArray[i].name.first;
		let userLastName = resultArray[i].name.last;

		returnHTML += `<h1>${userFirstName} ${userLastName}</h1>`;

		let heading = document.createElement("h1");
		let photoArea = document.querySelector("figure");
	}
}

function getImage(imageArray) {
	for (let i = 0; i < imageArray.length; i++) {
		let returnHTML = ``; //Using back-ticks instead of "" to show its gonna be used in a template literal later
		let photo = imageArray[i].picture.large;

		returnHTML += `<img src="${photo}"/>`;

		let photoDiv = document.createElement("figure");
		let addPhotoToDiv = (wrapperDiv.appendChild(
			photoDiv
		).innerHTML = returnHTML);
	}
}
