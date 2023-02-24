

function multiplication (...args) {
    let result=1
    args.forEach((ele)=>{
        if (typeof ele==="number") {
        result=result*ele   
        }
        else{
            console.log(`there is NaN in args ----> ${ele}` )
        }
    })
    return result
}
console.log( multiplication(-4,1,6,"abc",{}))
