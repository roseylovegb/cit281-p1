/*
    CIT 281 Project 1
    Name: Rose Gbaanador
*/


function RandomString() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const randomNumber = getRandomInteger(5, 26); 
    var getString = '';
  
    for (let i = 0; i < randomNumber; i++) {
      const index = getRandomInteger(0, alphabet.length);
      const randomLetter = alphabet[index];
      getString += randomLetter;
    }
  
    return getString;
  }
  
  function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  console.log(RandomString());













  