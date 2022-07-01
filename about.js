console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("Form Submitted")
}

function complimentAlert(event) {
	event.preventDefault();

	alert("You so freshy fresh")
}



let form = document.querySelector('#contact');
form.addEventListener('submit', handleSubmit);

let compliment = document.querySelector('#freshCat')
compliment.addEventListener('mouseover', complimentAlert);