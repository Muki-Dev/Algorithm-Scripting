
function findLongestWordLength(str) {
    const strSplit = str.split(' ');
    let maxLength = 0;
    for(let i = 0 ; i < strSplit.length ; i++){
      if(strSplit[i].length > maxLength)
        maxLength = strSplit[i].length;
    }
    return maxLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");