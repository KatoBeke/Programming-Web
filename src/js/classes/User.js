export class User {
    constructor(firstname,lastname) {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    getFullname() {
      console.log(this.firstname + " " + this.lastname);
    }
  }


export class Teacher extends User {
    constructor(firstname,lastname,degree) {
      super(firstname,lastname);
      this.degree = degree;
    }
  
    teach() {
      console.log("Hij is aan het lesgeven!")
    }
  }