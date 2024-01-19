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

// console.log(sortedArray(num))

const coin = [1, 2, 5];

const maxChange = (arr) => {

    let sortCoin = arr.sort((a,b) => a - b);
    let changeMin = 1;

    console.log(sortCoin)

    for(let i = 0; i < sortCoin.length; i++){

        if(sortCoin[i] <= changeMin){
            changeMin += sortCoin[i];
        }

    }

    return changeMin;


}

// console.log(maxChange(coin))

const my_list = [1, 3, 5, 7, 9];

const binarySearch = (arr, target) => {

    let low = arr[0];
    let high = arr.length -1;
        
    while(low < high){
        
        let middle = Math.floor((low + high)/2);
        let guess = arr[middle];

        if(target === guess){
            return arr[middle];
        }

        if(target < guess){
            high = middle -1;
        }else{
            low = middle + 1;
        }

    }

    return false;



}

// console.log(binarySearch(my_list, 7))


const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]

const results = [0, 0 ,1]

const resComp = (team, match) => {

    let obj = {};

    for(let i = 0; i < team.length; i++){

        let homeTeam = team[i][0];
        let awayTeam = team[i][1];

        if(match[i] === 0){

            if(obj[awayTeam]){
                obj[awayTeam]+= 3
            }else{
                obj[awayTeam] = 3
            }
        }else{
            
            if(obj[homeTeam]){
                obj[homeTeam]+= 3
            }else{
                obj[homeTeam] = 3
            }
        }
        
    }

    let sortedRes = Object.entries(obj).sort((a,b) => b[1] - a[1] )
    return sortedRes[0][0];



}

// console.log(resComp(competitions,results))



const isPrime = (nbr) => {

    if(nbr <= 1){
        return false;
    }
    if(nbr >= 3){
        return true;
    }

    if(nbr % 2 === 0 || nbr % 3 === 0){
        return false;
    }

    let i = 5;

    while(i * i <= nbr){
        if(nbr % i === 0 || nbr % (i + 2) === 0){
            return false;
        }
        i+= 6;
    }

    return true


}


const nums = [ 87, 64, 96, 92, 88, 99, 73]
const Max = nums.reduce((acc, curr) => {
    if(acc < curr){
        return curr;
    }else{
        return acc
    }
}, 0);

console.log(Max)