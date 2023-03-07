'use strict';

//Instancia uma Promise
const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

//Como se usa mais do que uma vez, não tem de se estar sempre a escrever. O mesmo para os métodos seguintes
function aleat(num){
    return Math.floor(Math.random() * num);
}

function byClass(element){
    return document.getElementsByClassName(element);
}

function byId(element){
    return document.getElementById(element);
}

function byTag(element){
    return document.getElementsByTagName(element);
}

function create(element){
    return document.createElement(element);
}

function createNS(element){
    return document.createElementNS("http://www.w3.org/2000/svg", element);
}

export{
    byId,
    byClass,
    byTag,
    sleepNow,
    create,
    createNS,
    aleat
};