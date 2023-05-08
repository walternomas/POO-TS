/**
 * Acceso Privado: Protegiendo nuestras propiedades y métodos
 */
export class MyDate {
  public year: number
  public month: number
  private day: number

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    const day = this.addPadding(this.day)
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
      this.day += amount;
    }
    if(type === 'months') {
      this.month += amount;
    }
    if(type === 'years') {
      this.year += amount;
    }
  }

  public getDay() {
    return this.addPadding(this.day)
  }
}

const myDate = new MyDate(2023, 5, 7);
console.log(myDate.printFormat());
console.log(myDate.getDay())
