//bekar tareeqa kuch na kuch karke hogya tha ye 
// let word1= "eat"
// let word2= "tea"
// let sortedWord1= word1.split('').sort().join('')
// let sortedWord2= word2.split('').sort().join('')

// for(var i=0; i<sortedWord1.length;i++){

// }
// if(sortedWord1[i]===sortedWord2[i]){
//     console.log("the word is anagram");
    
// }else{
//     console.log("the word is not anagram")
// }

//acha wala tareeqa
// let word1= "eat"
// let word2= "tea"
// let sortedWord1= word1.split('').sort().join('')
// let sortedWord2= word2.split('').sort().join('')


// if(sortedWord1.length!==sortedWord2.length){
// console.log("the lenght of the word is not same so it cannot be anagram");
// }else if(sortedWord1===sortedWord2){
//     console.log("the word is anagram")
// }else{
//     console.log('the word is not anagram ')
// }


// let str="the silent cat decided to listen"
// let newSen=""
// let newSortedSen=""
// let result=""
// for(let i =0; i<=str.length;i++){
//     let char=str[i] || ""
//     if(char===" "|| char==="," || char==="."|| char===""){
//         newSortedSen += newSen.split('').sort('').join('')
//     }else{
//         newSen+=char
//     }
    
    
// }
// let str="the silent cat decided to listen"
// for(let i =0 ; i<=str.length;i++){
//     let char= str[i]
//     let sortedChar = char.split('').sort().join('')
//     console.log(sortedChar);
// }
let str = "the silent cat decided to listen";
let words = str.split(" "); 
let sortedSen =""

for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let sortedWord = word.split('').sort().join(''); 
    sortedSen +=sortedWord 
    if (i !== words.length - 1) {
        sortedSen += " "; 
    }
}
console.log(sortedSen)

for(let j=0; j< sortedSen.length ; j++){
    let char=sortedSen[j]
    let newSen
    console.log(char);
}

