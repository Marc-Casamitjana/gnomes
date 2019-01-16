import { foreach } from '/utils';

function isMatch(object, source) {  // comprueba si en un objeto (object) existen ciertas propiedades (source)
    let ocurrences = 0;
    const keys = Object.keys(source);
    foreach(object, function (key) {
        if (object[key].includes(source[key])) {
            ocurrences++;
        }
    });
    console.log(ocurrences === keys.length);
}

const filt = {
    hair_color: ['green'],
    professions: ['Metalworker']
};

const gnome = {
    id: 0,
    hair_color: 'red',
    professions: ['Metalworker', 'Woodcarver']
};

isMatch(gnome, filt);
