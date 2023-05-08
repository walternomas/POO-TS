/**
 * Getters: Una forma de acceder a los atributos.
 *          Todos deben retornar un valor.
 */

export class MyDate {
  constructor(
    public year: number = 1993,
    public month: number = 7,
    private _day: number = 9
  ) {}

  public printFormat(): string {
    const day = this.addPadding(this._day)
    const month = this.addPadding(this.month)
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
      this.month += amount;
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
}

const myDate = new MyDate(2023, 5, 7);
console.log(myDate.printFormat())
console.log(myDate.day);
console.log(myDate.isLeapYear);
