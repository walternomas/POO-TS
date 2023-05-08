/**
 * Herencia: Abstraer comportamientos
 */
export class Animal {
  constructor(public name: string) {}

  move() {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }
}

export class Dog extends Animal {
  constructor(
    name: string, // no ponemos public porque no queremos una propiedad interna, solo pasarla al super
    public owner: string
  ) {
    super(name)  //solo se puede llamar desde el constructor del hijo
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log('woof!')
    }
  }
}

const fifi = new Animal('fifi');
fifi.move();
console.log(fifi.greeting());

const cheis = new Dog('cheis', 'Nico');
cheis.move();
console.log(cheis.greeting());
cheis.woof(5);
