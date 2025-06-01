const myButton = document.getElementById('unHideButton');
const hiddenDiv = document.getElementById('hidden-div');
const option1 = document.getElementById('option1');
const option2 = document.getElementById('option2');
const option3 = document.getElementById('option3');
const option4 = document.getElementById('option4');
const heartStat = document.getElementById('heart-stat');
const healthStat = document.getElementById('health-stat');
const goldStat = document.getElementById('gold-stat');
let hearts = 0;
let health = 100;
let gold = 0;

// store an array of gameStates

const gameStates = ["test"];
// initialize gameState to 0 (in this case, testing)
var gameState = gameStates[0];

switch (gameState) {
    case "test":
        testState();
}

function testState(){
    option1.addEventListener("click", function() {
        hearts++;
    });
    option2.addEventListener("click", function() {
        hearts--;
    });
    option3.addEventListener("click", function() {
        gold += 10;
    });
    option4.addEventListener("click", function() {
        health -= 10;
    });
}






















// test code

myButton.onclick = function() {
    if (hiddenDiv.hasAttribute('hidden')){
        hiddenDiv.removeAttribute('hidden');
        console.log('removing hidden');
    }
    else {
        hiddenDiv.setAttribute('hidden', 'true');
        console.log('adding hidden');
    }
}