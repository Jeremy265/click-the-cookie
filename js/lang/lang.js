let lang;

const setLang = (newLang) => {
    lang = eval(newLang)();
    updateLang();
}

const updateLang = () => {
    setDocumentTitle();
    setPageTitle();
    setInstructionsText();
    setCounterText();
}

const setDocumentTitle = () => {
    if (checkIfNestedKeysExists(lang, ['global', 'documentTitle'])) {
        document.title = lang.global.documentTitle
    } 
}

const setPageTitle = () => {
    if (checkIfNestedKeysExists(lang, ['global', 'pageTitle'])) {
        document.getElementById('main-title').innerHTML = lang.global.pageTitle
    } 
}

const setInstructionsText = () => {
    if (checkIfNestedKeysExists(lang, ['global', 'instructions'])) {
        document.getElementById('instructions').innerHTML = lang.global.instructions
    } 
}

const setCounterText = () => {
    if (checkIfNestedKeysExists(lang, ['cookie', 'counterMessageBegin'])
     && checkIfNestedKeysExists(lang, ['cookie', 'counterMessageEndSingular'])
     && checkIfNestedKeysExists(lang, ['cookie', 'counterMessageEndPlurial'])
    ) {
        const cookieText = document.getElementById('counter');
        if (cookieText) {
            let end = counter === 1 
                      ? lang.cookie.counterMessageEndSingular 
                      : lang.cookie.counterMessageEndPlurial
            cookieText.innerHTML = lang.cookie.counterMessageBegin + ' ' + counter + ' ' + end;
        }
    }
}

const setMaxPowerText = (isMax) => {
    const maxPowerText = document.getElementById('max-power');
    if (!isMax) {
        maxPowerText.innerHTML = "";
        return;
    }
    if (checkIfNestedKeysExists(lang, ['global', 'maxPower'])) {
        if (maxPowerText) {
            maxPowerText.innerHTML = lang.global.maxPower;
        }
    }
}

const getCookieClickedMessageText = () => {
    if (checkIfNestedKeysExists(lang, ['cookie', 'messageOnClick'])) {
       return lang.cookie.messageOnClick;
    }
}

const listenForLangChange = () => {
    const btns = document.getElementsByClassName('btn-lang');
    for (let i = 0; i < btns.length; i++) {
        const btn = btns[i];
        btn.addEventListener('click', (e) => {
            const langSelected = btn.getAttribute('data-lang');
            setLang(langSelected);
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setLang('fr')
    listenForLangChange()
});