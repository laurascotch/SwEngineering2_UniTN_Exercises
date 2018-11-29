## Files
k_invert.js è una funzione che presi in input un array di interi positivi e un intero k positivo, sposta gli ultimi k elementi dell'array in testa allo stesso. 

k_invert.test.js sono i test case per jest.

## Usare Jest per testare

#### Per iniziare
Per prima cosa bisogna installare Jest con `npm install --save-dev jest`
Quindi si aggiungono le seguenti righe al file `package.json`:
```javascript
{
    "scripts": {
        "test": "jest"
    }
}
```

Infine si esegue il test con il comando `npm run test`

Esempio di console log in seguito al test:
```
 PASS  ./k_invert.test.js
  √ troppi parametri (6ms)
  √ troppo pochi parametri
  √ sposta tutto l'array (1ms)
  √ non spostare nulla (1ms)
  √ spostane 3
  √ cerca di spostarne troppi
  √ cerca di spostarne troppi (1ms)
  √ l'array non è di soli interi positivi
  √ l'array non è di soli interi positivi
  √ k non è un intero positivo (1ms)
  √ l'array ha almeno un non numero
  √ l'array non è composto di soli interi
  √ l'array non è un array (1ms)
  √ l'array è vuoto

Test Suites: 1 passed, 1 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        15.181s
Ran all test suites.
```
