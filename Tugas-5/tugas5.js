console.log("----Soal 1----")
    //SOAL 1
function halo() {
    return "Halo Sanbers!"
}
console.log(halo()) // "Halo Sanbers!" 

console.log("")
console.log("----Soal 2----")
    //soal 2
function kalikan() {
    return num1 * num2
}
var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

console.log("")
console.log("----Soal 3----")
    //SOAL 3
function introduce(name, age, adress, hobby) {
    return introduce = "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + adress + ", dan saya punya hobby yaitu " + hobby + "!"
}
var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!"

console.log("")
console.log("----Soal 4----")
    //SOAL 4
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku", 1992]
var daftarPesertaobj = {
    Nama: arrayDaftarPeserta[0],
    JenisKelamin: arrayDaftarPeserta[1],
    Hobi: arrayDaftarPeserta[2],
    TahunLahir: arrayDaftarPeserta[3]
}
console.log(daftarPesertaobj);

console.log("")
console.log("----Soal 5----")
    //SOAL 5
var ada = true
var tidak = false
var dataBuah = [{
        nama: "strawberry",
        warna: "merah",
        adaBijinya: tidak,
        harga: 9000
    },
    {
        nama: "jeruk",
        warna: "oranye",
        adaBijinya: ada,
        harga: 8000
    },
    {
        nama: "Semangka",
        warna: "Hijau & Merah",
        adaBijinya: ada,
        harga: 10000
    },
    {
        nama: "Pisang",
        warna: "Kuning",
        adaBijinya: tidak,
        harga: 5000
    }
]

console.log(dataBuah[0]);

console.log("")
console.log("----Soal 6----")
    //SOAL 6
var dataFilm = []

function tambahFilm(nama, durasi, genre, tahun) {
    dataFilm.push({ nama, durasi, genre, tahun })
}
tambahFilm("Harry Potter and the Half-Blood Prince", "2 jam 34 menit", "Fantasy", 2009);
console.log(dataFilm);