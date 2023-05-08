import { Dog } from "./09-protected"

function getValue<myType>(value: myType) {
  return value
}

getValue<number>(12).toFixed()
getValue<string>('hola').toUpperCase()
getValue<number[]>([1,2,3]).forEach(()=> {})

const pitu = new Dog('pitu','wal')
console.log(getValue<Dog>(pitu).greeting())
// Promise<boolean>
// axios.get<string[]>
