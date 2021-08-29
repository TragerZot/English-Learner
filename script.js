const saveWords = () => {
	if (document.querySelector(".saveInputRu").value !== "") {
			let keysArray = Object.keys(localStorage);
			let objArray = Object.values(localStorage);
			if (keysArray.includes(document.querySelector(".saveInputEn").value) && objArray.includes(document.querySelector(".saveInputRu").value)) {
				alert("Вы уже записали такое слово");
			} else {
				localStorage.setItem(document.querySelector(".saveInputEn").value, document.querySelector(".saveInputRu").value);
				alert("Слово успешно сохраненно");
			}
		} else if (document.querySelector(".saveInputRu").value === "") {
		alert("Введите перевод");
	}

	document.querySelector(".saveInputEn").value = "";
	document.querySelector(".saveInputRu").value = "";
};

const getRandom = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

const getNumber = () => {
	return getRandom(0, localStorage.length);
}

const start = () => {
	let checkedValue = document.querySelector(".practiceInputEn");
	checkedValue.value = localStorage.key(getNumber());
	return localStorage.key(getNumber());
};

const check = () => {
	let word = localStorage.getItem(start());
	if (document.querySelector(".practiceInputRu").value === word) {
		alert("Правильно");
		document.querySelector(".libraryArea").innerHTML = `${start()} - ${word}, ${document.querySelector(".practiceInputRu").value}`;
		document.querySelector(".libraryArea").style.color = "green";
	} else {
		alert("Неправильно");
		// document.querySelector(".libraryArea").innerHTML = `${start()} - ${word}, ${document.querySelector(".practiceInputRu").value}`;
		let wrongWord = document.querySelector(".practiceInputRu").value;
		wrongWord.split("");
		let correctWord = word;
		correctWord.split("");
		document.querySelector(".libraryArea").innerHTML = start() + " - ";
		for (let index = 0; index < correctWord.length; index++) {
			if (correctWord[index] === wrongWord[index]) {
				document.querySelector(".libraryArea").innerHTML += correctWord[index];
			}			
		}
	}

	document.querySelector(".practiceInputRu").value = "";
	
	start();
};

const reset = () => {
	localStorage.clear();
	alert("Все стерто");
};

const showAll = () => {
	for (let index = 0; index < localStorage.length; index++) {
		let key = localStorage.key(index);
		document.querySelector(".libraryArea").innerHTML += `${key} - ${localStorage.getItem(key)}, `;		
	}
};

const clear = () => {
	document.querySelector(".libraryArea").value = "";
};