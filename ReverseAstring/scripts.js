function reverseString(str){
    let arrStr = [];
    let reverseStr;
    for(let i = str.length - 1 ; i >= 0 ; i--){
        reverseStr = arrStr.push(str[i]);
    }

    return reverseStr;
}

console.log(reverseString('hello'));