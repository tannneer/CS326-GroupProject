
export class User {
    constructor(email, username, password) {
      this.email = email;
      this.username = username;
      this.password = password;
    }
  
    getDetails() {
      return {
        email: this.email,
        username: this.username,
        password: this.password,
      };
    }
  }