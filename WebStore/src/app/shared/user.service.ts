import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userAccts: User[] = [];

  constructor() { }
  checkPassword(userName: string, password: string): boolean {
    // this.loggedInUser.userName = userName;
    return userName === this.userAccts[0].uName ? (password === this.userAccts[0].password ? true : false) : false;
  }
  setUserData(userData: User[]) {
    this.userAccts = userData;
    console.log(this.userAccts);
  }
}
