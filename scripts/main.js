function makeVisible(id) {
    if (id == '') {
        return;
    }

    var element = document.getElementById(id);
    if (element === null) {
        return;
    }
    
    element.classList.remove('hidden');

    localStorage.setItem(id, 1);
}

function makeInvisible(id) {
    if (id == '') {
        return;
    }

    var element = document.getElementById(id);
    if (element === null) {
        return;
    }
    
    element.classList.add('hidden');

    localStorage.removeItem(id)
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

var citySelect = document.getElementById('city-select');
citySelect.onchange = function(event) {
    makeVisible(citySelect.value);
}
