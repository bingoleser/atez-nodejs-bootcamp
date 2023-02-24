function faktoriyel (agr1) {
    let a=1
    //check arg1 is an integer and bigger than zero
      if (Number.isInteger(agr1) && agr1>0) {
        for (let i = 1; i <= agr1; i++) {
            a =i*a   
        }
        return a
    }
    else{
        console.log(`please enter  a number  ${agr1} is not a number`)
    }
    
}
console.log( faktoriyel(4))
console.log( faktoriyel("te"))
