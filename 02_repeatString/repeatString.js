const repeatString = function(str, num) {
    if(num < 0) return "ERROR";
    
    let finalStr = "";
    for(let i = 0; i < num; i++){
        finalStr = finalStr.concat(str);
    }
    return finalStr;
};

// Do not edit below this line
module.exports = repeatString;
