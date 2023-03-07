//Recebe os dados e converte-os na forma de um objeto passado ao método seguinte
function createList(text) {
    let name = text.split("\n")[0];
    let score = text.split("\n")[2];
    let lines = text.split("\n")[4];
    let level = text.split("\n")[6];
    
    const newScore = {
        name,
        score,
        lines,
        level
    };
    setLocalStorage(newScore);
}

//Permite o acesso aos dados armazenados no localStorage
function scoreList() {
    if (localStorage['scored']) {
        return JSON.parse(localStorage['scored']);
    }
}

//Armazena os dados recebidos pelo createList. Armazena um conjunto de objetos que contém os dados do resultado
//de uma sessão do Tetris. Armazena no máximo até 10 resultados. Remove do array o primeiro resultado, remove
//os dados no localStorage e por fim substitui estes pelo novo array
function setLocalStorage(text){
    let score = scoreList();
    
    if(score === undefined){
        score = [];
    }
    score.push(text);
    
    if(typeof(Storage) !== "undefined"){
        if(score.length === 11){
            score.shift();
            localStorage.removeItem('scored', JSON.stringify(score));
        }
        localStorage.setItem('scored', JSON.stringify(score));
    }else{
        aleat("ERROR");
    }
}

export{
    createList,
    scoreList
};