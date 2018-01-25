# Callbacks i JavaScript
Den korte forklaring: 
**Callbacks, er funktioner der sendes med som argument, til en anden funktion.**

Det er lidt specielt at man kan sende en funktion med som et argument, og det kan godt være lidt svært at overskue hvad det er der sker, indtil man har fået arbejdet lidt med konceptet.

I har allerede stiftet bekendtskab med callbacks i javascript:
[forEach på MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
```javascript
let data = [1, 2, 3, 4, 5, 6];
data.forEach(function (element) {
   console.log(element);
});
```
I det eksempel, er funktionen inde i forEach parenteserne, en anonym callback funktion som forEach funktionen vil udføre på hvert element i arrayet.

I javascript kan funktioner lægges ned i en variabel, her et eksempel på en anonym funktion der gemmes i en variabel kaldet data
```javascript
let data = function(){
   // noget kode...
};
data(); // dette udfører funktionen, der er gemt i variablen data 
```
Det er samme princip der benyttes, når en callback funktion sendes med som argument.

Her er to funktioner hvor den ene kan modtage et callback (kaldet next)

```javascript
// tænk på dette som den primære funktion der kaldes fra vores kode
function doSomething(someValue, next){
   // her kunne someValue manipuleres, inden callback funktionen kaldes
   next(someValue);
}
// denne funktion vil blive udført som en callback FRA doSomething funktionen
function outputSomething(value){
   console.log(value);
}
doSomething('text', outputSomething);
```

funktionen **outputSomething** kan kaldes uafhængigt af andre funktioner, mens **doSomething** skal have en funktion sendt med som argument.





Prøv at forestille jer vi har behov for en funktion, som kan løbe igennem et array af data og tjekke om et kriterie er opfyldt for hvert element. Efter alle elementer er gennemløbet ønkser vi nogle gange at udskrive HTML, andre gange gemme i en tekst fil og måske i nogle scenarier udskrive i ren tekst... men gennemgangen af arrayet er det samme i hvert scenarie.

Her kan callback funktion være en løsning :
```javascript
// tre simplificiserede funktioner til udskrift af data..
// blot til at demonstrere callback (OBS læg mærke til backtics...)
function udskrivSomHTML(data) {
   let resultat = '<ul>';
   data.forEach(element => {
      resultat += '<li>' + element + '</li>';
   })
   resultat += '</ul>';
   console.log(resultat);
}
function udskrivIRenTekst(data) {
   console.log(`Ren Tekst: ${data}`);
}
function gemITekstFil(data) {
   console.log('... data blev gemt i en fil');
}

// en funktion som behandler noget data, og som
// kan sende det behandlede data videre i systemet
function forberedData(grundData, next) {
   let behandletData = [];
   for (let i = 0; i < grundData.length; i++) {
      if (isNaN(grundData[i])) {
         behandletData.push(grundData[i]);
      }
   }
   if (behandletData.length > 0) {
      next(behandletData);
   }
}

// her sættes funktionerne i gang, 
// læg mærke til det er forskellige funktioner der medsendes
let varer = ['cola', 'chips'];
forberedData(varer, udskrivSomHTML);
forberedData(varer, udskrivIRenTekst);
forberedData(varer, gemITekstFil);
```

---

## Opgaver

## ```Øvelse:``` callbacks 0
1. Opret et dokument kaldet **callbacks.js** til dine løsninger.


## ```Øvelse:``` callbacks 1
1. Opret en funktion som kan modtage et enkelt argument (en string eller number), og console.logge indholdet af parameteren.
1. Omskriv dette forEach kald, så det ikke benytter den anonyme funktion, men så det i stedet modtager den navngivet funktion du lige har oprettet.
```javascript
let data = [1, 2, 3, 4, 5, 6];
data.forEach(function (element) {
   console.log(element);
});
``` 


## ```Øvelse:``` callbacks 2

1. Skriv din egen funktion, der kalder på en callback funktion (dvs du skal have 2 funktioner).
   1. første funktion modtager en streng, og en callback funktion. funktionen skal tilføje et html \<p\> tag omkring strengen.
   1. callback funktionen modtager den ændrede streng, og console.log'er den. men kaldet skal ske fra den første funktion.



---

## Asynkronitet

Javascript kan have flere bolde i luften på en gang, det er super smart.
F.eks kan man sætte programmet igang med at hente data fra en ekstern datakilde, og alt imens det sker, kan programmet fortsætte frem for at gå i stå mens der hentes data. 
```javascript
function getData(dataURI, outputData) {
   console.log('første linje i getData funktionen...');
   let timer = setTimeout(function () {
      console.log('Her der der gået 2 sekunder.');
      let dataArray = [12, 34, 56, 78, 90, 123, 456, 789];
      outputData(dataArray);
   }, 2000);
}

function outputData(dataArray) {
   console.log('Dette er funktionen der udskriver det hentede data: ' + dataArray);
}

getData('http://www.domain.com/something', outputData);
console.log("Denne kode linje burde være den sidste.");
```

### Opgave
Afprøv ovenstående kode, og forsøg med egne ord at beskrive hvad det er der sker.
Bryd kode eksemplet op i små bidder og benyt markdown til at beskrive det.

Her er det en rigtig god ide at få en snak med sidemanden om hvad koderne gør. 
Skriv kommentarer ud for hver enkelt linje, som i følgende eksempel 
```javascript
// her defineres funktionen getData
// den kan modtage to argumenter (dataURI og outputData)
function getData(dataURI, outputData) {
   // 
   console.log('første linje i getData funktionen...');
   // 
```
