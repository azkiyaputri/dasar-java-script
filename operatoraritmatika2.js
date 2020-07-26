var readline = require ('readline-sync');

var a = parseInt(readline.question("Masukkan Nilai a\n"));
var a = parseInt(readline.question("Masukkan Nilai b\n"));

function PembagianBulat(a,b){
    var c=a/b;
    if(c>=0){
        return Math.floor(c);
    }else{
        return Math.ceil(c);
    }
}