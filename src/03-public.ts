/**
 * Acceso Público: Aprendiendo el acceso por defecto de TS
 */
export class MyDate {
  public year: number
  public month: number
  public day: number

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') { // literal type
    if(type === 'days') {
      this.day += amount;
    }
    if(type === 'months') {
      this.month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(2023, 5, 7);
console.log(myDate.day)
myDate.day = 12
console.log(myDate.day)
