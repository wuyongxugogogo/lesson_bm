const Person = function(name){
    this.name = name;
    // return 1
    return {
        name: 'Carson'
    }
}

Person.prototype.sayName = function(){
    console.log(this.name)
}

const person = new Person('Tony',18);
console.log(person.name)
console.log(person.sayName)
console.log(person instanceof Person)