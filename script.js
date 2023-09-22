"use strict";

/**            BOUCLE
 *              FOR
 * Declarer une variable a qui est egale à un entier positif
 * 
 * Faire un console log de 'OKLM' autant de fois que le valeur de a
 * 
 * 
 */

let a=4;
for(let i=0;i<a;i++){
    console.log('OKLM');
}
//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
let a2=3;
while(a2<9){
    a2++
    if(a2==7){
        continue
    }
    if(a2==8){
        break
    }
    console.log(a2);
}
console.log('Jai cassé la boucle au bout de '+a2+" tours");
