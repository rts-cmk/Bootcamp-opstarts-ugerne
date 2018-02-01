# NodeJS server...
Hvordan virker **NodeJS**, når det skal fungere som en JavaScript server?

* Start med at oprette et nyt repo på github, kald **express-test-repo**, klon til desktop og åben det i VScode.
 
Denne gang er det meget vigtigt at huske **add gitignore Node** 

---

## init
NodeJS kan arbejde med et koncept kaldet **modules**, hvor hvert modul er et bibliotek af funktioner, skrevet i javascript. og man kan sætte et NodeJS projekt op, så det kan arbejde med funktionerne i et modul.

* For at sætte projektet op, skal det først initialiseres, det klares ved at skrive følgende i konsollen: `npm init` og tryk på enter. *(sørg for at stå det korrekte sted i konsol stien! skal være projekt roden.)*

Så guides man igennem en simpel opsætning, der ender ud med at generere filen **package.json** som indeholder projektes opsætning. 

---

## install
Det næste er at installere  et modul, så NodeJS kan fungere som server.
Der findes mange foreskellige moduler der kan give serverfunktionerne, vi har valgt at fokusere på et module kaldet **express** som kan alt det vi har behov for på uddannelsen.

* For at installere modulet, tastes følgende kommando i kommandoprompten: `npm install express --save` 

Nu henter node package manageren (npm) alle de filer som er nødvendige for at express kan køre, og alt placeres i en mappe kaldet `node_modules` (som ikke skal lægges på github!, det er her .gitignore er vigtig)

det er vigtigt at huske `--save` da det vil tilføje modulet til **package.json** som et **dependency** dvs projektet er afhængig af modulet (og dets tilhørende moduler).

Så hvis man kloner repo'et og skriver `npm install`, så hentes alle de modules projektet har listet i **package.json** og projektet vil derved fungere og være opdateret.

---

## første APP på serveren.

For at sætte en app op som vi kan få data fra, skal der skrives lidt JavaScript, og her er det rå JS uden noget HTML, så opret et nyt dokument i roden af **express-test-repo**, kald filen **app.js**

App.js skal benytte det nyinstallerede **express** modul, det får vi fat i ved at skrive følgende i toppen af **app.js**

```javascript
const express = require('express');
const app = express();
```

`const` er en variabel definition i stil med `let`, men med den forskel at vi ikke kan tildele variablen nyt indhold *(dog kan indholdet af de objekter variablen får tildelt, godt ændres)*

`require` er en funktion der indlæser det modul der står i paranteserne, og sender resultatet ind i variablen `express`. 

Det næste der sker er at der oprettes en instans af **express** modulet, hvor instansen kaldes for **app**.

---

## start serveren


For at kunne starte serveren skal vi bede NodeJS om at lytte på en bestemt port, og samtidigt kan vi få en melding om at serveren kører.

Skriv følgende kode, sørg for der er et par tomme linjer efter de to `express` og `app` linjer, før denne kode stump skrives:
```javascript
app.listen(3000, (err) => {
   if (err) {
      console.log(err);
   }
   console.log('App is listening on http://localhost:3000');
});
```
For at teste om **express** er korrekt installeret, og at alle koder er skrevet korrekt, så tastes følgende i konsollen: `node app.js` og der burde meget gerne komme til at stå `App is listening on http://localhost:3000` i konsollen.

**og så er konsollen låst, da programmet nu er aktivt!...**  [ctrl]+[c] standser programmet igen.

Hvis man åbner en browser og går ind på siden (http://localhost:3000) burde man møde beskeden `Cannot GET /`

Hvilket er forventet, da vi ikke har sat serveren op til at gøre noget endnu...


## routes

Det næste er at oprette en **route** på vores app.

En route er den sti vi skriver når vi ønsker at arbejde med vores app. Der kan være mange routes på en app, hvor hver af dem har et specifikt formål... Tænk på StarWars api'en, der kunne vi spørge efter `/people` eller `/vehicles` det er to forskellige routes.

I app.js skrives følgende kode IMELLEM de to kode blokke vi har på nuværende tidspunkt 
```javascript
app.get('/api/test', (req, res) => {
   res.json({ text: "Hello World" });
});
```

Start Node serveren ved igen at skive `node app.js` i konsollen. Hvis app allerede kører, så husk at standse app først, og så starte den igen... **super vigtigt!** ellers vil ændringerne ikke træde i kræft (kommer I helt sikkert til at glemme utallige gange ;) )

