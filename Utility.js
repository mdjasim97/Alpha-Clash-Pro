function hideElementById(elementById){
    document.getElementById(elementById).classList.add("hidden");
}

function showElementById(elementById){
    document.getElementById(elementById).classList.remove("hidden");
}


function getRandomAlphabet(){
    const alphabets = "abcdefghijklmnopqrstuvwxyz";
    let alphabetArray = alphabets.split("")


    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const letter = alphabetArray[index]
    return letter;
}


function setHighlightBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-400")
}

function removeBgColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove("bg-orange-400")

}


function getElementTextById(elementTextId){
    const element = document.getElementById(elementTextId);
    const text = element.innerText;
    return text;

}


function getElementValueById(getElementId){
    const element = document.getElementById(getElementId);
    const currentValue = parseInt(element.innerText);
    return currentValue;
}

function setElementValueById(elementId, value){
    let element = document.getElementById(elementId);
    return element.innerText=value;

}


function gameOver(){
    hideElementById("playGroundSection");
    showElementById("score-Section");


    const gameScore = getElementValueById("current-score");
    setElementValueById("scoreSet", gameScore)


    const currentAlphabet = getElementTextById("current-Alphabet");
    removeBgColorById(currentAlphabet)

    
}




