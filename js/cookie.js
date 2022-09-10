let counter = 0;
let numberOfMessage = 0;
let skySpeedByNumberOfMessage = {
    "0": "2s",
    "7": "1.8s",
    "14": "1.1s",
    "21": "0.4s",
    "25": "0.1s"
};

const setCounter = (newCounter) => {
    counter = newCounter;
    setCounterText()
}

const updateSkySpeed = () => {
    const body = document.body;
    const cookie = document.getElementById('container-image-cookie');
    setMaxPowerText(numberOfMessage >= 25);
    if (checkIfNestedKeysExists(skySpeedByNumberOfMessage, [numberOfMessage])) {
        body.style.animationDuration = skySpeedByNumberOfMessage[numberOfMessage];
        cookie.style.animationDuration = skySpeedByNumberOfMessage[numberOfMessage]
    }
}

const addCookieClickedMessage = () => {
    const message = document.createElement('p');
    message.classList.add('cookie-clicked-message')
    message.innerHTML = getCookieClickedMessageText();
    message.style.left = getRandomNumber(30, 70)+'%'; 
    message.style.top = getRandomNumber(10, 80)+'%';
    const cookieClickedMessagesElement = document.getElementById('container-image-cookie')
    const fire = document.getElementById('image-fire');
    if (cookieClickedMessagesElement) {
        cookieClickedMessagesElement.append(message)
        fire.style.display = 'block'
        numberOfMessage++;
        updateSkySpeed();
        setTimeout(() => {
            message.classList.add('removed')
            fire.style.display = 'none'
            setTimeout(() => {
                message.remove()
                numberOfMessage--;
                updateSkySpeed();
            }, 4000)
        }, 25)
    }
}

const listenForCookieClick = () => {
    const cookieImageContainer = document.getElementById('container-image-cookie');
    if (cookieImageContainer) {
        cookieImageContainer.addEventListener('click', () => {
            setCounter(counter + 1)
            addCookieClickedMessage()
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    listenForCookieClick();
    setCounter(0);
});