// ====================================================
// Filen skal kan bruges som opslagsværk.
// Det er IKKE meningen, at du bare skal køre filen og kigge konsollen.
// ====================================================

// var, let og const er forskellige metoder til at deklarere en variabel
// det er lettere komplekst at forklare forskellen på nuværende tidspunkt
// alle øvelserne med variabler løses med 'let' 
// mange eksempler på nettet benytter 'var', du kan sagtens bruge 'let' istedet


// Deklarerer en variabel (betyder at oprette)
let tekst = "God arbejdslyst";

// Udskriver indholdet i konsollen
// (Du får ofte brug for at udskrive variabler i konsollen)
console.log(tekst);



let antal = 10; // Number (integer)
let pris = 20.75; // Number (float)

let besked1 = "Hej med dig"; // String vha. dobbeltplinger
let besked2 = 'Hej med dig'; // String vha. enkeltplinger
let besked3 = `Hej med dig`; // String vha. back-ticks

let erKlog = true; // Boolean (kan kun indeholde true eller false)
let erBindegal = false; // Boolean (kan kun indeholde true eller false)


// ====================================================
// Sammensætning af variablers værdier

let postnr = 4000;
let by = 'Roskilde';
let sammensatForkert = postnr + by; // "4000Roskilde" (mangler et mellemrum)
let sammensatKorrekt1 = postnr + ' ' + by; // "4000 Roskilde"
let sammensatKorrekt2 = `${postnr} ${by}` // "4000 Roskilde" ved hjælp af back-ticks (de skrå apostroffer)


// ====================================================
// Matematiske beregninger

let addition = 4 + 7; // 11
let subtraktion = 20 - 5; // 15
let division = 1 / 3; // 0.33333...
let multiplikation = 6 * 2; // 12

let prisMedMoms = 16 * 1.25; // 20
let prisUdenMoms = 20 / 1.25; // 16

let udenParenteser = 3 + 2 * 4; // 11  (2 * 4 udregnes først)
let medParenteser = (3 + 2) * 4; // 20  (3 + 2 udregnes først)


let rundNed = Math.floor(3.7) // 3
let rundOp = Math.ceil(3.7) // 4  ("ceil" betyder "ceiling")
let afrund = Math.round(3.7) // 4 (round afrunder til nærmeste heltal)