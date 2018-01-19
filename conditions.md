# WI81 Intro til betingede sætninger

## Forventninger til eleverne

### Når dagen er omme
* Du kan genbruge kode, der skal opstiller en betinget kodeblok (if sætning).
* Du kan genbruge kode, der skifter (switches) alt efter en variabels indhold.



### Efter ca. en måned på hovedforløbet
* Udenad kan du anvende betingede sætninger uden at være i tvivl om syntaks.

---

## Oplæg - betingelser 

## if 
```javascript
if(true){
   console.log('kodeblokken udføres');
}
```

## if - else 
```javascript
if(true){
   console.log('kodeblokken udføres');
}else{
   console.log('kodeblokken springes over');
}
```




## if - else if - else
```javascript
let navn = "Carl";

if(navn == "Albert"){
   console.log('lander kun her hvis navn er Albert');
}else if(navn == "Benny"){
   console.log('lander kun her hvis navn er Benny');
}else{
   console.log('lander her hvis navn noget andet end Albert eller Benny');
}
```


## ternary operator 
```javascript
let workHarder = true;
let result = workHarder ? "Jep, der skal arbejdes hårdere" : "Nope, der arbejdes fint";
console.log(result);
```

## switch - case
```javascript
let name = "Egon";
switch (name) {
   case "Egon":
      console.log(name, 'han har en plan');
      break;
   case "Finn":
      console.log(name, 'ønsker medvind på cykelstierne');
      break;
   case "Georg":
      console.log(name, 'får en lys ide');

   case "Hjælper":
      console.log(name, 'er lille');
      break;
   default:
      console.log(name, 'er ukendt');
      break;
}
```

Læs mere, hvis man har lyst eller er lidt i tvivl om syntax:

https://www.w3schools.com/js/js_if_else.asp

https://www.w3schools.com/js/js_switch.asp


# Øvelser - betingelser
Det er ok hvis man ikke når igennem alle øvelserne inden det næste oplæg, der vil være tid til fordybelse inden bootcamp ugerne afsluttes.

## ```Øvelse:``` Betingede sætninger 1 
1. Opret et nyt dokument kaldet **betingelser.js** i dit Bootcamp repository
1. Betingede sætning øvelser frem til og med nr 6, løses i det dokument



## ```Øvelse:``` Betingede sætninger 2 
1. Opret en boolean variabel, med værdien **true**
1. Skriv en betinget sætning der udskriver 'hej verden' i konsollen, hvis variablens værdi er sand
1. Ret variablens værdi til **false** og se om der logges i konsollen.



## ```Øvelse:``` Betingede sætninger 3 
https://www.w3schools.com/js/js_random.asp

1. Opret en variabel og tildel den et tilfældigt tal mellem 0 og 10
1. Udskriv variablens værdi med en console.log
1. Opret en if-sætning der udskriver 'højere end 5' hvis variablens værdi er højere end 5 
1. Tilføj en else-blok til if-sætningen, hvor der udskrives 'lavere end 5' 



## ```Øvelse:``` Betingede sætninger 4
Løs samme problem som i øvelse 2, men benyt en **ternary operator** i stedet for **if - else**



## ```Øvelse:``` Betingede sætninger 5
1. Opret en variabel med navnet på din favorit læskedrik
1. Opret en **if - else if - else** struktur hvor du udskriver en selvvalgt tekst, alt efter hvad variablen indeholder.  (f.eks kunne der udskrives "Cola er sødt", hvis variablen indeholder "cola")
1. Lav mindst 2 **else if** blokke




## ```Øvelse:``` Betingede sætninger 6
Løs samme problemstilling som i øvelse 5, men benyt **switch - case** istedet




## ```Øvelse:``` Betingede sætninger 7
1. Opret en **betingelser.md** i dit Bootcamp repository
1. Benyt markdown til at beskrive hvordan en if-else sætning fungerer i praksis. 
1. Sørg samtidig for at beskrive alle de tegn der skal benyttes i if-else strukturen.

---


[tilbage til Bootcamp forsiden](README.md)
