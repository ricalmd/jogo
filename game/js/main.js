import {
    byId,
    byTag,
    sleepNow,
    aleat,
    byClass
} from './utils.js';

import {
    table
} from './tableGame.js';

import {
    toWork
} from './piecesWorker.js';

import {
    createList,
    scoreList
} from './storageService.js';

import {
    Piece
} from './pieces.js';

import {
    Helper
} from './helpers.js';

function alterClass(){
    byId(Helper.num).classList.value = 'line';
    byId(Helper.num + Helper.element.arrayElement[0]).classList.value = 'line';
    byId(Helper.num + Helper.element.arrayElement[1]).classList.value = 'line';
    byId(Helper.num + Helper.element.arrayElement[2]).classList.value = 'line';
}

function choiceDisplay(){
    byId('choosingLevel').style.display = 'block';
    byId('choose').disabled = true;
    byId('displayScore').disabled = true;
    Helper.startingButton = false;
}

function chooseImage(){
    for(let i = 0; i < byClass('displayImg').length; i++){
        if(Helper.rdf === i){
            byClass('displayImg')[i].style.display = 'inline';
        }else{
            byClass('displayImg')[i].style.display = 'none';
        }
    }
}

async function colorGoAsync(){
    if(Helper.rd === -1){
        Helper.rd = aleat(elementsCounter());
        Helper.rdf = aleat(elementsCounter());
        chooseImage();
    }

    byId('choose').disabled = true;
    byId('displayScore').disabled = true;

    while(Helper.boolGame){
        await lineScoreAsync();
        score();

        let elementsKeys = Object.keys(Piece);

        for(let i = 0; i < elementsKeys.length; i++){
            if(Piece[`${elementsKeys[i]}`].number === Helper.rd){
                Helper.element = Piece[`${elementsKeys[i]}`];
            }
        }

        let array = Helper.element.arrayElement;

        Helper.helpDirection = false;

        toWork(Helper.num, array);
        
        conclusion();

        gameOver();

        Helper.num += 10;

        await sleepNow(Helper.speed);
    }
}

function conclusion(){
    if(limit()){
        alterClass();

        Helper.speed = Helper.auxSpeed;

        Helper.speedBool = false;

        if(Helper.points >= (1000 * Helper.auxLevel) * (Helper.level + 1) && Helper.speed > 50){
            Helper.speed -= 50;
            Helper.level += 1;
            Helper.auxLevel += 0.5;
            Helper.auxSpeed = Helper.speed;
        }

        Helper.num = -7;

        Helper.helpDirection = true;

        Helper.rd = Helper.rdf;

        Helper.rdf = aleat(elementsCounter());

        chooseImage()
    }
}

function counter(array, numberAux){
    let element = array;
    let aux = numberAux + Helper.num;
    let confirm = false;
    
    for(let i = 0; i < element.length; i++){
        if(aux % 10 === 0 || byId(Helper.num + element[i]).classList.value !== 'blocs'){
            confirm = true;
            i = element.length;
        }else{
            confirm = false;
        }
    }
    return confirm;
}

function countRotate(){
    let element = Helper.element.rotate;
    let confirm = false;
    let auxR1 = element[element.length - 1], auxR2 = element[element.length - 2], auxR3 = element[element.length - 3];
    let auxL1 = element[element.length - 4], auxL2 = element[element.length - 5], auxL3 = element[element.length - 6];
    let aux = element[element.length - 7];

    for(let i = 0; i < element.length - 7; i++){
        if((((auxR1 + Helper.num) % 10 === 0 && Helper.num % 10 !== 0) || 
           ((auxR2 + Helper.num) % 10 === 0  && Helper.num % 10 !== 0) || 
           ((auxR3 + Helper.num) % 10 === 0) && Helper.num % 10 !== 0) || 
           (((auxL1 + Helper.num) % 10 === 0) && (Helper.num + aux) % 10 === 0 ||
           ((auxL2 + Helper.num) % 10 === 0 && (Helper.num + aux) % 10 === 0) ||
           ((auxL3 + Helper.num) % 10 === 0 && (Helper.num + aux) % 10 === 0)) ||
           byId(Helper.num + element[i]).classList.value !== 'blocs'){
            confirm = true;
            i = element.length;
        }else{
            confirm = false;
        }
    }
    return confirm;
}

