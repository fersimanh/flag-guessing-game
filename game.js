let flagsAndCountry = {}
let newFlag;
let attempts;
let buttons = document.getElementsByTagName('button');
function setUpFlags (){

    fetch("https://restcountries.com/v3.1/all")
        .then( (response) => response.json() )
        .then( (data) => {

            for(let i = 0; i < data.length; i++){
                let flag = data[i].flags.png
                let country = data[i].name.common


                flagsAndCountry[flag] = country 

            }
            console.log(flagsAndCountry)
            getRandomCountry()
    })
    
}
function increaseScore(){
        let element = document.getElementById('score');
        let value = element.innerHTML;

        ++ value;
        console.log(value);
        document.getElementById('score').innerHTML = value;

   }
function livesDecrease(){
    let element2 = document.getElementById('counter');
    let value2 = element2.innerHTML;

    -- value2;
    console.log(value2);
    document.getElementById('counter').innerHTML = value2;
    if(value2 === 0){
        
        for(btn of buttons) {
            btn.disabled = true;
        }
        
        window.alert("Game Over. Refresh to start over.")
    }
}
function getRandomCountry(){
        const keys = Object.keys(flagsAndCountry);
        newFlag = keys[Math.floor(Math.random() * keys.length)];
        document.getElementById("flag").src=newFlag
        console.log(newFlag)
}

function compareUserInput(){
    let userInput = (document.getElementById("country").value)
    let answer = (flagsAndCountry[newFlag]).toLowerCase()
    

    let isCorrect = userInput === answer
    console.log(userInput,answer, isCorrect )

    if (isCorrect){
       getRandomCountry()
       document.getElementById("country").value = ""
       increaseScore()
    }
 }
function skipFlag(){
    if (skipFlag){
        getRandomCountry()
        document.getElementById("country").value = ""
        livesDecrease()
    }
    }


setUpFlags()


