# WI81 Intro til funktioner

## Forventninger til eleverne

### Når dagen er omme
* Du kan spotte hvornår en funktion kaldes
* Du kan genbruge kode, der opretter en simpel funktion 
* Du ved hvad et argument er, når der arbejdes med funktioner


### Efter ca. en måned på hovedforløbet
* Udenad kan du oprette funktioner der medtager argumenter og returnerer data
* du vil kunne arbejde med indbyggede javascript funktioner

---

## Oplæg - Funktioner

En funktion er grundlæggende set en kodeblok der er samlet under et navn, og som kan udføres blot ved at kalde på den... 

For at definere en funktion, benyttes javascript nøgleordet `function`
```javascript
function sigHejVerden(){
   console.log('Hej Verden!');
}
```
I det ovenstående kodeeksempel oprettes (defineres) en funktion kaldet **sigHejVerden** 

Funktionens indhold, **det i mellem krølleparenteserne**, er det der udføres når funktionens kaldes.

For at kalde funktionen, skrives navnet på funktionen, efterfulgt af et sæt parenteser: `sigHejVerden();`

Det er selvfølgelig lidt mere interessant hvis funktionen udfører noget mere end blot en enkelt console.log, men fordelen ved en funktion er at man kan genbruge den lige så mange gange man ønsker, uden at skulle kopiere koden.

## Argumenter

En funktion bliver meget mere anvendelig, hvis den kan modtage noget data som den kan behandle.

Et eksempel kunne være at vi ønsker at udskrive en pris med **kr.** bag efter.
Her oprettes en funktion som modtager prisen, og udskriver prisen efterfulgt af et **kr.**
```javascript
function iKroner(pris){
   console.log(pris + ' kr.');
}
```

For at benytte funktionen, kaldes den og der sendes en værdi med til funktionen:
```javascript
iKroner(1500);
iKroner(500);
iKroner('24,95'); 
```


## Returværdier

Funktioner kan meget andet end at udskrive i konsollen. Der hvor funktioner bliver meget ...funktionelle... er når de returnerer noget data, til det sted hvor funktionen blev kaldt.
```javascript
function safeMultiply(x, y) {
   if (!isNaN(x) || !isNaN(y)) {
      return 0;
   } else {
      return x * y;
   }
}
```
I den ovenstående funktion, testes først om begge argumenter er af dataypen **Number**, ved at benytte den indbyggede javascript funktion `isNaN()` (https://www.w3schools.com/jsref/jsref_isnan.asp)

Hvis begge argumenter er tal, ganges de med hinanden og resultatet returneres ved at benytte javascript nøgleordet `return` 
```javascript
let result = safeMultiply(5, 7);
console.log(safeMultiply('test', 7);
```
Funktionen kunne udvides endnu mere, så den også håndterer hvis et af argumenterne mangler.

Og det er netop her funktioner bliver smarte. Tænk hvis man havde et større program hvor der skulle ganges to tal mange steder i koden, og alle stedere skulle der lige testes på om begge værdier var et tal eller om begge værdier var til stede.

Ved at oprette en funktion, kan logikken samles ét sted, og vedligeholdes det ene sted.




# Anonyme funktioner 

Da vi arbejdede med forEach, benyttede vi en anonym funktion til at arbejde med hvert enkelt element.
```javascript
let farver = ['rød','grøn','blå'];
farver.forEach(function(farve){
   console.log(farve);
});
```
Det argument der sendes til forEach er en anonym funktion, dvs en funktion uden navn. Funktionen kan ikke genbruges uden for forEach kaldet, fordi vi har ikke noget navn at referere til.

Det er muligt at ændre på det, så vi får en funktion ud som kunne kaldes fra andre steder i koden.

```javascript
function udskrivFarve(farve){
   console.log('Farven er: ' + farve);
}

let farver = ['rød', 'grøn', 'blå'];
farver.forEach(udskrivFarve);
udskrivFarve('gul');
```



---

# Øvelser - Funktioner

---

## ```Øvelse:``` funktioner 0 
1. Opret et nyt dokument kaldet **funktioner.js** i dit Bootcamp repository
1. funktioner øvelser frem til og med nr 6, løses i det dokument

---


## ```Øvelse:``` funktioner 1
1. Opret en funktion der kan modtage to argumenter, f.eks. x og y
1. Funktionen skal gange tallene, og udskrive teksten: "tal **x** gange med tal **y**, er lig med **resultat**" hvor x, y og resulat er selve tallene
1. Afprøv funktionen med forskellige tal
 
---


## ```Øvelse:``` funktioner 2 
1. Kopier funktionen fra øvelse 1, og tilpas den så den tjekker om de medsendte argumenter er tal.
1. Afprøv den med argumenter som ikke er tal

---


## ```Øvelse:``` funktioner 3
1. Kopier den tilpassede funktion fra øvelse 2, og tilpas den så den også tjekker om begge argumenter har indhold
1. Afprøv funktionen hvor du kun sender et argument til den

---


## ```Øvelse:``` funktioner 4
1. Opret et dokument kaldet **funktioner.md** i dit bootcamp repository
1. Beskriv med egne ord hvad en funktion er, vis et eksempel på en funktion og hvordan funktionen benyttes
1. Forklar hvad et argumenter er for noget, kom med et kodeeksempel
1. Beskriv hvad returværdier, og vis et kodeeksempel hvor der benyttes returværdier


