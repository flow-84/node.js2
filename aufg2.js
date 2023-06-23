const args = process.argv.slice(2); // Die ersten beiden Argumente in process.argv sind Pfad zu Node.js und Pfad zur Datei, daher werden sie abgeschnitten
const numbers = args.map(Number); // Konvertiere Argumente in Zahlen

if (numbers.length === 3) {
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  console.log(`Die größte Zahl ist: ${max}`);
  console.log(`Die kleinste Zahl ist: ${min}`);
} else {
  console.log("Bitte gib genau drei Zahlen als Argumente ein.");
}
