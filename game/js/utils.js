'use strict';

/**
 * Instantiate a Promise
 * 
 * @param {*} delay 
 * @returns 
 */
const timeOut = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

/**
 * To don't have to write the same code all the time. Same for the following methods
 * 
 * @param {*} num 
 * @returns 
 */
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
    timeOut,
    create,
    createNS,
    aleat
};