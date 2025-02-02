exports.reverse = (value) => {
    // Check if argument is valid
    if(!value || typeof value !== 'string') return 'pass a valid argument';

    let finalValue = '';
    // Loop through word or statement from the end and append to finalValue
    for(let i = value.length - 1; i >= 0; i-- ) {
        finalValue = finalValue + value[i];
    }
    return finalValue;
}

exports.isPalindrome = (value) => {
    // Check if argument is valid
    if(!value || typeof value !== 'string') return 'pass a valid argument';

    // reverse the value
    let backwardValue = exports.reverse(value);
    // check if reversed value is same as initial value
    return (backwardValue.toLowerCase() === value.toLowerCase());
}
exports.wordCount = (value) => {
    if(!value || typeof value !== 'string') return 'pass a valid argument';
    return value.split(' ').length;
}    
exports.characterFrequency = (value) => {
    if(!value || typeof value !== 'string') return 'pass a valid argument';

    let charObj = {};
    // loop through each character in the value
    for(let item in value) {
        // check if the character property exist in charObj object
        let exist = Object.keys(charObj).includes(value[item])
        if(exist) {
            // increase by 1
            charObj[value[item]] = ++charObj[value[item]];
        } else{
            // initialize to 1
            charObj[value[item]] = 1;
        }
    }
    
    return charObj;
}
exports.toTitleCase = (value) => {
    // Words not to capitalize (articles, conjuctions)
    let notCapitalise = ["and", "as", "but", "for", "if", "nor", "or", "so", "yet", "as", "at", "by", "in", "of", "off", "on", "per", "via", "to", "up", "a", "an", "the"];

    if(!value || typeof value !== 'string') return 'pass a valid argument';

    value = value.split(' ');
    let title = [];
    for(let item in value) {
        let word = value[item];

        // Check if word is not to be capitalized
        if(notCapitalise.includes(value[item])) {
            title.push(word)
        } else {
            // capitalize word
            let initial = word[0].toUpperCase();
            let finalWord = initial + word.slice(1, word.length);
            title.push(finalWord)
        }            
    }
    return title.join(' ');
}
exports.trim = (value) => {
    if(!value || typeof value !== 'string') return 'pass a valid argument';
    return value.trim();
}
