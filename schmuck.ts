export class Schmuck extends Gegenstand {

  constructor(id: number, wert: number, public bezeichnung: string,) //todo) {
	super(id, wert);
  }

  toString: string {
    let text: string = "\nAktie: "
    let text += super.toString();
    let text += "\nBezeichnung: " + "\t" this.bezeichnung;
    return text;
  }
  
  //todo

}