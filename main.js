function doubleAll(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    out.push(array[i] * 2);
  }
  return out;
}

function absoluteValues(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    out.push(Math.abs(array[i]));
  }
  return out;
}

function yelledGreetings(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    out.push(array[i] + '!');
  }
  return out;
}

function changeToInitials(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    out.push(initials(array[i]));    
  }
  return out;
}

function initials(str) {
  // Initialize vars
  let i;
  let output = "";
  let wasSpace = 1;

  // Go through the full name and find first chars of each name
  for(i = 0; i < str.length; i++) {
    // Eat white space
    if(str[i] == ' ') {
      wasSpace = 1;
      continue;
    }

    // Encountering text after a space
    if(wasSpace) { // Only process letters right after a space
      wasSpace = 0; // Eat the rest of the name upon next iterations
      output += str[i].toUpperCase(); // Append to output
    }
  }
  return output;
}

function doubleOdd(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    if(Math.floor(array[i] % 2) !== 0) {
      out.push(array[i] * 2);
    } else {
      out.push(array[i]);
    }        
  }
  return out;
}

function upperCaseFirstLetters(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    out.push(titleCase(array[i]));        
  }
  return out;
}

function titleCase(string) {
  let sentence = string.toLowerCase().split(" ");
  for(let i = 0; i < sentence.length; i++) {
    sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
  }
  return sentence.join(" ");
}

function add1ToLeft(array) {
  const out = [];
  for(let i = 0; i < array.length; i++) {
    let sign = array[i] / Math.abs(array[i]);
    out.push(Number('1' + Math.abs(array[i])) * sign);
  }
  return out;
}

module.exports = {
  doubleAll,
  absoluteValues,
  yelledGreetings,
  changeToInitials,
  doubleOdd,
  upperCaseFirstLetters,
  add1ToLeft,
}