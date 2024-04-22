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



let number = 12;
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
if(isPrime == false){
    console.log(`${number} is a prime number`);
}

let numberList = [0, 2 ,1 , 12 , 8, 5 , 9 ,3 ,2 ,13 ,15];
let maxNumber = numberList[0];
for(let i = 0 ; i < numberList.length; i++){
  if (numberList[i] > maxNumber) {
    maxNumber = numberList[i]
  }
}
console.log(maxNumber);

let palindrome = 'oppo'
let reversePalindrome = ''
for (let i = palindrome.length-1; i >= 0; i--) {
        reversePalindrome += palindrome
        break
}
console.log(reversePalindrome);
if (palindrome == reversePalindrome) {
    console.log(`This letter ${palindrome} is palindrome`);
}

let n1 = 0 ; n2 = 1; 
let nextTerm;
for (let i = 0; i <= 20; i++) {
  console.log(n1);//0 // 1
  nextTerm = n1 + n2;//0+1 = 1 // 1 + 0 = 1
  n1 = n2 // 0 = 1 
  n2 = nextTerm // 0 = 0
}
console.log(nextTerm);


let vowelsCounting = 'Hello how are you ? i am fine'.toLowerCase();
let vowels = ['a' ,'e','i','o','u'];
let count = 0
for (let i = 0; i <= vowelsCounting.length; i++) {
  for (let j = 0; j <= vowels.length; j++) {
    if (vowelsCounting[i] == vowels[i]) {
     count++
    }
    
  }
  
}
console.log(count);




let factorialNumber = 5;
let newnum = 1
for (let i = 1; i  <= factorialNumber; i++) {
  newnum *= i
  
}

console.log(newnum);



let listOfNumbers = '12345'
let convert = listOfNumbers.split('')
let add = 0
console.log(convert);
for (let i = 0; i < convert.length; i++) {
   add += parseInt(convert[i])
  
}
console.log(add);
// console.log(convert);
let reverseInteger = convert.reverse('')
console.log(reverseInteger);