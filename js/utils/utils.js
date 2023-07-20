/*
Check if a nested key is present in the given object
*/
const checkIfNestedKeysExists = (object, keys) => {
    if (!object || !Array.isArray(keys)) {
        return false;
    }
    let keyIndex = 0
    while (keyIndex < keys.length) {
        const key = keys[keyIndex];
        object = object[key];
        if (object === undefined) {
            return false;
        }
        keyIndex++
    }
    return true
}

const getRandomNumber = (min = -Infinity, max = +Infinity) => {
    return Math.floor(Math.random()*(max-min+1)+min);
}
