//membuat tipe objek
function Segitiga(a,t){
    this.alas=a;
    this.tinggi=t;
}

Segitiga.prototype.luas=function(){
    return this.alas*this.tinggi/2;
}

//membuat objek dari tipe segitiga
let obj = new Segitiga(4,5);

