class mocks {
  constructor(number, message) {
    this.number = number;
    this.message = message;
  }

  //Getters and setters
  getNumber() {
    return this.number;
  }

  getMessage() {
    return this.message;
  }

  verification() {
    console.log(`${this.getNumber()} request is ${this.getMessage()}`);
    return `${this.getNumber()} request is ${this.getMessage()}`;
  }
}
var owner = new mocks("0785825279", "approved");

owner.verification();
