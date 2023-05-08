/**
 * El Constructor: El método principal de nuestras clases
 */

export class MyDate {
  constructor(
    public year: number = 1993, // el acceso debemos colocarlo de forma obligatoria en esta forma acotada
    public month: number = 7,
    private day: number = 9
  ) {}

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
console.log('(2023,5,7) =>',myDate.printFormat());

const myDate2 = new MyDate();
console.log('() =>', myDate2.printFormat());

const myDate3 = new MyDate(2022);
console.log('(2022)', myDate3.printFormat());
