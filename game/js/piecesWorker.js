import{
    byId,
    byClass
} from './utils.js';

//Fornece os dados a serem processados no workPiece()
function toWork(num, element){
    let nameArray = [
        num.toString(),
        (num + element[0]).toString(),
        (num + element[1]).toString(),
        (num + element[2]).toString()
    ];
    workPiece(nameArray, element[3]);
}

//O background-color dos elementos td da classe blocs transita progressivamente do cinzento para a cor
//do tetraminó. No entanto, os elementos que ficam "para trás" devem regressar à cor original
function workPiece(nameArray, color){
    for(let i = 0; i < byClass('blocs').length; i++){
        byClass('blocs')[i].style.fill = 'lightgrey';
    }
    for(let i = 0; i < 4; i++){
        byId(nameArray[i]).style.fill = color;
    }
}

export{
    toWork
};