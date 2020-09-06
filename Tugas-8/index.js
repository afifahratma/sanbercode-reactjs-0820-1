var readBooks = require('./callback.js')

var books = [
    { name: 'LOTR', timeSpent: 3000 },
    { name: 'Fidas', timeSpent: 2000 },
    { name: 'Kalkulus', timeSpent: 4000 },
    { name: 'komik', timeSpent: 1000 }
]

// Tulis code untuk memanggil function readBooks di sini
var waktu = 10000

readBooks(waktu, books[0], function (time) {
    readBooks(time, books[1], function (time) {
        readBooks(time, books[2], function(time){
            readBooks(time, books[2], function(time){
                return time
            })
        })
    })

})




/* function baca(waktu, books, indeks = 0) {
    if (indeks < books.length) {
        readBooks(waktu, books[indeks], function(sisa) {
            if (sisa > 0) {
                baca(sisa, books, indeks + 1)
            }
        })
    } else {
        console.log(10000, books)
    }

}
baca(10000, books) */