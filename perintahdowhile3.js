let data = [10,20,30,40,50,60];
let jumlah;
let x;

jumlah=0;
let x;
do {
    jumlah += data[x];
    x++;
} while (x<data.length);

console.log(`Jumlah Data = ${jumlah}`);