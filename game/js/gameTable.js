import { Piece } from './pieces.js';
import {
    byId,
    create,
    createNS
} from './utils.js';

//Método que permite exportar todos os elementos DOM. Deste modo, só é preciso criar no documento HTML uma div
//com o id game
function table(){
    const game = byId('game');
    const table = createNS('svg');
    const next = createNS('svg');
    const levelButton = create('div');
    const contentButtons = create('div');
    const displayScore = create('label');
    const title = create('div');
    const startButton = create('button');
    const stopButton = create('button');
    const resetButton = create('button');
    const rotationButton = create('button');
    const leftButton = create('button');
    const rightButton = create('button');
    const downButton = create('button');
    const chooseLevelQuery = create('form');
    const gameOver = create('form');
    const displayButton = create('div');
    const bottomButtonsContent = create('div');
    const displayScoreList = create('div');
    const tableAndTitle = create('div');
    const list = create('div');
    const directionButtons = create('div');
    let x = 0, y = 0, name = 0;
    for(let i = 0; i < 11; i++){
        let rect = createNS('rect');
        rect.id = `${name}`;
        rect.classList.add('blocs');
        rect.setAttribute('x', x);
        rect.setAttribute('y', y);
        x += 15;
        if(x > 135){
            if(y <= 300){
                x = 0;
                i = 0;
                y += 15;
            }
        }
        table.appendChild(rect);
        name++;
    }
    startButton.innerHTML = '<b>Start</b>';
    stopButton.innerHTML = '<b>Stop</b>';
    resetButton.innerHTML = '<b>Reset</b>';
    rotationButton.innerHTML = '<b>&#8634;</b>';
    leftButton.innerHTML = '<b>&#8592;</b>';
    rightButton.innerHTML = '<b>&#8594;</b>';
    downButton.innerHTML = '<b>&#8595;</b>';
    startButton.id = 'startButton';
    stopButton.id = "stopButton";
    resetButton.id = 'resetButton';
    rotationButton.id = 'rotationButton';
    leftButton.id = 'leftButton';
    rightButton.id = 'rightButton';
    downButton.id = 'downButton';
    table.id = 'matrix';
    levelButton.innerHTML = "<button id='choose'><b>Choose Level</b></button>";
    title.innerHTML = "<h1>T<span class='title'>E</span>TRIS,<br>TH<span class='title'>E</span> GAM<span class='title'>E</span>!</h1>";
    displayButton.innerHTML = "<button id='displayScore'><b>Score</b></button>";
    chooseLevelQuery.id = 'choosingLevel';
    chooseLevelQuery.innerHTML = "<input type='number' value='0' min='0' id='levelValue'><input type='button' value='Submit' id='submitLevel'><input type='button' value='Back' id='leave'>";
    displayScore.id = 'score';
    let obj = Object.keys(Piece);
    for(let i = 0; i < obj.length; i++){
        if(Piece[`${obj[i]}`].path.length > 0){
            let g = createNS('g');
            for(let j = 0; j < Piece[`${obj[i]}`].path.length; j++){
                let path = createNS('path');
                path.setAttribute('d', 'm ' + Piece[`${obj[i]}`].path[j][0] + ',' + Piece[`${obj[i]}`].path[j][1] + ' h 15 v 15 h -15 z');
                path.setAttribute('fill', Piece[`${obj[i]}`].arrayElement[3]);
                path.classList.add('sq');
                g.appendChild(path);
            }
            g.classList.add('displayImg');
            next.appendChild(g);
        }
    }
    displayScore.innerHTML = "<div id='scoreText'></div>";
    displayScore.appendChild(next);
    contentButtons.id = 'buttons';
    contentButtons.appendChild(displayScore);
    title.id = 'contentTitle';
    bottomButtonsContent.id = 'bottomButtons';
    directionButtons.id = 'directionButtons';
    bottomButtonsContent.appendChild(levelButton);
    bottomButtonsContent.appendChild(displayButton);
    bottomButtonsContent.appendChild(startButton);
    bottomButtonsContent.appendChild(stopButton);
    bottomButtonsContent.appendChild(resetButton);
    directionButtons.appendChild(leftButton);
    directionButtons.appendChild(rightButton);
    directionButtons.appendChild(rotationButton);
    directionButtons.appendChild(downButton);
    contentButtons.appendChild(bottomButtonsContent);
    gameOver.id = 'gameOver';
    gameOver.innerHTML = "<h1>New Record!</h1><p>Enter a nickname</p><input type='text' id='name'><br><input type='button' value='Submit' id='nameSubmit'><input type='button' value='Back' id='leaveName'>";
    displayScoreList.id = 'scoreList';
    displayScoreList.innerHTML = "<input type='button' value='X' id='leaveList' style='font-weight: bolder;'>";
    list.id = 'list';
    tableAndTitle.id = "tableAndTitle";
    tableAndTitle.appendChild(title);
    tableAndTitle.appendChild(table);
    tableAndTitle.appendChild(directionButtons);
    displayScoreList.appendChild(list);
    game.appendChild(contentButtons);
    game.appendChild(tableAndTitle);
    game.appendChild(chooseLevelQuery);
    game.appendChild(gameOver);
    game.appendChild(displayScoreList);
}

export{
    table
};