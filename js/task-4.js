class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    getMail() {
        return this.email + ' - ' + this.name;
    }

    changeMail (newMail) {
        this.email = newMail;
    }
  }
  
  const mango = new User("Anna", "mango@mail.com"); // "Mango mango@mail.com"
  console.log(mango); // {}

  console.log(mango.getMail());

