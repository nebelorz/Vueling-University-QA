// 3- Calcular los primeros 10 numeros primos y mostrarlos por pantalla en una lista (array).

function primo(numero) {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
          return false;
        }
      }
    
      return true;
}

function añadirPrimosLista() {
    let lista = [];
    let numero = 2;

    while (lista.length < 10) {
        if (primo(numero)) {
            lista.push(numero)
        }
        numero++;
    }

    return lista;
}

console.log(añadirPrimosLista());