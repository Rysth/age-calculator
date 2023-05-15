const date = document.querySelector("#date");
const submit = document.querySelector("#submit");

const result = document.querySelector("#result");

submit.addEventListener("click", (event) => {
	event.preventDefault();
	calculateAge();
});

const calculateAge = () => {
	const birthday = date.value;
	console.log(birthday);
	if (birthday === "") {
		alert("Please enter a valid date.");
		return;
	} else {
		const age = getAge(birthday);
		result.innerText = `Your age is ${age} years old.`;
	}
};

const getAge = (birthday) => {
	const currentDate = new Date();
	const birthdayDate = new Date(birthday);

	let age = currentDate.getFullYear() - birthdayDate.getFullYear();
	const months = currentDate.getMonth() - birthdayDate.getMonth();

	const day = currentDate.getDate();

	if (months < 0 || (months == 0 && day < birthdayDate.getDate())) {
		age--;
	}

	return age;
};
