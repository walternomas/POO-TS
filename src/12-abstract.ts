/**
 * Clases abstractas: Restringir la creación de objetos base
 */

import { Animal, Dog } from "./09-protected";

// const animal = new Animal('elite'); // no puedo porque definí la clase base Animal como abstracta
// animal.greeting()

const cheis = new Dog('cheis', 'nico')
cheis.greeting()
cheis.woof(2)
