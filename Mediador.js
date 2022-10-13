const mediator = function () {
    const events = {};

    const suscribe = function (event, fn) {
        if (!events[event]) {
            events[event] = [];
        }
        events[event].push(fn);
    }

    const dispatch = function (event, payload) {
        if (!events[event]) {
            return false;
        }
        events[event].forEach(fn => fn(payload));
    }

    return {
        dispatch,
        suscribe
    }
}();

let input={
    num1:1,
    num2:2,
    num3:3,
}

mediator.suscribe('Cocina buebito', function (input) {
    console.log(input.num1 + ' - Coloque el contenido de dos huevos en un recipiente');
});

mediator.suscribe('Cocina buebito', function (input) {
    console.log(input.num2 + ' - Pero sólo la clara');
});

mediator.dispatch('Cocina buebito',input);

mediator.suscribe('Cocina buebito', function (input) {
    console.log(input.num3 + ' - JSJSJSJS');
});

mediator.dispatch('Cocina buebito',input);

