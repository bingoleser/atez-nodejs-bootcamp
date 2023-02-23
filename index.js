


function findSumOfMultipleArgs(...arrayOfNumberOrString) {
    //recreate an array with number with filter function
    const arrayWithoutString=arrayOfNumberOrString.filter((ele)=> typeof ele==="number")

    // rudece function is return sum of all elements in array 
    const summOfArray = arrayWithoutString.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        );

    return summOfArray
    
}

// call function with diff type of args
console.log(findSumOfMultipleArgs(1,2,"text1",3,4,"text2",undefined))
