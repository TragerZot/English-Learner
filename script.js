const saveWords = () => {
	if (document.querySelector(".saveInputRu").value !== "") {
		localStorage.setItem(document.querySelector(".saveInputEn").value, document.querySelector(".saveInputRu").value);
		alert("Слова успешно сохраненны");
	} else {
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
	} else {
		alert("Неправильно");
	}

	document.querySelector(".practiceInputRu").value = "";
	
	start();
};

const reset = () => {
	localStorage.clear();
	alert("Все стерто");
};

const look = () => {
	for (let index = 0; index < localStorage.length; index++) {
		let key = localStorage.key(index);
		alert(`${key} - ${localStorage.getItem(key)}`);		
	}
};

