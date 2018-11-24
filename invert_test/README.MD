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

```
Esempio di console log in seguito al test:
PASS ./k_invert.test.js
  v sposta tutto l'array (29ms)
  v non spostare nulla (4ms)
  v spostane 3 (2ms)
  v cerca di spostarne troppi
  v l'array non è di soli interi positivi (1ms)
  v l'array non è di soli interi positivi
  v k non è un intero positivo (1ms)

  console.log k_invert.js:15
    [ 1, 3, 2, 6, 22 ]

  console.log k_invert.js:15
    [ 2, 6, 22, 1, 3 ]

Test Suites: 1 passed, 1 total
Tests:       7 passed, 7 total
Snapshots:   0 total
Time:        2.275s
Ran all test suites.
```