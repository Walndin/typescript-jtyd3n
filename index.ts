// Import stylesheets
import './style.css';
import { Aktie } from './aktie';
import { Schmuck } from './schmuck';
import { Tresor } from './tresor';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Für Ausgabe der Tresor-Typescript-App die Konsole öffnen!</h1>`;


let a1: Aktie = new Aktie(1, 97.88, 'BASF', 50.0);
let a2: Aktie = new Aktie(2, 117.26, 'Bayer' 50.00)
let a1: Schmuck = new Schmuck()


tresor.addGegenstand(a1)
tresor.addGegenstand(a2)
tresor.addGegenstand(s1)


console.log(tresor.toString());

//todo: Ergänzungen lt. Aufgabenstellung

/**
 * Beispiel für try-catch mit dem Werfen des Errors
 */
try {
  tresor.getGegenstand_v3(2);
} catch (error) {
  console.log(error.name + ": " + error.message);
}

try {
  tresor.getGegenstand_v3(4);
} catch (error) {
  console.log(error.name + ": " + error.message);
}
try {
tresor.removeGegenstand(a2);
} catch (error) {
  console.log(error.name + ": " + error.message )
}