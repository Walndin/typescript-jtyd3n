import { Gegenstand } from "./gegenstand";
import { GegenstandNichtGefundenError } from "./gegenstandNichtGefundenError";


export class Tresor {
  
  /**
   * Typ ArrayList (vgl. Java) nicht vorhanden --> Array verwenden!
   */
   private gegenstaende: Gegenstand[];

   constructor() {
     this.gegenstaende = new Array();
   }
   addGegenstand(g: Gegenstand){
     this.gegenstaende.push(g);
   }
  getGegenstand_v1(id: number): Gegenstand {
    for(let i: number = 0; i < this.gegenstaende.length; i++) {
     if id == this.gegenstaende[i].id {
       return this.gegenstaende[i];
     } 
    }
    throw new GegenstandNichtGefundenError(id);
  }

  getGegenstand_v2(id: number): Gegenstand {
    for (let g of this.gegenstaende) {
      if id == g.id{
        return g;
      }
    }
    throw new GegenstandNichtGefundenError(id);
  }

  getGegenstand_v3(id: number): Gegenstand {
   let gefundenGegenstand = this.gegenstaende.find(g => g.id === id);
   if (gefundenGegenstand !== undefined) {
     return gefundenGegenstand;
   }
   throw new GegenstandNichtGefundenError(id);

  }
  removeGegenstand(gegenstand: Gegenstand) {
    let gegenstandToRemove = this.gegenstaende.find(g => g === gegenstand);
    if (gegenstandToRemove !== undefined) {
      this.gegenstaende = this.gegenstaende.filter(g => g !== gegenstandToRemove);
    } else {
      throw new GegenstandNichtGefundenError(gegenstandToRemove.id);
    }
  }
   //todo Gegenstand hinzufügen (addGegenstand)
   
   //todo Gegenstand finden (getGegenstand) 
   /**
    * Drei verschiedene Varianten des Durchsuchens des Arrays möglich:
    * a) forEach-Schleife --> in typescript 'for ... of'
    *    --> vgl. https://www.typescriptlang.org/docs/handbook/iterators-and-generators.html#forof-statements
    * b) for-Zählerschleife mit Iteration
    *    --> vergleichbar mit der Umsetzung in Java
	* c) Methode find() auf das Array anwenden
    *    --> vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    */

   //todo Gegenstand aus Tresor nehmen (removeGegenstand)
   /**
    * 1. sinnvollerweise zunächst prüfen, ob der Gegenstand im Tresor ist
	*    (vgl. gewählte Variante für "Gegenstand finden", also für 'getGegenstand')
    * 2. wenn nicht gefunden, Fehler werfen (GegenstandNichtGefundenError), ebenfalls wie in 'getGegenstand'
	* 3. Methode filter() auf das Array anwenden, um dieses neu aufzubauen
	*    vgl. https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
    */

   berechneGesamtwert(): number {
     let summe: number = 0;
     this.gegenstaende.forEach(g => summe += g.wert);
     return summe;
   } 

   //todo toString
   toString(): string {
     let text: string = "\n\nTresorinhalt"
     this.gegenstaende.forEach(g => text += g.toString());
     text += "\n\nWert der Gegenstände im Tresor: " + this.berechneGesamtwert();
     //todo, vgl. forEach in berechneGesamtwert()
     return text;
   }

}