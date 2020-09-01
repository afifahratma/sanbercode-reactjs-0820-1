console.log("----SOAL 1----")
    //SOAL 1
    //release 0
class Animal {
    constructor(name) {
        this.name = name
        this.legs = 4;
        this.cold_blooded = false;
    }
    get leg() {
        return this.legs
    }
    set leg(leg) {
        return this.legs = legs
    }
    get coldBlooded() {
        return this.cold_blooded
    }
    set coldBlooded(coldBlooded) {
        return this.cold_blooded = false
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false

//release 1
// Code class Ape dan class Frog di sini
class Frog extends Animal {
    constructor() {
        super()
    }
    jump() {
        return "hop hop"
    }
}

class Ape extends Animal {
    constructor(cold_blooded) {
        super(cold_blooded)
    }
    yell() {
        return "Auooo"
    }
}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"
console.log(sungokong.yell())

var kodok = new Frog("buduk")
kodok.jump() // "hop hop"
console.log(kodok.jump())

console.log("")
console.log("----SOAL 2")

//SOAL 2
class Clock {
    constructor({ template }) {
        this.template = template
        this.timer
    }

    render() {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }
    stop() {
        clearInterval(this.timer());
    }

    start() {
        this.render.bind(this)
        this.timer = setInterval(this.render.bind(this), 1000);
    }

}

var clock = new Clock({ template: 'h:m:s' });
clock.start();