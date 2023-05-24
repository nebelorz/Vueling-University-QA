// 5- Crea una función que tome una cadena de palabras separadas
// por espacios y devuelva la palabra más larga.

function findLongestWord(text) {
    let longest = "";
    let splittedText = text.split(" ");

    splittedText.forEach(word => {
        if (word.length > longest.length) {
            longest = word;
        }
    });

    return longest;
}

console.log(findLongestWord("Hola que tal?"));