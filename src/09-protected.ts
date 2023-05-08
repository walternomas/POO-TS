/**
 * Acceso protegido: Heredando propiedades
 */
export abstract class Animal {
  constructor(protected name: string) {} // protected es un "privado con herencia"

  move () {
    console.log("Moving along!");
  }

  greeting() {
    return `Hello, I'm ${this.name}`
  }

  protected doSomething() {
    console.log("Do something");
  }
}

export class Dog extends Animal {
  constructor(
    name: string,
    public owner: string
  ) {
    super(name)
  }

  woof(times: number) {
    for (let index = 0; index < times; index++) {
      console.log(`woof! ${this.name}`) // estoy heredando name
    }
    this.doSomething();
  }

  move() {
    console.log('moving as a dog');
    super.move();                       // no puede ser una arrow function para poder heredarse
  }
}

const cheis = new Dog('cheis', 'Nico');
//cheis.name = 'otro nombre'; // no puedo cambiar porque es protegida
cheis.woof(1);
cheis.move();
