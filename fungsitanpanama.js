let readline=require('readline-sync');

function tambah(a,b){
    return a+b;
}

let a=parseFloat(readline.question('masukkan Nilai A: '));
let b=parseFloat(readline.question('masukkan Nilai B: '));

let hasil=tambah(a,b);
console.log(`${a}+${b}=${c}`);