
class User{
   
    constructor(username, password, email){
       this.username= username;
       this.password=password;
       this.email=email;
    }
get name(){
    return this.makeName()
}
    makeName(){
        return this.username + ' ' + this.email
    }

    static getTotal(){
        return 5
    }
}

let user = new User("aya",2020,"mabaoujaya@gmail.com")

console.log(user)
console.log(user.username)
console.log(user.makeName())
console.log(user.name)
console.log(User.getTotal())


let place = class Place{
    hashCode = ""

}
/*class User extends Person {
    constructor(name,password,email,age){
        super(name,password,email)
        this.age=age;

    }
}

let person = new Person("yassine",17,"yassine@gmail.com")
let users = new User("yassine",17,"yassine@gmail.com",24)

console.log( person instanceof User)*/

