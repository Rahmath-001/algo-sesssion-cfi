function armstrong(num){
    let numArr = num.toString().split("")
    console.log(numArr);
    let digits= numArr.length;
    let sum =0;

    for(let i=0; i<digits;i++){
        sum= sum + (numArr[i]**digits)
    }
    if(sum == num) console.log("it is armstrong")
    else console.log("not armstrong");
}


armstrong(1534)