# NodeJS Server Del 2 - API og håndtering af data

Indtil nu har vi fået sat en server op, og fået den til at reagere på nogle foeskellige routes samt den kan servere statiske dokumenter.

Vi mangler at kunne håndtere forskellige data der sendes med til en route, så vores response kan blive mere dynamisk.


## req.params
Den simpleste version af dynamiske data, er at arbejde med route params.
I følgende kodeeksempel tilføjes et `/:xxx` til en route, det er et parameter som representerer den værdi der står på den position parametret er placeret.

Indsæt denne route kode i dit eget eksempel, bagefter routen `/api/test`
```javascript
app.get('/api/test/:id', (req, res) => {
   console.log(req.params.id);
   res.json({ param: req.params.id });
});
```

Hvis vi så kalder på vores route via (http://localhost:3000/api/test/42) så vil `req.params.id` indeholde værdien `42`

Nu kan vi kalde den generiske `/api/test` (som burde returnere ALLE data) eller vi kan kalde `/api/test/værdi` (som burde returnere EN bestemt entitet)

---

## req.query

En anden metode til at sende info med over til vores route, er via vores querystring. Hvis I husker tilbage til i forgårs, der var vi inde på at sætte værdier i adressebaren, f.eks`?page=3`

For at kunne modtage data via querystring i en route, skal vi have fat i `req.query` egenskaben.

Tilpas din `/api/test` route, så den kan udskrive `req.query` i konsollen:
```javascript
app.get('/api/test', (req, res) => {
   console.log(req.query);
   res.json({
      text: "Hello Worlds, et eller andet"
   });
});
```

Afprøv routen fra browseren, ved at besøge (http://localhost:3000/api/test?somekey=somevalue) så burde konsollen i VSCode indeholde en linje som denne `{ somekey: 'somevalue' }`

Med querystring eller parametre kan vi begynde at skrive routes der er meget dynamiske, og lige om lidt når vi begynder at tale databaser, så kan vi producerer nogle ret smarte hjemmesider.


---


## req.body

Der er en sidste mulighed for at sende data til en route, og det er via formular data. 
Her vælger vi at fortsætte med json konceptet, selv om formularer jo kan sendes via andre metoder. Men json giver god mening nu hvor vi i forvejen håndterer data i form af json.

Vi skal vælge at sætte **express** op til at håndtere formular data, ellers vil det automatisk blive kaseret.

Vi skal benytte et middleware kaldet **body-parser** (et middleware er et NodeJS modul der kaldes fra et andet modul). Først skal modulet installeres med kommandoen `npm install body-parser --save`

Derefter skal `app.js` tilpasses, så **express** instansen benytter **body-parser**. 

Denne kode skal indsættes FØR vi begynder at definere routes.
```javascript
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
```

Nu kan **express** håndtere at der sendes et json objekt med til vores route, men kun hvis routen er sat op til at modtage via **POST** frem for **GET**


til det skal vi have en route som kan modtage den data vi sender, så der skal oprettes endnu en route i `app.js`, bare sæt den ind som den sidste route før `app.listen` koderne
```javascript
app.post('/api/formular', (req, res) => {
   res.json({
      besked:"data blev modtaget", 
      fornavn: req.body.fornavn,
      efternavn: req.body.efternavn
   });
});
```

formålet med den route er at modtage to værdier: **fornavn** og **efternavn**, og så sender vi dem direkte tilbage igen, bare lige for at bevise vi kan håndtere informationerne. Vi sender ogs lige en besked med tilbage, om at data blev modtaget.

Læg iøvrigt mærke til det ikke er en `app.get`, men istedet en `app.post` funktion. Det betyder det er `HTTP REQUEST METODEN` **POST** der skal benyttes for at ramme den route... det er via POST vi kan submitte data (tænk formularer og method POST).


Det er på nuværende tidspunkt det er en fordel at have et program som kan forbinde med vores API, så vi kan teste funktionalitet uden at skulle skrive en masse HTML og javascript til browseren.

---

## POSTMAN

Hent og installer POSTMAN fra (https://www.getpostman.com/)

efter installationen kan vi begynde at arbejde direkte med vores API via postman.

Prøv at benytte **GET** til at sende en forespørgsel til (http://localhost/api/test) der burde vi få "hello world" svaret tilbage med det samme (hvis eller vi har husket at starte API serveren).

Så prøv at opret en **POST** forespørgesl til (http://localhost:3000/api/formular) og under fanen **body** vælges typen **x-www-form-urlencoded** og de to nøgler kan tilføjes **fornavn** og **efternavn** med nogle værdier.

Klik på **send**, og hvis alt ellers er sat korrekt op, så får vi et svar tilbage med de data vi sendte afsted, samt beskeden "data blev modtaget".


Postman er super smart til hurtigt at teste om routes fungerer som de skal, så husk at benyt den når du sætter routes op!


## opgaven (nr 3)

Opret et HTML dokument mere, og indsæt en simpel formular med et felt til fornavn og et felt til efternavn, samt en knap til at submitte. 

Her er et forslag:
```html
<form>
   <p>Fornavn:
      <input type="text" name="fornavn">
   </p>
   <p>Efternavn:
      <input type="text" name="efternavn">
   </p>
</form>
<button>Send</button>
```

Opret derefter en `click` event på knappen, og få javascript til at sende indholdet af de to formular felter til din `/api/formular` route.

Det nye ved fetch eksemplet der blev vist på tavlen, så sådan her ud: (placeret inde i addEventListener funktionen)
```javascript
let form = document.querySelector('form');

let submitSettings = {
   method: 'POST',
   headers: new Headers({
      'Content-Type': 'application/json'
   }),
   body: JSON.stringify({
      fornavn: form.fornavn.value,
      efternavn: form.efternavn.value
   })
}

fetch('http://localhost:3000/api/formular', submitSettings) // der var et par .then() funktioner herefter
```



* Første del af opgaven, er at få formularen valideret, så vi ved der er data i begge formular felter inden formularen sendes
* Næste del er at få det hele til at fungere, så routen svarer tilbage med det forventede "besked" samt de data der sendes til routen.

