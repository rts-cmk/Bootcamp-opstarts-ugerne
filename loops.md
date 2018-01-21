# WI81 Intro til løkker

## Forventninger til eleverne

### Når dagen er omme
* Du kan genbruge kode, der udføres flere gange igennem en løkke (while og for).
* Du kan genbruge kode, løber et array igennem og udfører kode for hvert element (foreach).

### Efter ca. en måned på hovedforløbet
* Udenad kan du konsturere løkker der løber igennem array data.
* Udenad kan du kombinere betingelser, operatoerer og løkker.

---

## Oplæg - løkker (del 1)
**pas lidt på med løkker** 
```javascript
// DETTE SKABER ET EVIGHEDS LOOP! LAD VÆRE MED AT KØR KODEN!!!
while(true){
   console.log('Jep, dette sker igen og igen');
}
```


```javascript
// DETTE SKABER ET EVIGHEDS LOOP! LAD VÆRE MED AT KØR KODEN!!!
do{
   console.log('Jep, dette sker igen og igen, men mindst 1 gang');
} while(true);

```


```javascript
for(let i = 0; i < 10; i++){
   console.log(i);
}
```


---

# Øvelser - løkker (del1)

## ```Øvelse:``` Løkker 1
1. Opret et nyt dokument kaldet **løkker.js** i dit Bootcamp repository
1. øvelserne om løkker, frem til og med nr 5, løses i det dokument




## ```Øvelse:``` Løkker 2
1. benyt en løkke til at udskrive alle tallene fra 1 til og med 25
1. løs opgaven 3 gange, en med hver af løkkerne vi har været igennem nu: _while, do...while og for_



## ```Øvelse:``` Løkker 3
1. med en do-while, lav en løkke der altid udføres mindst 1 gang, eller indtil en tælle variabel er nået til en bestemt værdi



## ```Øvelse:``` Løkker 4
1. benyt en for-løkke til at udskrive alle år fra 2017 og ned til og med 1917, i den faldende rækkefølge



## ```Øvelse:``` Løkker 5
1. Opret et array med ugens 7 dage
1. benyt en for løkke til at løbe igennem arrayet og udskrive her af dagene.



## ```Øvelse:``` Løkker 6
1. Opret en ny fil kaldet **løkker.md**
1. Benyt markdown til at beskrive hvordan hver af de tre løkker fungerer, husk at få alle nødvendige tegn med
1. Illustrer dine forklaringer med kodeeksempler

---


# Oplæg - løkker (del 2)
```javascript
let farver = ['rød','grøn','blå'];
farver.forEach(function(farve){
   console.log(farve);
});
```
Den kode oven over, og koden her under gør præcis det samme, forskellen 
```javascript
let farver = ['rød','grøn','blå'];
farver.forEach(farve => {
   console.log(farve);
});
```


```javascript
let farver = ['rød','grøn','blå'];
farver.forEach(function(farve, index, arr){
   console.log(farve + ' har placering ' + index);
});
```


## ```Øvelse:``` Løkker 7
1. Fortsæt i dit **løkker.js** 
1. Opret et array med 8 navne
1. Med en forEach skal du løbe igennem array'et og udskrive hvert navn.



## ```Øvelse:``` Løkker 8
1. Opret et nyt array, denne gang med 4 forskellige musikkere/kunstnere
1. Udskriv alle kunstnere, samt hvilken position de har i arrayet.



## ```Øvelse:``` Løkker 9
1. Opret et array med 10 tilfældige tal du selv vælger.
1. Løb igennem arrayet med en forEach, og for hvert element skal du udskrive om elementets værdi er større eller mindre end det næste element i arrayet.
   * f.eks. kunne udskriften se sådan her ud: `10 er større end 3`
1. Tag højde for om der findes et **næste element** 



## ```Øvelse:``` Løkker 10
1. Fortsæt i filen: **løkker.md**
1. Benyt markdown til at beskrive hvad en forEach er, og hvordan den kan benyttes til at løbe igennem et array, husk at få alle nødvendige tegn med
1. Illustrer din beskrivelse med kodeeksempler

---


[tilbage til Bootcamp forsiden](README.md)