export class errorUser {
  constructor(name) {
    this.name = name;
    this.error = 'background:red; color:white';
    this.success = 'background:green; color:white';
  }
  errors(msj) {
    console.log(`'%c ${msj}', '${this.error}'`);
  }
  success(msj) {
    console.log(`'%c${msj}'`, 'backgroundColor:red;', 'color:white');
  }
}
