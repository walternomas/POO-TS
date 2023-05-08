/**
 * Setters: Una forma de modificar atributos.
 *          Todos deben retornar void.
 */

export class MyDate {
  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this._month)
    return `${day}/${month}/${this.year}`
  }

  private addPadding(value: number) {
    if(value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') { // literal type
    if(type === 'days') {
      this._day += amount;
    }
    if(type === 'months') {
      this._month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  }

  public get day() {
    return this.addPadding(this._day)
  }

  public get isLeapYear(): boolean {
    if(this.year % 400 === 0) return true;
    if(this.year % 100 === 0) return false;
    return this.year % 4 === 0;
  }

  public get month(): string {
    return this.addPadding(this._month)
  }

  public set month(value: number) {
    if(value < 1 || value > 12) {
      throw new Error("Invalid month")
    }
    this._month = value
  }
}

const myDate = new MyDate(2023, 5, 7);
console.log(myDate.printFormat())
myDate.month = 4
console.log('run', myDate.month)
myDate.month = 78
console.log('not run', myDate.month)

