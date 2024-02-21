function scramble(str1, str2) {
  const charCount = {};

  for (const char of str1) {
    charCount[char] = (charCount[char] || 0) + 1;
    console.log(charCount[char]);
  }

  for (const char of str2) {
    if (!charCount[char]) {
      return false;
    } else {
      charCount[char]--;
    }
  }
  return true;
}




/*
params: string
return: boolean
example: scramble('cedewaraaossoqqyt', 'codewars') ==> True
         scramble('katas', 'steak') ==> False

concerns: guard against multiple letters in the string we are testing against

explain: create an empty object to update the empty object with str1, then check if the contents of str2 contain whats 
in the object and if not then return false, then return else return true
positive: tanner is my partner so im no longer afraid
translate: 😘 muah
*/
