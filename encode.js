// function encode(str){
//     let string= str.split('')
//     let ascii= string.charCodeAt();
//     console.log(ascii);
// }
// encode('HELLO')


let input = 'HELLO'

let spliString= input.split('')

let asciiValue=[];

for(let i=0; i<spliString.length;i++){
    asciiValue.push(spliString[i].charCodeAt())
}

console.log('ascii Values : ',asciiValue);

let binaryCode = []

for (let i=0; i<asciiValue.length; i++){
    binaryCode.push(asciiValue[i].toString(2))
}

console.log('binary Values : ',binaryCode);

let binaryCode8bit= []
for (let i=0; i<binaryCode.length; i++){
    while(binaryCode[i].length<8){
        binaryCode[i]='0'+binaryCode[i]
    }
    binaryCode8bit.push(binaryCode[i])
}

console.log('binary 8 bit Values : ',binaryCode8bit);
let total = binaryCode8bit.join("")
console.log(total);

let binary6bit = []

for (let i=0; i<total.length; i+=6){
    binary6bit.push(total.substring(i,i+6))
}
// console.log(binary6bit);
let bitlength = binary6bit.length
console.log(bitlength);
let count = 0;
while(binary6bit[bitlength -1].length !==6){
    // console.log(binary6bit[bitlength-1]);
    binary6bit[bitlength-1]+='00'
    count++;
}

let numericValues= []
for( let i=0;i< binary6bit.length;i++) {
    numericValues.push(parseInt(binary6bit[i],2))
}
console.log(numericValues);

let base64= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz+/'

let base64final= []
for(let i=0; i<numericValues.length;i++){
    base64final.push(base64[numericValues[i]])
}

console.log(base64final);

while (count !== 0) {
    base64final.push("=")
    count--;
}

console.log(base64final.join(""));
console.log(btoa("HELLO"));