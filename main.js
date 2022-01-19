/* PASSWORD GENERATOR */

/*alert di benvenuto */
alert("Benvenuto! Premi invio per generare una nuova password");

/*richiesta nome */
let nome = prompt("Inserisci il tuo nome");

/*richiesta cognome */
let cognome = prompt("Inserisci il tuo cognome");

/*richiesta colore */
let colore = prompt("Inserisci il tuo colore preferito");

/*variabile numero */
let numero = 21;

/*Inserimento e stampa in html */
let pass ="la password generata è " + nome + cognome + colore + numero;
document.getElementById('bersaglio').innerHTML = pass;