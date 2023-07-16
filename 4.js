// function preappend(nums){
//     if (nums.length<2){
//         console.log(`${0}${nums}`);
//     }
// }
// preappend(23)


let arr2 = [5, 17, -9, -30, 99, 3]

function preappend(arr){
   let newArr= [];
   for(let i=0; i<arr.length;i++){
    if((arr[i]>=0) && (arr[i]<10)){
        newArr.push(`0${arr[i]}`)
    }
    else if((arr[i]<0) && (arr[i]>=-9)){
        newArr.push(`-0${arr[i]*-1}`)
    }
    else newArr.push(arr[i])
   }
   console.log(newArr);
}
preappend(arr2)