// soal 1
var kataPertama = "saya";
var kataKedua = "senang";
var kataKetiga = "belajar";
var kataKeempat = "javascript";

console.log(kataPertama, kataKedua.replace(/^./, kataKedua[0].toUpperCase()), kataKetiga, kataKeempat.toUpperCase()); 

// console.log(kataPertama.concat(kataKedua, kataKetiga, kataKeempat.toUpperCase()))

//soal 2

var kataPertama = "1";
var kataKedua = "2";
var kataKetiga = "4";
var kataKeempat = "5";

var hasil = parseInt(kataPertama) + parseInt(kataKedua) + parseInt(kataKetiga) + parseInt(kataKeempat) ;
console.log("hasil penjumlahan dari 1+2+4+5 adalah ", hasil);

//soal 3
var kalimat = 'wah javascript itu keren sekali'; 

var kataPertama = kalimat.substring(0, 3); 
var kataKedua = kalimat.substring(4,14); // do your own! 
var kataKetiga = kalimat.substring(15,18); // do your own! 
var kataKeempat = kalimat.substring(19,24); // do your own! 
var kataKelima = kalimat.substring(25,31); // do your own! 

console.log('Kata Pertama: ' + kataPertama); 
console.log('Kata Kedua: ' + kataKedua); 
console.log('Kata Ketiga: ' + kataKetiga); 
console.log('Kata Keempat: ' + kataKeempat); 
console.log('Kata Kelima: ' + kataKelima);


//soal 4
var nilai;
nilai = 78;

if(nilai >= 80 && nilai <= 100){
    console.log("A")
} else if (nilai >= 70 && nilai < 80){
    console.log("B")
} else if (nilai >= 60 && nilai < 70){
    console.log("c")
} else if (nilai >= 50 && nilai < 60){
    console.log("D")
} else {
    console.log("E")
}

//soal 5
var tanggal = 17;
var bulan = 8;
var tahun = 2000;

switch(bulan){
    case 1 :{
        bulan = "Januari"; break;}
    case 2 :{
        bulan = "Ferbuari"; break;}
    case 3 :{
        bulan = "Maret"; break;}
    case 4 :{
        bulan = "April"; break;}
    case 5 : {
        bulan = "Mei"; break;}
    case 6 :{
        bulan = "Juni"; break;}
    case 7 :{
        bulan = "Juli"; break;}
    case 8 :{
        bulan = "Agustus"; break;}
    case 9 :{
        bulan = "September"; break;}
    case 10 :{
        bulan = "Oktober"; break;}
    case 11 :{
        bulan = "November"; break;}
    case 12 :{
        bulan = "Desember"; break;}
}

var date = tanggal + " " + bulan + " " + tahun;
console.log(date)