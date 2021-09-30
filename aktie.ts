

export class Aktie extends Gegenstand {

  constructor(id: number, wert: number, public unternehmen: string, public nennwert: number) //todo) {
	super(id, wert);
  }

  toString: string {
    let text: string = "\nAktie: "
    let text += super.toString();
    let text += "\nUnternehmen: " + "\t" this.unternehmen;
    let text += "\nNennwert: " + "\t" + this.nennwert;
    return text;
  }
  
  //todo

}