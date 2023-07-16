// let str = 'Hello buddy'

// console.log(str.split(" "));

let str = "green hairy fox jumps over the wodden bridge"

function longestword(str){
    let splitnum = str.split(" ")
    let longword= ''
   splitnum.forEach(element => {
        if(element.length> longword.length){
            longword= element
        }
   });
   return longword
}
console.log(longestword(str));