function downButton(){
    if(Helper.boolGame && !Helper.helpDirection){
        faster();
    }
}

function downLines(element){
    Helper.helpDirection = true;
    let count = 0;

    for(let i = 0; i < 10; i++){
        if(210 - element + count <= 200){
            byId(`${element + i - count}`).classList.value = byId(`${element + i - count - 10}`).classList.value;
            byId(`${element + i - count}`).style.fill = byId(`${element + i - count - 10}`).style.fill;
                
            if(i === 9){
                count += 10;
                i = -1;
            }
        }
    }
        
    Helper.helpDirection = false;
}

function elementsCounter(){
    let count = 0;
    let obj = Object.keys(Piece);

    for(let i = 0; i < obj.length; i++){
        if(Piece[`${obj[i]}`].path.length > 0){
            count++;
        }
    }
    return count;
}

function faster(){
    if(!Helper.speedBool){
        Helper.auxSpeed = Helper.speed;
        Helper.speed = 0;
    }
    Helper.speedBool = true;
    Helper.points++;
}

function gameOver(){
    let num = 0, first = 0;

    if(scoreList() !== undefined){
        if(scoreList().length > 1){
            first = scoreList().sort((a, b) => b.score - a.score)[0].score;
        }else{
            first = scoreList()[0].score;
        }
    }
    
    for(let i = 0; i < byClass('line').length; i++){
        num = parseInt(byClass('line')[i].id);

        if(num >= 0 && num <= 9){
            totalStop();
            
            if(Helper.points > first){
                byId('endGame').style.display = 'block';
            }
        }
    }
}

function leaveLevel(){
    byId('choosingLevel').style.display = "";
    byId('choose').disabled = false;
    byId('displayScore').disabled = false;
    Helper.startingButton = true;
}

function leaveList(){
    byId('listScore').style.display = "";
    byId('list').textContent = "";
    Helper.startingButton = true;
}

function leaveName(){
    byId('endGame').style.display = "";

    reset();
}

function left(){
    if(!counter(Helper.element.arrayLeft, Helper.element.auxLeft)){
        Helper.num--;
    }
}

function leftButton(){
    if(Helper.boolGame && !Helper.helpDirection){
        left();
    }
}

function limit(){
    let array = Helper.element.limit;
    let verif = false;

    for(let i = 0; i < array.length; i++){
        if(byId(Helper.num + array[i] + 10) === null || 
          byId(Helper.num + array[i] + 10).classList.value !== 'blocs'){
            verif = true;
        }
    }
    return verif;
}

async function lineScoreAsync(){
    let count = 0, num = 0;
    let array = [];
    let bool = false;

    for(let i = 0; i < byClass('line').length; i++){
        num = parseInt(byClass('line')[i].id);

        if(num % 10 === 0){
           bool = true;
           count = 0;
        }
        if(bool){
            count++;

            if(count === 10 && (num + 1) % 10 === 0){
                bool = false;

                array.push(num - 9);
            }
        }
    }

    if(array.length > 0){
        Helper.boolGame = false;

        Helper.points += array.length * 100;
        Helper.lines += array.length;

        for(let i = 0; i < array.length; i++){
            downLines(array[i]);

            await sleepNow(10);
        }

        Helper.boolGame = true;
    }
}

function reset(){
    Helper.boolGame = false;
    Helper.element = {};
    Helper.num = 3;
    Helper.rd = -1;
    Helper.rdf = 0;
    Helper.helpDirection = false;
    Helper.speed = 1100;
    Helper.auxSpeed = 1100;
    Helper.speedBool = false;
    Helper.startingButton = true;
    Helper.points = 0;
    Helper.lines = 0;
    Helper.level = 0;
    Helper.auxLevel = 1;

    for(let i = 0; i < byTag('rect').length; i++){
        byTag('rect')[i].classList.value = 'blocs';
        byTag('rect')[i].style.fill = 'lightgrey';
    }

    for(let i = 0; i < byClass('displayImg').length; i++){
        byClass('displayImg')[i].style.display = 'none';
    }

    byId('textScore').textContent = "";
    byId('choose').disabled = false;
    byId('displayScore').disabled = false;
}

function resetButton(){
    if(byId('choosingLevel').style.display === "" && byId('endGame').style.display === "" && byId('listScore').style.display === ""){
        reset();
    }
}

