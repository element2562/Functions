//The walrus danced through the trees in the light of the moon
let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"]
let nextSentence = ["My","name","is","jacob","and","I","like","pop","tarts"]
let addExcitement = (madeUp, characterInput="!") => {
    let addWords = "";
    let char = characterInput;
    for (let i = 1; i <= madeUp.length; i++) {
        if ((i % 3) === 0 && i !== 0) {
            addWords += `${madeUp[i-1]}${char} `;
            char += `${characterInput}`;
        }
       else {
           addWords += `${madeUp[i-1]} `;
       }
        
       
       
        
        console.log(addWords);
       
    }
   
}
addExcitement(sentence);
addExcitement(sentence, "?");
addExcitement(nextSentence, "@");