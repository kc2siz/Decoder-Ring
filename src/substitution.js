// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    
    let charSet = [{
       name: "a",
       substitution: "0"
   }, {
       name: "b",
       substitution: "1"
   }, {
       name: "c",
       substitution: "2"
   }, {
       name: "d",
       substitution: "3"
   }, {
       name: "e",
       substitution: "4"
   }, {
       name: "f",
       substitution: "5"
   }, {
       name: "g",
       substitution: "6"
   }, {
       name: "h",
       substitution: "7"
   }, {
       name: "i",
       substitution: "8"
   }, {
       name: "j",
       substitution: "9"
   }, {
       name: "k",
       substitution: "10"
   }, {
       name: "l",
       substitution: "11"
   }, {
       name: "m",
       substitution: "12"
   }, {
       name: "n",
       substitution: "13"
   }, {
       name: "o",
       substitution: "14"
   }, {
       name: "p",
       substitution: "15"
   }, {
       name: "q",
       substitution: "16"
   }, {
       name: "r",
       substitution: "17"
   }, {
       name: "s",
       substitution: "18"
   }, {
       name: "t",
       substitution: "19"
   }, {
       name: "u",
       substitution: "20"
   }, {
       name: "v",
       substitution: "21"
   }, {
       name: "w",
       substitution: "22"
   }, {
       name: "x",
       substitution: "23"
   }, {
       name: "y",
       substitution: "24"
   }, {
       name: "z",
       substitution: "25"
   }, {
       name: " ",
       substitution: " "
   },
]; 
   
   input = input.toLowerCase()

   let result = "";
   let input2 = input;
   let input2Arr = input2.split("")
   let inputArr = input.split("")
   let substitutionArr = [];
   let index = 0;
   let charCount = 0;

   if (!alphabet) {
       return false
   }
   if (alphabet.length !== 26) {
       return false
   }

   //this code ensures that there are no duplicate characters in alphabet
   for (let i = 0; i < alphabet.length; i++) {
       for (let j = 1; j < alphabet.length; j++) {
           if (alphabet[i] === alphabet[j]) {
               charCount++;
           }
           if (charCount > 25) {
               return false;
           }
       }
   }

   ///this code uses the alphabet string (and its index) to create substitution values in the charSet array
   for (let i = 0; i < charSet.length; i++) {
       charSet[i].substitution = alphabet[index];
       index++;
       if (charSet[i].name === " ") {
           charSet[i].substitution = " ";
       }
   }
//here the encoding takes place
   if (encode === true) {
       for (let i = 0; i < inputArr.length; i++) {
           for (let j = 0; j < charSet.length; j++) {
               if (inputArr[i] === charSet[j].name) {
                   substitutionArr.push(charSet[j].substitution);
                   result = substitutionArr.join("");
               }
           }
       }
   } 

//here is the decoding
   if (encode === false) {
       for (let i = 0; i < input2Arr.length; i++) {
           for (let j = 0; j < charSet.length; j++) {
               if (charSet[j].substitution === input2Arr[i]) {
                   substitutionArr.push(charSet[j].name);
                   result = substitutionArr.join("");
               }
           }
       }
   }
   return result;
}  

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
