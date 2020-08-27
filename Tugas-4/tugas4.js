// SOAL 1

var i = 2;
//looping 1
console.log("LOOPING PERTAMA");
while(i <= 20){
    console.log(i + "- I love coding")
    i += 2
}

//looping 2
console.log("LOOPING KEDUA");
var j = 20;
while(j > 0){
    console.log(j + "- I will become a frontend developer")
    j -= 2;
}

console.log("")
console.log("----Jawaban Soal 2-----")

//SOAL 2
for(var a = 1; a <= 20; a++){
    if(a%2==0){
    console.log(a + "- Berkualitas")
    } else if(a%3==0){
        console.log(a + "- I Love Coding")
    } else{
    console.log(a + "- Santai")
}
}


console.log("")
console.log("----Jawaban Soal 3-----")
//SOAL 3
var tagar=" ";
for(var b=1; b<=7;b++){
       tagar = "#" + tagar
       console.log(tagar) 
}


console.log(" ")
console.log("----Jawaban Soal 4-----")
//SOAL 4

var kalimat="saya sangat senang belajar javascript";
console.log(kalimat.split(" "));

console.log("")
console.log("----Jawaban Soal 5-----")

//Soal 5
var daftarBuah = ["2. Apel", "5. Jeruk", "3. Anggur", "4. Semangka", "1. Mangga"];
daftarBuah.sort()
console.log(daftarBuah.join("\n"))
