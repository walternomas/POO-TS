/**
 * Interfaces: Implementando en las clases
 */

export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;
  disconnect(): void;
  isConnected(name: string): boolean;
}

// const driver: Driver = {
//   database: 'mysql',
//   password: 'password',
//   port: 3000
// }

class PostgresDriver implements Driver {
  constructor(
    public database: string,
    public password: string,
    public port: number
  ) {}

  connect(): void {

  }
  disconnect(): void {

  }
  isConnected(name: string): boolean {
    return true;
  }
}