Via browseren, besøg (http://localhost:3000/api/test) og se der meget gerne skulle stå **Hello World** (i et eller andet format) i browseren.

Det betyder der er hul igennem og serveren kan svare med en json streng, når den bestemte route kaldes.

## statiske dokumenter

Det kunne meget vel tænkes vi gerne ville have serveren til at sende HTML/CSS dokumenter, eller måske lidt billeder og lign... for at sætte express op til det, skal vi skrive en enkelt linke kode mere. Den skal skrives EFTER vores route men FØR `app.listen` blokken.

Linjen ser sådan her ud
```javascript
app.use(express.static('public'));
```

Formålet med koden, er først at tjekke om en request matcher en route, hvis ingen route matches så skal serveren gå ned i mappen **public** og sende filen tilbage (hvis den findes!).

Så opret en mappe i roden af projektet, kal mappen **public** 

Opret et simpelt HTML dokument kaldet index.html og skriv et par linker tekst i `<body>`

Genstart servern og besøg adressen (http://localhost:3000) og forhåbentligt ser du de par linjer tekst i browseren, som du skrev i HTML dokumentet.



## bind det hele sammen!

I dit nyoprettede HTML dokument, opret et script tag, og via en `fetch()` skal du kalde på `/api/test` og få den til at udskrive den tekst der modtages i et HTML tag der oprettes via JavaScript (som i ekstern API opgaven).


---

På nuværende tidspunkt burde din komplette `app.js` se sådan her ud

```javascript
const express = require('express');
const app = express();

app.get('/api/test', (req, res) => {
   res.json({ text: "Hello World" });
});

app.use(express.static('public'));

app.listen(3000, (err) => {
   if (err) {
      console.log(err);
   }
   console.log('App is listening on http://localhost:3000');
});
```

---


## Opgaven.

Opret endnu en route på din server, dens formål er at returnere en **JSON bruger profil** som indeholder et fornavn, et efternavn, en by og en alder. du må selv finde på et godt navn til din route, dog skal den starte fra `/api/` lige som test-routen 

#### kort om JSON
Json oprettes som eksemplet her under:
```javascript
{
   key1: "value2",
   key2: "value2"
}
```
et sæt krølleparanteser omkranser alle elementerne, og hvert element adskilles med et komma. Hvert element består af en nøgle (som ofte skrives uden "") og en værdi som defines lige som almindelige variabler ... dvs plingere om strings, ellers ingen plingere.

der må ikke være mellemrum i navnet på en nøgle, sæt `_` (underscore) hvis du har brug for et "mellemrum"


Når din route er sat op, og du kan se dens resultat direkte i browseren, så skal din HTML side kalde på din route og du skal udskrive profil-data i noget passende HTML.



---

---

---


## log requests på vores server...
Det kunne være rigtig smart at få besked om alle de requests der sker på vores server, så vi kan holde øje med om vi har  skrevet korrekt eller om andet  er gået  galt undervejs.

Til det kan vi  benytte et modul kaldet **morgan**, som kan auto-console-logge de forespørgelser der  sker til serveren.

start med at installere morgan ved at skrive `npm install morgan --save` i konsollen og  vent til den er hentet ned.

Derefter  tilføjes følgende kode til **app.js** lige efter linje 2

```javascript
const logger = require('morgan');
app.use(logger('dev'));
```

Det er primært "development" log info vi er interesseret i, så derfor står der `dev` i `logger()` funktionen

Hvis alt er sat op som det skal, og du har genstartet serveren, så gå ud i browseren og opdater siden. Nu burde der være en ekstra linje i VScode konsollen, der ligner dette: `GET / 200 8.833 ms - 554`

Her kan vi se der har været en request af typen **GET** og svaret var **200**, det tog **8,833 millisekunder** og der blev leveret **554 bytes**.

---


## server auto stop/start...

I har måske allerede opdaget det  kan være svært at huske at genstarte serveren hver gang I ændrer på filerne...

Der findes værktøjer som kan holde øje med hvornår en fil ændres, og automatisk genstarte scriptet.

Modulet kaldes **nodemon** - `node mon` ikke `no demon` ;) 

Det skal installeres på en lidt speciel måde, da vi netop kun er afhængige af funktionaliteten imens vi udvikler. Skriv `npm install nodemon --save-dev` så vil modulet  knyttes til projektet som et develepment-dependency 


Når det er hentet og installert, skal vi tilpasse **package.json** så vi kan benytte **nodemon** til at genstarte serveren.


I **package.json** findes elementet **scripts**, og det tilpasses så der står følgende:
```javascript
   "scripts": {
      "start": "nodemon app.js",
      "test": "echo \"Error: no test specified\" && exit 1"
   },
``` 
det er "start" der tilføjes, hvor vi beder  den om at udføre kommandoen `nodemon app.js` hvis vi skriver `npm start` i konsollen.

Så gem alle filer, og sørg for serveren er stoppet. 

Nu vil vi starte serveren igen, og benytte nodemon, så nu tastes `npm start` istedet for `node app` og der burde meget gerne komme følgende tekst i konsollen:
```
[nodemon] 1.14.11
[nodemon] to restart at any time, enter `rs`
[nodemon] watching: *.*
[nodemon] starting `node app.js`
``` 

prøv at ret i filen app.js imens serveren kører, og gem dokumentet, så skulle nodemon sørge for at genstarte serveren automatisk
```
[nodemon] restarting due to changes...
[nodemon] starting `node app.js`
```

