//Make a function called prime factor
function prime(num){
result = []  
for(let i = 2; i < num; i ++){

  
    while (num %i===0){
        result.push(i)
        num = num/i
        
        
    }
}

   

    if (num > 1) {
        result.push(num)


    }
     return result
    



}
console.log ("1", prime(1))
console.log ("2", prime(2))
console.log ("3", prime(3))
console.log ("5", prime(5))
console.log ("4", prime(4))
console.log ("6", prime(6))
console.log ("10", prime(10))
console.log ("8", prime(8))
console.log ("16", prime(16))
console.log ("9", prime(9))
console.log ("25", prime(25))
console.log ("7", prime(7))
console.log ("125", prime(125))
console.log ("500", prime(500))



//return an output of prime factors
//Make sure factors are in numerical order