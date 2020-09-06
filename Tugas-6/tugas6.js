console.log("----Soal 1----")
    //SOAL 1
const luas = (phi, r) => {
    return phi * r * r
}
console.log("Luas lingkaran yang jari jarinya 7 adalah ", luas(3.14, 7))

const keliling = (phi, r) => {
    return 2 * phi * r
}
console.log("Keliling lingkaran yang jari jarinya 7 adalah ", keliling(3.14, 7))


console.log("\n")
console.log("----Soal 2----")
    //SOAL 2
let kalimat = ""
const tambahKata = (str) =>{
    kalimat = `${kalimat} ${str}`
}

tambahKata("saya")
tambahKata("adalah")
tambahKata("seorang")
tambahKata("frontend")
tambahKata("developer")

console.log(kalimat)
/* let str1 = "saya"
let str2 = "adalah"
let str3 = "seorang"
let str4 = "frontend"
let str5 = "developer"

function tambahKata(str1, str2, str3, str4, str5) {
    return kalimat = `${str1} ${str2} ${str3} ${str4} ${str5}`
}

console.log(tambahKata(str1, str2, str3, str4, str5))

 */


console.log("\n")
console.log("----Soal 3----")
    //SOAL 3
const newFunction = (firstName, lastName) => {
    return {
        firstName,
        lastName,
        fullName: () => {
            console.log(`${firstName}`, `${lastName}`)
            return
        }
    }
}

//Driver Code 
newFunction("William", "Imoh").fullName()


console.log("\n")
console.log("----Soal 4----")
    //SOAL 4
const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
}
const { firstName, lastName, destination, occupation, spell } = newObject
// Driver code
console.log(firstName, lastName, destination, occupation)


console.log("\n")
console.log("----Soal 5----")
    //SOAL 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west, ...east]
    //Driver Code
console.log(combined)