let arr = [7,4,6,24,67,420,42,300]
let large= arr[0];
arr.forEach((e)=>(e>large?(large= e): ""))
console.log(large);