var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini

/*function baca() {
    readBooks(10000, books[0], function(x) { console.log(x) })
    readBooks(10000, books[1], function(x) { console.log(x) })
}*/




function baca(waktu, books, indeks = 0) {
    if (indeks < books.length) {
        readBooks(waktu, books[indeks], function(sisa) {
            if (sisa > 0) {
                baca(sisa, books, indeks + 1)
            }
        })
    } else {
        console.lof(10000, books)
    }

}
baca(10000, books)