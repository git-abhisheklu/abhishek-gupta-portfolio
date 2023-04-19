//typewriter effect using JS
const dynamicContent=document.getElementById("dynamic-text");
console.log(dynamicContent);
const phrases=["Frontend developer...", "Student...", "Tech-enthusiast..."];
let writeTiming=400;
let deleteTiming=100;
let phraseIndex=0;
let letterIndex = 0;
function printletters(phrase){
    if(letterIndex == phrase.length){
       clearletters(); 
    }
    else if( letterIndex < phrase.length) {
        dynamicContent.textContent += phrase.charAt(letterIndex);
        letterIndex+= 1;
        setTimeout( function() {
            printletters(phrase)
        },writeTiming )
    }
} 
function clearletters(){
    if(letterIndex== -1){
        phraseIndex = (phraseIndex+1) % phrases.length;
        letterIndex=0;
        printletters(phrases[phraseIndex]);

    }
    else if (letterIndex > -1){
        updatedPhrase= "";
        for(let index=0; index<letterIndex; index++){
            updatedPhrase+=phrases[phraseIndex].charAt(index);
        }
        dynamicContent.textContent=updatedPhrase;
        letterIndex-=1;
        setTimeout(clearletters,deleteTiming);
    }

}
printletters(phrases[phraseIndex]);

// new feature 
 
