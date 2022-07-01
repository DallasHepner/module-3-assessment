console.log('Hello Final')

let letsEat = document.querySelector('#randomEats')
const places = ['http://www.cannerycreamery.com/', 'https://ramenhausogden.com/', 'http://www.windyssukiyaki.com/']

function yummyYum(evt) {
    evt.preventDefault();

    const random = Math.floor(Math.random() * places.length);
    let printThis = (random, places[random]);
    alert(printThis)
}

letsEat.addEventListener('click', yummyYum)