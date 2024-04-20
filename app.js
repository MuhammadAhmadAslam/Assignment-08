let arr_number = [0, 2 ,1 , 12 , 8, 5 , 9 ,3 ,2 ,13 ,15]

let even_arr = []
for (let i = 0; i < arr_number.length; i++) {
    if(i % 2 == 0){
      even_arr.push(`${i}`)
    }
    
}

console.log(even_arr);


let text = 'Hello'
let reversedStr = "";
for (let i = text.length - 1; i >= 0; i--) {
  reversedStr += text[i];
}
console.log(reversedStr); 



let number = '10'
let isPrime = true
if(number <= 1){
    console.log('not a prime number');
}else{
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) {
          isPrime = false;
          break;
        }
}
}
console.log(isPrime);

