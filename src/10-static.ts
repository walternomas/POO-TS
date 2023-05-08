/**
 * Estáticos: Haciendo nuestra propia Math
 */
console.log('Math.PI', Math.PI)
console.log('Math.max', Math.max(1,2,2,8,1,0))

class MyMath {
  static readonly PI = 3.14

  static max(...numbers: number[]): number{
    //return numbers.reduce((max,item) => max >= item ? max : item, -Infinity);
    return numbers.reduce((max,item) => max >= item ? max : item); // por defecto, si no se pasa, toma el primer elemento
  }
}

// const math = new MyMath();
// math.PI
console.log('MyMath.PI', MyMath.PI);
console.log('MyMath.max', MyMath.max(122,2,1,123,9)); // no se pueden poner ceros a la izquierda
const numbers = [12,2,1,1112,9,3000]
console.log('MyMath.max', MyMath.max(...numbers));
console.log('MyMath.max', MyMath.max(-1, -9, -8));

