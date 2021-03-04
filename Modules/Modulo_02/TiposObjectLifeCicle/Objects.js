const person = {
  name: "EuricoMagal",
  age: 23,

  //STRING: 1 se não for primitivo, chama o valueOf()
  toString() {
    // console.log('opa, passei aqui');
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  //NUMBER: se não for primitivo, chama o toString()
  valueOf() {
    // return 224
    return { hey: "Dude" };
  },

  //ele manda em tudo!!!
  [Symbol.toPrimitive](coercionType) {
    // console.log('trying to convert to', coercionType);

    const typpes = {
      string: JSON.stringify(this),
      number: "007",
    };

    return typpes[coercionType] || typpes.string;
  },
};

// console.log(''.concat(person));

// console.log('toString:',String(person));
// console.log('valueOf', Number(person));

// depois de add o primitive
console.log("String:", String(person));
console.log("Number:", Number(person));
// chama a coversão default
console.log("Date:", new Date(person));
