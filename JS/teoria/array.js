let numeri = [40,30,20,10];

//funzione map() ---> applica la regola a tutti i elementi del array
let map = numeri.map((num) => num*2)
console.log("Funzione map(): ",map)

//funzione filter() --->filtra l'array
let filter = numeri.filter((num) => num>=10 && num<=30)
console.log("Funzione filter(): ",filter)

//funzione reduce() ---> riduce l'array in un solo valore
let reduce = numeri.reduce( (current, accumulator) => {return accumulator + current}, 0 )
console.log("Funzione reduce(): ",reduce)

//funzione find()/findIndex() ---> trova solo il primo elemento
let find = numeri.find((num) => num>20 && num<=40)
console.log("Funzione find(): ",find)

let findIndex = numeri.findIndex((num) => num>20 && num<=40)
console.log("Funzione findIndex(): ",findIndex)

//funzione some()/every() ---> controlli booleani

let some = numeri.some((num) => num=40)
console.log("Funzione some(): ",some)

let every = numeri.every((num) => num>20 && num<=40)
console.log("Funzione every(): ",every)

//funzione forEach() ---> non assegna un valore al array forEach

console.log("Funzione forEach(): ")
let forEach = numeri.forEach((num) => console.log(num))

console.log(numeri)
