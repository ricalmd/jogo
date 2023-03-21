//Conjunto de objetos que correspondem a coordenadas que descrevem a forma de cada elemento e como este se 
//deve comportar
const Piece = { 
    elementIH : {
        arrayElement : [
            1,
            2,
            3,
            'aqua'
        ],
        limit : [0, 1, 2, 3],
        leftArray : [-1],
        auxLeft : 0,
        rightArray : [4],
        auxRight : 4,
        rotation : [-9, 1, 11, 21, 0, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 7,
        number : 0,
        path : [[0, 0], [15, 0], [30, 0], [45, 0]]
    },

    elementIV : {
        arrayElement : [
            10,
            20,
            30,
            'aqua'
        ],
        limit : [30],
        leftArray : [-1, 9, 19, 29],
        auxLeft : 0,
        rightArray : [1, 11, 21, 31],
        auxRight : 1,
        rotation : [9, 10, 11, 12, 0, 0, 0.1, 0.1, 2, 1, 0],
        random : 0,
        number : 7,
        path : []
    },

    elementJHD : {
        arrayElement : [
            1,
            2,
            12,
            'blue'
        ],
        limit : [0, 1, 12],
        leftArray : [-1, 11],
        auxLeft : 0,
        rightArray : [3, 13],
        auxRight : 3,
        rotation : [-9, 1, 10, 11, 0, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 8,
        number : 1,
        path : [[0, 0], [15, 0], [30, 0], [30, 15]]
    },

    elementJHU : {
        arrayElement : [
            10,
            11,
            12,
            'blue'
        ],
        limit : [10, 11, 12],
        leftArray : [-1, 9],
        auxLeft : 0,
        rightArray : [1, 13],
        auxRight : 13,
        rotation : [1, 2, 11, 21, 0, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 10,
        number : 9,
        path : []
    },

    elementJVE : {
        arrayElement : [
            1,
            10,
            20,
            'blue'
        ],
        limit : [1, 20],
        leftArray : [-1, 9, 19],
        auxLeft : 0,
        rightArray : [2, 11, 21],
        auxRight : 2,
        rotation : [9, 10, 11, 21, 0, 0, 0.1, 0.1, 0, 0, 0],
        random : 1,
        number : 10,
        path : []
    },

    elementJVW : {
        arrayElement : [
            10,
            19,
            20,
            'blue'
        ],
        limit : [19, 20],
        leftArray : [-1, 9, 18],
        auxLeft : 19,
        rightArray : [1, 11, 21],
        auxRight : 1,
        rotation : [-1, 9, 10, 11, -1, 0.1, 0.1, 0.1, 1, 0, 0],
        random : 9,
        number : 8,
        path : []
    },

    elementLHD : {
        arrayElement : [
            1,
            2,
            10,
            'orange'
        ],
        limit : [1, 2, 10],
        leftArray : [-1, 9],
        auxLeft : 0,
        rightArray : [3, 11],
        auxRight : 3,
        rotation : [-10, -9, 1, 11, 0, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 11,
        number : 2,
        path : [[0, 0], [0, 15], [15, 0], [30, 0]]
    },

    elementLHU : {
        arrayElement : [
            8,
            9,
            10,
            'orange'
        ],
        limit : [8, 9, 10],
        leftArray : [-1, 7],
        auxLeft : 8,
        rightArray : [1, 11],
        auxRight : 1,
        rotation : [-1, 9, 19, 20, -2, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 13,
        number : 12,
        path : []
    },

    elementLVE : {
        arrayElement : [
            10,
            20,
            21,
            'orange'
        ],
        limit : [20, 21],
        leftArray : [-1, 9, 19],
        auxLeft : 0,
        rightArray : [1, 11, 22],
        auxRight : 22,
        rotation : [9, 10, 11, 19, 0, 0, 0.1, 0.1, 0, 0, 0],
        random : 2,
        number : 13,
        path : []
    },

    elementLVW : {
        arrayElement : [
            1,
            11,
            21,
            'orange'
        ],
        limit : [0, 21],
        leftArray : [-1, 10, 19],
        auxLeft : 0,
        rightArray : [2, 12, 22],
        auxRight : 2,
        rotation : [2, 10, 11, 12, 0, 0.1, 0.1, 0.1, 2, 0, 0],
        random : 12,
        number : 11,
        path : []
    },

    elementO : {
        arrayElement : [
            1,
            10,
            11,
            'yellow'
        ],
        limit : [10, 11],
        leftArray : [-1, 9],
        auxLeft : 0,
        rightArray : [2, 12],
        auxRight : 2,
        rotation : [],
        random : 3,
        number : 3,
        path : [[0, 0], [0, 15], [15, 0], [15, 15]]
    },

    elementSH : {
        arrayElement : [
            1,
            9,
            10,
            'yellowgreen'
        ],
        limit : [1, 9, 10],
        leftArray : [-1, 8],
        auxLeft : 9,
        rightArray : [2, 11],
        auxRight : 2,
        rotation : [-11, -1, 0, 10, -1, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 14,
        number : 4,
        path : [[0, 15], [15, 0], [15, 15], [30, 0]]
    },

    elementSV : {
        arrayElement : [
            10,
            11,
            21,
            'yellowgreen'
        ],
        limit : [10, 21],
        leftArray : [-1, 9, 20],
        auxLeft : 0,
        rightArray : [1, 12, 22],
        auxRight : 12,
        rotation : [11, 12, 20, 21, 0, 0.1, 0.1, 0.1, 2, 0, 0],
        random : 4,
        number : 14,
        path : []
    },

    elementTHD : {
        arrayElement : [
            1,
            2,
            11,
            'purple'
        ],
        limit : [0, 2, 11],
        leftArray : [-1, 10],
        auxLeft : 0,
        rightArray : [3, 12],
        auxRight : 3,
        rotation : [-9, 0, 1, 11, 0, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 15,
        number : 5,
        path : [[0, 0], [15, 0], [15, 15], [30, 0]]
    },

    elementTHU : {
        arrayElement : [
            9,
            10,
            11,
            'purple'
        ],
        limit : [9, 10, 11],
        leftArray : [-1, 8],
        auxLeft : 9,
        rightArray : [1, 12],
        auxRight : 12,
        rotation : [0, 10, 11, 20, -1, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 17,
        number : 16,
        path : []
    },

    elementTVE : {
        arrayElement : [
            10,
            11,
            20,
            'purple'
        ],
        limit : [11, 20],
        leftArray : [-1, 9, 19],
        auxLeft : 0,
        rightArray : [1, 12, 21],
        auxRight : 12,
        rotation : [9, 10, 11, 20, 0, 0, 0.1, 0.1, 0, 0, 0],
        random : 5,
        number : 17,
        path : []
    },

    elementTVW : {
        arrayElement : [
            9,
            10,
            20,
            'purple'
        ],
        limit : [9, 20],
        leftArray : [-1, 8, 19],
        auxLeft : 9,
        rightArray : [1, 11, 21],
        auxRight : 1,
        rotation : [0, 9, 10, 11, -1, 0.1, 0.1, 0.1, 1, 0, 0],
        random : 16,
        number : 15,
        path : []
    },

    elementZH : {
        arrayElement : [
            1,
            11,
            12,
            'red'
        ],
        limit : [0, 11, 12],
        leftArray : [-1, 10],
        auxLeft : 0,
        rightArray : [2, 13],
        auxRight : 13,
        rotation : [-8, 1, 2, 11, 0, 0.1, 0.1, 0.1, 0, 0, 0],
        random : 18,
        number : 6,
        path : [[0, 0], [15, 0], [15, 15], [30, 15]]
    },

    elementZV : {
        arrayElement : [
            9,
            10,
            19,
            'red'
        ],
        limit : [10, 19],
        leftArray : [-1, 8, 18],
        auxLeft : 9,
        rightArray : [1, 11, 20],
        auxRight : 1,
        rotation : [8, 9, 19, 20, -1, -1, 0.1, 0.1, 0, 0, 0],
        random : 6,
        number : 18,
        path : []
    }
};

export{
    Piece
};