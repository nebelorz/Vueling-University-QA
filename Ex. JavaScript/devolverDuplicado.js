// 6- Crea una función que tome un objeto y devuelva una nueva versión
// del objeto donde todos los valores son duplicados.

function getDuplicatedWord(text) {
    const splittedText = text.split("");
    const result = [];

    splittedText.forEach(char => {
        result.push(char + char)
    });

    return result.join("");
}

console.log(getDuplicatedWord("JavaScript"));