# fetch() . then() . catch() 

fetch er en indbygget funktion i JavaScript, som implementerer et promise og kan foretage et asynkront kald til en URL.
Svaret der kommer fra den eksterne kilde, bliver sendt til `.then()` funktionen. Men skulle der opstå en fejl med forbindelsen, havner informationen i `.catch()` funktionen.

## Hvordan ser det ud i praksis?
For at benytte fetch, skal koden afvikles via et html dokument, i en browser... *(i hvert fald indtil vi får sat en nodeserver op og henter fetch modulet)*

Her er et eksempel på et kald til en ekstern kilde via fetch. I dette eksempel benytter jeg https://swapi.co/api/people/ som er et opslagsværk omkring Star Wars.
```javascript
// fetch skal have en URL
fetch('https://swapi.co/api/people/')
   // hvis der ikke opstår en fejl med forbindelsen, udføres .then() funktionen
   .then((response) => {
      // response indeholder information om forbindelsen (headers)
      console.log(response);
   })
```
resultatet af console.log, burde se nogenlunde sådan ud:
>```Response { type: "cors", url: "https://swapi.co/api/people/", redirected: false, status: 200, ok: true, statusText: "OK", headers: Headers, bodyUsed: false }```

det vigtige er at lægge mærke til **status** den skal være **200**, det betyder success. Står der **404** er der noget galt med URLen

## Hvordan arbejdes der med den data der kommer retur?

`response` variablen i forrige eksempl, kan vi ikke bruge til så meget, uden vi bearbejder dens indhold en smule.

Vi skal trække data delen ud som et **JSON** objekt.

Alt hvad I behøver vide lige nu, er at tænke på JSON som om det stort set er det samme som et array, men hvor der er navngivet elementer. I faget Dynamisk Web, vil I få den dybdegående introduktion til JSON.

```javascript
fetch('https://swapi.co/api/people/')
   .then((response) => {
      // grib svarets indhold (body) og send det som et json objekt til næste .then()
      return response.json();
   })
   .then((json) => {
      // nu er json objektet lagt ind i data variablen, udskriv data
      console.log(json);
   })
```
resultatet af console.log, i den anden .then() funktion burde se sådan ud
> ```Object { count: 87, next: "https://swapi.co/api/people/?page=2", previous: null, results: Array[10] }```



## Hvad skal vi så bruge det JSON til?

Den data der kommer ud af `.json()` funktionen, indeholder et element kaldet `results` som indeholder et `array` med 10 elementer.
Hvert af de elementer i arrayet, indeholder hver i sær en samling elementer, og det er dem vi vil prøve at udskrive i vores HTML.
```javascript
fetch('https://swapi.co/api/people/')
   .then((response) => {
      return response.json();
   })
   .then((json) => {
      let content = document.getElementById('content');
      let h1 = document.createElement('h1');
      h1.textContent = json.results[0].name;
      content.appendChild(h1);
   })
```
Resultatet af ovenstående kode, burde blive (hvis det køres i et html dokument!): `<h1>Luke Skywalker</h1>`

---


## Opgaven

## ```Øvelse:``` fetch 1
Opret en html side, kald den f.eks. **fetch-opgave.html** 

I det dokument skal du sætte en simpel html side op. Det skal ikke være noget avanceret, hellere hold det simpelt, end at gøre det smart... det er ok at style lidt på siden, men husk formålet med opgaven er ikke at fokusere på HTML/CSS, men at arbejde med javascript og fetch i et html dokument!

Tilføj et script tag, hvor du benytter `fetch()` til at hente data fra adressen: `https://swapi.co/api/people/` *(som i eksemplet oven over)*

Udskriv på hjemmesiden, 3-4 elementer fra EN af personerne fra `json.results` arrayet *(husk console.log viser hvilket elementer der er tilgængelige)* Hvert element skal placeres i sit eget HTML element der oprettes via `document.createElement()` funktionen...du bestemmer selv hvilke HTML elementer du vil benytte.



## ```Øvelse:``` fetch 2

Når du har udskrevet data fra en person på siden, så skal du løbe igennem `results` arrayet og udskrive 10 kopier af elementerne, med data fra alle 10 personer i `results` arrayet... *et hint: `forEach()`* 





## ```Øvelse:``` fetch 3

Når vi benytter `fetch()` til at hente data fra eksterne kilder, så kan det gå galt med kaldet, og det bliver vi nødt til at kunne lave lidt simpel fejl håndtering.

1. Tilføj `.catch()` funktionen, kig meget gerne på eksemplerne fra i går [promises.md](./promises.md)
1. console.log den fejlbesked, der bliver sendt til `.catch()` funktionen
1. Afprøv at `.catch()` funktionen kaldes, ved at give `fetch()` en forkert URL og se beskeden i konsollen



## ```Øvelse:``` fetch 4


Tilføj en betinget sætning, i den første `.then()` funktion, som tester på om `response.status` er lig med 200.
1. Hvis den IKKE er 200, skal du sende en fejlbesked til `.catch()` funktionen med en `throw new Error()`
1. Men hvis `response.status` ER lig med 200, skal du returnere json data til næste `.then()` funktion

3. Test endnu en gang, at din fejl håndtering fungerer, ved at rette på URLen i `.fetch()` kaldet



## ```Øvelse:``` fetch 5

Opret en funktion som modtager **1 person** og som kan tilføje alle de HTML elementer `.forEach()` fra øvelse 2 tilføjede. 

Få `.forEach()` funktionen til at benytte din nye funktion, istedet for den anonyme funktion.


## Opsamling

Når alle tre øvelser er løst, har du arbejdet med `variabler`, `datatyper`, `betingelser`, `løkker`, `funktioner`, `callbacks` og `promises`, og du har implementeret javascript i et html dokument. 

Skulle der på nuværende tidspunkt være nogle af øvelserne fra de tidligere emner, som du ikke har nået at blive færdig med, så gå tilbage og arbejd videre med dem.

Ellers vil det være helt ok at bruge lidt tid på at sætte HTML/CSS op på den simple StarWars side vi er begyndt på her. 
Prøv eventuelt at se lidt dybere på den data der kommer fra (http://swapi.co) og udvide 

