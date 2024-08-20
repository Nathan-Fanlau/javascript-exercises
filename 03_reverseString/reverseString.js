const reverseString = function(str) {
    let finalStr = "";
    for(let i = str.length - 1; i > -1; i--){
        finalStr = finalStr.concat(str[i]);
    }
    return finalStr;
};

// Do not edit below this line
module.exports = reverseString;
