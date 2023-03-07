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
    const buttonLevel = create('div');
    const buttonsContent = create('div');
    const displayScore = create('label');
    const title = create('div');
    const buttonStart = create('button');
    const buttonStop = create('button');
    const buttonReset = create('button');
    const buttonRotate = create('button');
    const buttonLeft = create('button');
    const buttonRight = create('button');
    const buttonDown = create('button');
    const chooseLevelQuery = create('form');
    const endGame = create('form');
    const buttonDisplay = create('div');
    const contentEndButtons = create('div');
    const displayListScore = create('div');
    const tableAndTitle = create('div');
    const list = create('div');
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
    buttonStart.innerHTML = '<b>Start</b>';
    buttonStop.innerHTML = '<b>Stop</b>';
    buttonReset.innerHTML = '<b>Reset</b>';
    buttonRotate.innerHTML = '<b>&#8634;</b>';
    buttonLeft.innerHTML = '<b>&#8592;</b>';
    buttonRight.innerHTML = '<b>&#8594;</b>';
    buttonDown.innerHTML = '<b>&#8595;</b>';
    buttonStart.id = 'startButton';
    buttonStop.id = "stopButton";
    buttonReset.id = 'resetButton';
    buttonRotate.id = 'rotateButton';
    buttonLeft.id = 'leftButton';
    buttonRight.id = 'rightButton';
    buttonDown.id = 'downButton';
    table.id = 'matrix';
    buttonLevel.innerHTML = "<button id='choose'><b>Choose Level</b></button>";
    title.innerHTML = "<h1>T<span class='title'>E</span>TRIS,<br>TH<span class='title'>E</span> GAM<span class='title'>E</span>!</h1>";
    buttonDisplay.innerHTML = "<button id='displayScore'><b>Score</b></button>";
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
    displayScore.innerHTML = "<div id='textScore'></div>";
    displayScore.appendChild(next);
    buttonsContent.id = 'buttons';
    buttonsContent.appendChild(displayScore);
    title.id = 'titleContent';
    contentEndButtons.id = 'endButtons';
    contentEndButtons.appendChild(buttonLevel);
    contentEndButtons.appendChild(buttonDisplay);
    contentEndButtons.appendChild(buttonStart);
    contentEndButtons.appendChild(buttonStop);
    contentEndButtons.appendChild(buttonReset);
    contentEndButtons.appendChild(buttonRotate);
    contentEndButtons.appendChild(buttonLeft);
    contentEndButtons.appendChild(buttonRight);
    contentEndButtons.appendChild(buttonDown);
    buttonsContent.appendChild(contentEndButtons);
    endGame.id = 'endGame';
    endGame.innerHTML = "<h1>New Record!</h1><p>Enter a nickname</p><input type='text' id='name'><br><input type='button' value='Submit' id='nameSubmit'><input type='button' value='Back' id='leaveName'>";
    displayListScore.id = 'listScore';
    displayListScore.innerHTML = "<input type='button' value='X' id='leaveList' style='font-weight: bolder;'>";
    list.id = 'list';
    tableAndTitle.id = "tableAndTitle";
    tableAndTitle.appendChild(title);
    tableAndTitle.appendChild(table);
    displayListScore.appendChild(list);
    game.appendChild(buttonsContent);
    game.appendChild(tableAndTitle);
    game.appendChild(chooseLevelQuery);
    game.appendChild(endGame);
    game.appendChild(displayListScore);
}

export{
    table
};