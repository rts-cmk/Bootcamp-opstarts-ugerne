# WI81 Intro til operatorer

## Forventninger til eleverne

### Når dagen er omme
* Har du en ide om hvad en operator er. 


### Efter ca. en måned på hovedforløbet
* Udenad kan du kende forskel på de mest almindeligt benyttede operatorer.

---

## Oplæg - operatorer
I de fleste programmerings sprog, og der i blandt også JavaScript, arbejder man med "operatoerer"

En operator, er et eller flere symboler der har en helt specifik betydning.

Der er flere af dem I allerede har benyttet, men det er vigtigt at I kan forklare hvad de forskellige operatorer gør og hvilken type operator det er.


F.eks. når I opretter variabler, og giver variablen en værdi, så benyttes et enkelt lighedstegn **=** 
Det er en **tildelings operator** eller på engelsk **assignment operator**

Når vi i en **if-sætning** ønsker at se om en variabel er lig med en bestemt værdi, benyttes to lighedstegn **==** det kaldes en **sammenlignings operator** eller på engelsk **comparison operator**

Der er også en tredje type operator, som udfører matematisk handlinger. f.eks. da I udregnede moms benyttede I en *stjerne* __*__ også kaldet **asterisk** det er et **gange tegn** 

En logisk operator, er den fjerde type operator I skal kende til. Det er en måde at udtrykke **og**, **eller**, og **ikke** 
f.eks. ```if(name != '' && name == 'albert')```
**!** udråbstegnet vender et true om til at blive læst som false, eller omvendt. (udtales **Not Equal**)
**and** og  **or** benyttes til f.eks. at 2 udtryk sammen, hvor enten begge skal være true (and), eller hvor mindst 1 af dem skal være true (eller)



Det er vigtigt at kende til de forskellige logiske, tildelings, sammenlignigns, og matematiske operatorer, når der arbejdes med løkker og betingelser.


## Øvelser - operatorer

## ```Øvelse:``` Operatorer 1
1. Opret et nyt dokument kaldet **operatorer.js** i dit Bootcamp repository
1. Operatorerøvelser frem til og med nr 5, løses i det dokument



## ```Øvelse:``` Operatorer 2 
inde på https://www.w3schools.com/js/js_operators.asp under afsnittet **JavaScript Arithmetic Operators** er der vist 7 operatorer.

1. opret to variabler med to forskellige tal værdier, f.eks. kald dem `forste` og `anden` 
1. console.log resultatet af at lægge de to variabler sammen, benyt **+**
1. console.log resultatet af af at trække dem fra hinanden, benyt **-**
1. console.log resultatet af at gange dem med hinanden, benyt __*__
1. console.log resultatet af at dividere dem med hinanden, benyt **/**
1. console.log hvor mange hele gange den første variabel går op i den anden variabel, benyt modulus **%**
1. console.log den første variabel, efter du har lagt 1 til med **++** operatoren.
1. console.log den anden variabel, efter du har trukket 1 fra med **--** operatoren.



## ```Øvelse:``` Operatorer 3
inde på https://www.w3schools.com/js/js_operators.asp under afsnittet **JavaScript Assignment Operators** er der 6 operatorer.
1. Opret en variabel med et valgfrit tal
1. Opret en anden variabel med et andet valgfrit tal
1. Skriv 5 eksempler, hvor du skriver koden som det står under **Example** i tabellen med operatorerne: (her er et eksempel)
```javascript
let x = 2;
let y = 5;
x += y;
console.log(x);
```



## ```Øvelse:``` Operatorer 4
Opret en if sætning der kræver at 2 betingelser er opfyldt, du må gerne benytte variabler så du kan afprøve med forskellige værdier.
_betingelserne kunne være 2 variabler med tal, hvor f.eks. det ene er mindre en 10 og det andet større en 10_



## ```Øvelse:``` Operatorer 4 
Gør som i øvelse 4, men denne gang er kravet at bare 1 af betingelserne skal være opfyldt.
 


## ```Øvelse:``` Operatorer 6 
Opret en **operatorer.md** fil og benyt markdown til kort at beskrive hvad hver af de følgende operatoerer gør, kom med et eksempel ved hver af operatorene, på hvordan den kan benyttes.

* =
* == 
* === 
* !
* != 
* !==
* <
* \>
* <=
* \>=
* \+
* \-
* \*
* /
* %
* &&
* || 



---


[tilbage til Bootcamp forsiden](README.md)