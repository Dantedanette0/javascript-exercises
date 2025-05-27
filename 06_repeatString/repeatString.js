const repeatString = function(s , n) {

    word = ""

    if (n < 0){
        return "ERROR"
    }

    for(let i = 0; i < n;i++){
        word += s
    }
    return word
};

// Do not edit below this line
module.exports = repeatString;
