//es1
function fattoriale(n){
    if(n===0){
        return 1
    }
    
    return n * fattoriale(n-1)
}

//es2
function redundant(str){
    return function(){
        return str
    }
}

const f1 = redundant("Apple")

//es3
function circuitPower(voltage, current) {
	return voltage * current
}

//es4
let arr = [1,2,3,4,5,6,7]

function sevenBoom(arr) {
    let arrString = arr.toString()
	for(let i of arrString){
        for(let j of i){
            if(j == 7){
                return "Boom!"
            }
        }
    }
    return "there is no 7 in the array"
}

//es5
function calcAge(age) {
	return age * 365
}

//es6
function towerHanoi(discs) {
    if (discs == 0){
        return 1
    }
    return 2 * towerHanoi(discs-1) + 1
}

//es7
function formatAscii(str, width) {
    let risutlato = ""
    let cont = 0

    for(let char of str){
        risutlato += char
        cont++

        if(cont == width){
            risutlato += "\n"
            cont = 0
        }
    }
    return risutlato
}

console.log(formatAscii("123456dfsffsaffa78", 3))