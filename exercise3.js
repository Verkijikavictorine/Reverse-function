//declare a funtion
//loop through the word
//get the letters of the word starting from the word.length
//and push them into a variable



function reverseWord(word){
    let stack=[]
    for (let i = word.length; i >= 0; i--) {
        let element = word[i];
        stack.push(element)
       // console.log(element)
    }
    return stack;
}

let word="clear"
let result=reverseWord(word)
console.log(result)