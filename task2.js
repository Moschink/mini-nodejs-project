// No 1
function factorial (n){
    // const n = 5
    let result = 1;
    for (let i = n; i>=1; i--){
    result = result * i 
    }
    return result
}
console.log(factorial(5))

// No 2
function LargestNum(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}
console.log(LargestNum([3, 7, 2, 9, 5]));



// No 3
function Consonants(str) {
    const vowels = 'aeiou';
    let count = 0;
    for (let char of str) {
        if (!vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(Consonants("Hello"));
 
// No 4
function mul(n) {
    for (let i = 1; i <= 12; i++) {
        console.log(n + " x " + i + " = " + (n * i));
    }
}
mul(5);

// No 5

function reverseStr(str, callBack) {
    return callBack(str);
}
function reverSe(num) {
    return num.split('').reverse().join('');
}
const result = reverseStr("Moses", reverSe);
console.log(result); 
