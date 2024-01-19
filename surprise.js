const matrix = [
    [1, 2, 3],
    [4, 5, 6]
]

const res = (arr) => {

    let row = arr.length;
    let col = arr[0].length;
    let transp = []

    for(let j = 0; j < col; j++){
        transp[j] = [];
        for(let i = 0; i < row; i++){
            transp[j][i] = arr[i][j]
        } 
    }

    return transp;
}

// console.log(res(matrix))

const num = [ 5, 10, 1, 6, 99, 22, 3, 2, 51, 98]

const sortedArray = (arr) => {
    return arr.sort((a,b) => a - b);
}

console.log(sortedArray(num))