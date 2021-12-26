// let ComplexNumberPrototype = {real: 0,
//     imaginary:0,
//      print: function()
//      {
//          console.log(this.real + " + " + this.imaginary + "i");
//      }
//     };

// function createComplexNumber (real, imaginary) {
//     let complex = Object.create(ComplexNumberPrototype);
//     complex.real = real;
//     complex.imaginary = imaginary;
//     return complex;
// }

// let c1 = createComplexNumber(4,6);
// c1.print();

function ComplexNumber(real, imaginary) {
  this.real = real;
  this.imaginary = imaginary;
  this.print = function () {
    console.log(this.real + " , " + this.imaginary + "i");
  };
  this.add = function (theOtherComplexNumber) {
    let newReal = this.real + theOtherComplexNumber.real;
    let newImaginary = this.imaginary + theOtherComplexNumber.imaginary;
    let result = new ComplexNumber(newReal, newImaginary);

    return result;
  };

  this.subtract = function (theOtherComplexNumber) {
    let newReal = this.real - theOtherComplexNumber.real;
    let newImaginary = this.imaginary - theOtherComplexNumber.imaginary;
    let result = new ComplexNumber(newReal, newImaginary);

    return result;
  };

  this.multiply = function (theOtherComplexNumber) {
    let newReal = this.real * theOtherComplexNumber.real;
    let newImaginary = this.imaginary * theOtherComplexNumber.imaginary;
    let result = new ComplexNumber(newReal, newImaginary);

    return result;
  };

  this.divide = function (theOtherComplexNumber) {
    let newReal = this.real / theOtherComplexNumber.real;
    let newImaginary = this.imaginary / theOtherComplexNumber.imaginary;
    let result = new ComplexNumber(newReal, newImaginary);

    return result;
  };
}

let c1 = new ComplexNumber(5, 6);
let c2 = new ComplexNumber(7, 3);

let c3 = c1.add(c2);
c3.print();
delete c3.print;
// c3.print();

let c4 = c1.subtract(c2);
c4.print();

let c5 = c1.multiply(c2);
c5.print();

let c6 = c1.divide(c2);
c6.print();
