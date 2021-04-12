// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    let alphabet = [
    {
      name: "a",
      coordinates: "11"
    },
    {
      name: "b",
      coordinates: "21"
    },
    {
      name: "c",
      coordinates: "31"
    },
    {
      name: "d",
      coordinates: "41"
    },
    {
      name: "e",
      coordinates: "51"
    },
    {
      name: "f",
      coordinates: "12"
    },
    {
      name: "g",
      coordinates: "22"
    },
    {
      name: "h",
      coordinates: "32"
    },
    {
      name: "i/j",
      iname: "i",
      jname: "j",
      coordinates: "42"
    },
  
    {
      name: "k",
      coordinates: "52"
    },
    {
      name: "l",
      coordinates: "13"
    },
    {
      name: "m",
      coordinates: "23"
    },
    {
      name: "n",
      coordinates: "33"
    },
    {
      name: "o",
      coordinates: "43"
    },
    {
      name: "p",
      coordinates: "53"
    },
    {
      name: "q",
      coordinates: "14"
    },
    {
      name: "r",
      coordinates: "24"
    },
    {
      name: "s",
      coordinates: "34"
    },
    {
      name: "t",
      coordinates: "44"
    },
    {
      name: "u",
      coordinates: "54"
    },
    {
      name: "v",
      coordinates: "15"
    },
    {
      name: "w",
      coordinates: "25"
    },
    {
      name: "x",
      coordinates: "35"
    },
    {
      name: "y",
      coordinates: "45"
    },
    {
      name: "z",
      coordinates: "55"
    },
    {
      name: " ",
      sname: " ",
      coordinates: "60"
    }
    
    ];
  
  //ENCODING >>
      input = input.toLowerCase();
      let encodeArray = [];
      let decodeArray = [];
      let result = "";
      let input2 = "";
      let blankSpaces = 0;
  
  //the code below takes you from input string to encoded output string, with special attention to 'j' and 'i'
      for (let i = 0; i < input.length; i++) {
          for (let j = 0; j < alphabet.length; j++) {
              if (input[i] === alphabet[j].iname) {
                  encodeArray.push(alphabet[j].coordinates);
              }
              if (input[i] === alphabet[j].jname) {
                  encodeArray.push(alphabet[j].coordinates);
              }
              if (input[i] === alphabet[j].sname) {
                  encodeArray.push(alphabet[j].sname);
              } else
              if (input[i] !== "i" && input[i] !== "j" && input[i] !== " ") {
                  if (input[i] === alphabet[j].name) {
                      encodeArray.push(alphabet[j].coordinates);
                      result = encodeArray.join("");
                  }
              }
          }
      } 
  
  //DECODING >>
  
      if (encode === false) {
  
  //this ensures that the encoded input string has even number of characters (exclusing spaces)
          for (let i = 0; i < input.length; i++) {
              if (input[i] === " ") {
                  blankSpaces++;
              }
          }
          if ((input.length - blankSpaces) % 2 !== 0) {
              return false;
          }
        
  //this code prepares the encoded input string for decoding and ensures that blank spaces will be preserved
          input2 = input;
          input2 = input2.replace(/ /g, "60");
          input2 = input2.split(/(?=(?:..)*$)/);
      }
  
  //this code decodes the tidied up encoded input string (input2)
      for (let i = 0; i < input2.length; i++) {
          for (let j = 0; j < alphabet.length; j++) {
  
              if (input2[i] === alphabet[j].coordinates) {
                  decodeArray.push(alphabet[j].name);
                  result = decodeArray.join("");
              }
          }
      }
      return result;
    }

 
  return {
    polybius,
  };

  })();

module.exports = { polybius: polybiusModule.polybius };
