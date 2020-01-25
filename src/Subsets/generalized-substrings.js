

const generate_generalized_abbreviation = (word) => {
    let results = [];

    function helper(word, abWord, start, count, results) {
        if (start === word.length) {
            if (count !== 0) {
                abWord += count;
            }
            results.push(abWord);
        } else {
            helper(word, abWord, start+1, count+1, results);
            console.log(abWord);
            if (count !== 0) {
                abWord += count;
            }
            const newWord = abWord + word[start];
            helper(word, newWord, start+1, 0, results)
        }
    }
    helper(word, '', 0, 0, results);

    return results;
}

console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`);
console.log(`Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`);




// "BAT"
// "BAT", "BA1"
// "BAT", "BA1", "B1T", "B2"
// "BAT", "BA1", "B1T", "B2", "1AT", "1A1", "2T", "3"