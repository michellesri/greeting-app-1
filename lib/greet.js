const emoji = require('node-emoji');

//test to see if coffee emoji exists
// console.log(emoji.get('coffee'));

module.exports = function greet(name, myEmoji){
  let sentence = 'Hello, my name is ' + name;
  if(!name){
    name = 'insert cool name';
  }
  //check if emoji exists and if it does, add it to sentence
  if(myEmoji){
    sentence += emoji.get(myEmoji);
    return sentence;
  }
  return 'Hello, my name is ' + name;
};
