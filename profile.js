console.log("hello again")

function colorBtn(evt) {
    evt.preventDefault();

    alert("Favorite color is Light Sea Blue")
}

function placeBtn(evt) {
    evt.preventDefault();

    alert("Favorite place is a Hawaii beach")
}

function ritualBtn(evt) {
    evt.preventDefault();

    alert("Favorite ritual is giving my wife a kiss before she or I leave the house")
}

let color2 = document.querySelector('#color')
color2.addEventListener('click', colorBtn)

let place2 = document.querySelector('#place')
place.addEventListener('click', placeBtn)

let ritual2 = document.querySelector('#ritual')
ritual2.addEventListener('click', ritualBtn)