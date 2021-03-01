const person = {
  name: "EuricoMagal",
  age: 23,

  //STRING: 1 se não for primitivo, chama o valueOf()
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    },
    //NUMBER: 1 se não for primitivo, chama o toString()
    valueOf() {
        return 224
    }
};

// console.log(''.concat(person));

console.log(String(person));
console.log(Number(person));