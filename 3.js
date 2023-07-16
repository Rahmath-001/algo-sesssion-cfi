function factors(num){
    let facts=[]
    for (let i = 1; i < num ;i++ ){
        if(num%i==0){
            facts.push(i)
            console.log(i);
        }
    } 
    return (facts.length);
}

factors(3)

function prime(num){
    if(factors(num)>2){
        console.log(" prime");
    }else{
        console.log("not prime");
    }
}
prime()