function right(){
    if(!counter(Helper.element.arrayRight, Helper.element.auxRight)){
        Helper.num++;
    }
}

function rightButton(){
    if(Helper.boolGame && !Helper.helpDirection){
        right();
    }
}

function rotate(){
    if(!countRotate()){
        if(Helper.element.rotate.length >= 1){
            Helper.num += Helper.element.rotate[0];
            Helper.rd = Helper.element.random;
        }
    }
}

function rotateButton(){
    if(Helper.boolGame && !Helper.helpDirection){
        Helper.helpDirection = true;
        rotate();
    }
}

function score(){
    if(Helper.boolGame){
        byId('textScore').textContent = "Score:" + "\n" + (Helper.points++) + "\n" + "Lines:" + "\n" + Helper.lines + "\n" + 
        "Level:" + "\n" + Helper.level;
    }
}

function showScoreList(){
    Helper.startingButton = false;

    byId('listScore').style.display = 'block';
    let array = scoreList().sort((a, b) => b.score - a.score);

    array.forEach(element => {
        byId('list').innerHTML += "<p><span id='nickName'>" + element.name + "</span><br>Score: " + element.score + "<br>Lines: " + element.lines + "<br>Level: " + element.level + "<br><br><hr><p>";
    });
}

function startGame(){
    if(!Helper.boolGame && Helper.startingButton){
        Helper.boolGame = true;
        colorGoAsync();
    }
}

function stopGame(){
    if(Helper.boolGame && byId('choosingLevel').style.display === "" && byId('listScore').style.display === "" && byId('endGame').style.display === ""){
        Helper.boolGame = false;
        byId('displayScore').disabled = false;
    }
}

function submitLevel(){
    if(byId('levelValue').value !== ""){
        Helper.level = parseInt(byId('levelValue').value);
        Helper.speed -= 50 * Helper.level;
        Helper.auxSpeed = Helper.speed;
    }
    byId('choosingLevel').style.display = "";
    byId('choose').disabled = false;
    byId('displayScore').disabled = false;
    Helper.startingButton = true;
}

function submitName(){
    let text = "";
    
    if(!byId('name').value){
        alert('If you want to record your score, please enter your nickname');
    }else{
        byId('endGame').style.display = "";
        text = byId('name').value + "\n" + byId('textScore').textContent;
        createList(text);

        reset();
    }
}

function totalStop(){
    Helper.boolGame = false;
    Helper.startingButton = false;
}

window.onload = table();

window.addEventListener("keydown", function(e) {
    if(e.key === "Enter" && !Helper.boolGame && Helper.startingButton){
        Helper.boolGame = true;
        colorGoAsync();
    }else if(e.key === "Shift" && Helper.boolGame && byId('choosingLevel').style.display === "" && byId('listScore').style.display === "" && byId('endGame').style.display === ""){
        Helper.boolGame = false;
        byId('displayScore').disabled = false;
    }else if(e.key === "ArrowLeft" && Helper.boolGame && !Helper.helpDirection){
        left();
    }else if(e.key === "ArrowRight" && Helper.boolGame && !Helper.helpDirection){
        right();
    }else if(e.key === " " && Helper.boolGame && !Helper.helpDirection){
        Helper.helpDirection = true;
        rotate();
    }else if(e.key === "ArrowDown" && Helper.boolGame && !Helper.helpDirection){
        faster();
    }else if(e.key === "Backspace" && byId('choosingLevel').style.display === "" && byId('endGame').style.display === "" && byId('listScore').style.display === ""){
        reset();
    }
});

window.addEventListener('load', function() {
    byId('choose').addEventListener("click", choiceDisplay);
    byId('leave').addEventListener("click", leaveLevel);
    byId('submitLevel').addEventListener("click", submitLevel);
    byId('displayScore').addEventListener("click", showScoreList);
    byId('leaveList').addEventListener("click", leaveList);
    byId('nameSubmit').addEventListener("click", submitName);
    byId('leaveName').addEventListener("click", leaveName);
    byId('startButton').addEventListener("click", startGame);
    byId('stopButton').addEventListener("click", stopGame);
    byId('resetButton').addEventListener("click", resetButton);
    byId('rotateButton').addEventListener("click", rotateButton);
    byId('leftButton').addEventListener("click", leftButton);
    byId('rightButton').addEventListener("click", rightButton);
    byId('downButton').addEventListener("click", downButton);
});