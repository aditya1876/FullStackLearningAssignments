/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {

  //create a dictionary to store the characters and their counts for each string. Then compare the maps
  let str1map = new Map();
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] == " ") {
      //Do nothing. ignore the sapces
    }
    else {
      if (str1map.has(str1[i].toLowerCase())) {
        str1map[str1[i]] = str1map.get(str1[i]) + 1;
      }
      else {
        str1map.set(str1[i].toLowerCase(), 1);
      }
    }
  }

  let str2map = new Map();
  for (let i = 0; i < str2.length; i++) {
    if (str2[i] == " ") {
      //Do nothing. ignore the sapces
    }
    else {
      if (str2map.has(str2[i].toLowerCase())) {
        str2map[str2[i]] = str2map.get(str2[i]) + 1;
      }
      else {
        str2map.set(str2[i].toLowerCase(), 1);
      }
    }
  }

  //Compare 2 maps
  let test;
  if (str1map.size != str2map.size) {
    return false;
  }

  for (let [key, val] of str1map) {
    test = str2map.get(key);

    if (test != val || test == undefined & !str2map.has(key)) {
      return false;
    }
  }

  return true;
}

module.exports = isAnagram;
