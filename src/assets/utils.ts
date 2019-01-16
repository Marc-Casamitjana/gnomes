export function foreach(object, callback) {
    if (Array.isArray(object)) {
        foreachArray(object, callback);
    } else {
        foreachObj(object, callback);
    }
}

export function foreachArray(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr)
    }
}


export function foreachObj(obj, fn) {
    const array = Object.keys(obj);
    for (let i = 0; array.length > i; i++) {
        fn(array[i], obj[array[i]], i, obj)
    }
}

export function map(object, callback) {
    if (Array.isArray(object)) {
        return mapArray(object, callback);
    } else {
        return mapObj(object, callback);
    }
}

export function filter(arr, fn) {
    const newArr = [];
    foreach(arr, function (e) {
        if (fn(e)) {
            newArr.push(e);
        }
    })
    return newArr;
}

export function reduce(object, callback, acc) {
    if (Array.isArray(object)) {
        return reduceArray(object, callback, acc);
    } else {
        return reduceObj(object, callback, acc);
    }
}

export function mapArray(arr, fn) {
    const newArr = [];
    foreach(arr, function (e, i, arr) {
        newArr[i] = fn(e, i, arr);
    });
    return newArr;
}

export function mapObj(obj, fn) {
    var newArr = [];
    foreach(obj, function (key, val, i, obj) {
        newArr[i] = fn(key, val, i, obj);
    });
    return newArr;
}

export function reduceObj(array, callback, acc) {
    foreach(array, function (e, i) {
        acc = callback(acc, e, array[e], i);
    });
    return acc;
}

export function reduceArray(array, callback, acc) {
    foreach(array, function (e, i) {
        acc = callback(acc, e, i, array)
    });
    return acc;
}

export function every(original, fn) {
    let result = 0;
    foreach(original, function (key, value) {
        if (!fn(key, value)) {
            result += 1;
        }
    });
    return result > 0 ? false : true;
}

export function areEquals(first, second) {
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    const result = every(first, function (key, value) {
        return second[key] === value;
    });
    return result;
}

export function includesObject(array, obj) {
    let result = 0;
    if (array.length === 0 || !Array.isArray(array)) { return false; }
    foreach(array, function (e) {
        if (areEquals(obj, e)) {
            result = 1;
        }
    });
    return result === 1 ? true : false;
}


export function removeDuplicates(params) {
    const result = [];
    foreach(params, function (e) {
        if (!includesObject(result, e)) {
            result.push(e);
        }
    });
    return result;
}

export function isMatch(object, source) {  // comprueba si en un objeto (object) existen ciertas propiedades (source)
    let ocurrences = 0;
    const keys = Object.keys(source);
    foreach(object, function (key) {
        if ((source[key] ? object[key] === source[key] : true)     &&
            (source[key] ? object[key].includes(source[key]) : true) &&
            (source[key] ? object[key] >= source[key][0] && object[key] <= source[key][1] : true)) {
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

function ageRange(gnome, filter, keys) {
    if (!Array.isArray(filter)) {
        return (gnome[keys] >= filter[keys][0] && gnome[keys] <= filter[keys][1]);
    }
}

