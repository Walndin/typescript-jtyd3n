export class GegenstandNichtGefundenError extends Error {
  constructor(public id: number) {
    super('Gegenstand mit der ID ' + id + ' nicht im Tresor!');
    /**
     * name ist Klassenattribut in Superklasse Error,
     * jedoch nicht Parameter des Konstruktors von Error.
     */
    super.name = 'Gegenstand-nicht-gefunden-Error';
  }
}
