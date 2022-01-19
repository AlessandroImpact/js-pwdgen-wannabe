/* PASSWORD GENERATOR */

/*alert di benvenuto */
alert("Benvenuto! Premi invio per generare una nuova password");


let nome = prompt("Inserisci il tuo nome");
let cognome = prompt("Inserisci il tuo cognome");
let colore = prompt("Inserisci il tuo colore preferito");
let numero = 19;

let pass ="la password generata è " + nome + cognome + colore + numero;
document.getElementById('bersaglio').innerHTML = pass;