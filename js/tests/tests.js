const testCheckIfNestedKeysExists = () => {
    const mock = {
        'foo': 'bar',
        'foo1' : {
            'bar1' : ''
        }
    };

    return checkKeysExists(mock, [])
        && checkKeysExists(mock, ['foo'])
        && checkKeysExists(mock, ['foo1', 'bar1'])
        && !checkKeysExists(mock, ['foo1', 'bar2'])
        && !checkKeysExists(mock, ['foo3'])
        && !checkKeysExists(mock, ['foo3', 'foo4']);
}

const testGetRandomNumber = () => {
     return getRandomNumber(1, 1) === 1
        && getRandomNumber(0, 10) <= 10 && getRandomNumber(0, 10) >= 0;
}


const tests = {
    'testCheckIfNestedKeysExists': testCheckIfNestedKeysExists,
    'testGetRandomNumber': testGetRandomNumber
}

document.addEventListener("DOMContentLoaded", () => {
    console.log('Testing...')
    let testsPassed = true;
    for (const test in tests) {
        if (eval(tests[test])) {
            console.log(test, 'passed');
        } else {
            console.log(test, 'did not passed');
            testsPassed = false;
        }
    }
    console.log('... End of testing')
    if (testsPassed) {
        console.log('Tests passed !')
    } else {
        console.log('Tests did not passed.')
    }
});

