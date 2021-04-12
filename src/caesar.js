// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
  
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', "1", "2",    "3", "4", "5", "6", "7", "8", "9", "0", " ", "!", "."];
   
     if (shift === 0 || shift < -25 || shift > 25) {
         return false;
     }
     if (!shift) {
         return false;
     }
     if (encode === false) {
         shift = shift * -1
     }
 
     input = input.toLowerCase();
 
 
     let shiftedInputIndex = [];
     let inputIndex = [];
     let codedArray = [];
     let codedMsg = [];
 
     //this array (inputIndex) indexes the input string against the alphabet array
     for (let i = 0; i < input.length; i++) {
         inputIndex.push(alphabet.indexOf(input[i]));
         //   console.log(inputIndex)
     }
 
     // this array (shiftedInputIndex) shifts the inputIndex for letters, but not for other types
     for (let i = 0; i < inputIndex.length; i++) {
         if (inputIndex[i] < 26) {
             shiftedInputIndex.push(inputIndex[i] + shift)
         }
         if (inputIndex[i] > 25) {
             (shiftedInputIndex.push(inputIndex[i]))
         }
     }
 
     //this ensures that letters (and only letters) wrap around the alphabet as shifts are implemented
     for (let j = 0; j < shiftedInputIndex.length; j++) {
         if (shiftedInputIndex[j] - shift < 26 && shiftedInputIndex[j] > 25) {
             shiftedInputIndex[j] = shiftedInputIndex[j] - 26
         }
         if (shiftedInputIndex[j] - shift >= 0 && shiftedInputIndex[j] < 0) {
             shiftedInputIndex[j] = shiftedInputIndex[j] + 26
         }
     }
 
  //this code transforms the shiftedInputIndex into the decoded output string
     for (let i = 0; i < shiftedInputIndex.length; i++) {
         codedArray.push(alphabet[shiftedInputIndex[i]]);
         codedMsg = codedArray.join('');
     }
     return codedMsg
 
 } 
  

  return {
    caesar,
  };

})();

module.exports = { caesar: caesarModule.caesar };
