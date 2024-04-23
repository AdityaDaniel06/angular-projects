export class AuthService {
  loggedIn: boolean = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      } , 1000);
    });
    return promise;
  }
// to fake a login
  login() {
    this.loggedIn = true;
  }
  logout() {
    this.loggedIn = false;
  }
}
