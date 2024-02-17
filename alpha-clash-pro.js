function play(){
    hideElementById("homeSection");
    hideElementById("score-Section");
    showElementById("playGroundSection");
    continueGame()


    setElementValueById("life", 5);
    setElementValueById("current-score", 0)
    // document.getElementById("homeSection").classList.add("hidden");
    // document.getElementById("playGroundSection").classList.remove("hidden")
}


function continueGame(){
    const alphabet = getRandomAlphabet()
    document.getElementById("current-Alphabet").innerText=alphabet;
    setHighlightBgColorById(alphabet)
    
}

function keyUpHandlerEvent(event){
    const playerPressed = event.key;
    console.log(playerPressed);


    // game stop 
    if(playerPressed === "Escape"){
        gameOver()

    }


    // Expected alphabet 
    const displayAlphabet = document.getElementById("current-Alphabet");
    const currentAlphabet = displayAlphabet.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();


    if(expectedAlphabet===playerPressed){
        console.log("Great.. You won a life and next step");

        const currentScore = getElementValueById("current-score");
        const updateValue = currentScore + 1;
        setElementValueById("current-score", updateValue);


        // const currentScore = document.getElementById("current-score");
        // const currentScoreValue = currentScore.innerText;
        // const ScoreValue = parseInt(currentScoreValue)
        // console.log(ScoreValue)

        // const newScore = currentScore + 1;
        // currentScore.innerText=newScore;


        removeBgColorById(expectedAlphabet)
        continueGame()
    }else{
        console.log("You missed! you lost a life");

        const lifeValue = getElementValueById("life");
        const newLife = lifeValue-1;
        setElementValueById("life", newLife)
        


        // const LifeScore = document.getElementById("life");
        // const LifeText = LifeScore.innerText;
        // const lifeValue = parseInt(LifeText);

        // const newLife = lifeValue-1;
        // life.innerText = newLife;

        if(newLife === 0){
            gameOver()
        }
    }

}


document.addEventListener("keyup", keyUpHandlerEvent )


