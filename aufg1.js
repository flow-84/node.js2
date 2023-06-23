class Buch {
    constructor(titel, autor, isbn, preis) {
      this._titel = titel;
      this._autor = autor;
      this._isbn = isbn;
      this._preis = preis;
    }
  
    get titel() {
      return this._titel;
    }
  
    set titel(neuerTitel) {
      this._titel = neuerTitel;
    }
  
    get autor() {
      return this._autor;
    }
  
    set autor(neuerAutor) {
      this._autor = neuerAutor;
    }
  
    get isbn() {
      return this._isbn;
    }
  
    set isbn(neueISBN) {
      this._isbn = neueISBN;
    }
  
    get preis() {
      return this._preis;
    }
  
    set preis(neuerPreis) {
      this._preis = neuerPreis;
    }
  }
  
  // Erstelle Bücher
  const buch1 = new Buch("Harry Potter und der Stein der Weisen", "J.K. Rowling", "9783551551679", 19.99);
  const buch2 = new Buch("Der Hobbit", "J.R.R. Tolkien", "9783608961328", 12.99);
  const buch3 = new Buch("Die Verwandlung", "Franz Kafka", "9783150001884", 7.99);
  
  // Speichere Bücher in einem Array
  const buchArray = [buch1, buch2, buch3];
  
  // Generiere Ausgabe für alle Bücher
  buchArray.forEach((buch) => {
    console.log(`${buch.titel} (${buch.autor}): ${buch.preis}`);
  });
  