function makeVisible(id) {
    var element = document.getElementById(id);
    element.classList.remove('hidden');


    localStorage.setItem(id, 1);
}

function makeInvisible(id) {
    var element = document.getElementById(id);
    element.classList.add('hidden');

}

var cities = [
    'novosibirsk',
    'munich',
    'moscow',
    'amsterdam',
    'vena',
    'sanfran',
    'roma',
    'bangkok',
    'rio',
    'toronto',
    'rejk',
    'paris',
    'berlin',
    'london'
];

for (var i = 0; i < cities.length; i++) {
    if (localStorage.getItem(cities[i]) !== null) {
        makeVisible(cities[i]);
    }
}
