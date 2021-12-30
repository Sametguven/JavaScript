//Object icinde metot nasil ekleriz
//Daha fazla bilgi yada daha farkli bilgi tutmak istersek

let user1 = {
    firstName: "Bilgin", 
    lastName: "Uzman", 
    score: [1, 2, 3, 4], 
    isActive: true, 
    shortName: function() {
      return `${this.firstName[0].toUpperCase()}. ${this.lastName}`}
}
console.log(user1)

//--------------------------------------------------------------------

let araba = {
    name: "Murat", 
    model: "1980", 
    start () {
        console.log("ÇALIŞIYOR")
    }
}

araba.start()
araba["start"]()
//-------------------------------------------------------------
let city = {
    adi: "İstanbul", 
    no: 34, 
    getir() {
        console.log(this.no + " " + this.adi) 
    }
}
console.log(city)
city.getir()

