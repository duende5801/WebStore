import { Injectable } from '@angular/core';
import { User } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userAccts: User[] = [];

  constructor() { }
  checkPassword(userName: string, password: string): boolean {
    let result = false;
    this.userAccts = JSON.parse(localStorage.getItem('userObj'));
    // always returns true :(
    if (this.userAccts.filter (x => {
      (x.uName === userName) && (x.password === password)
    })) {
      result = true;
    }
    return result;
  }
  setUserData(userData: User) {
    this.userAccts.push(userData);
    localStorage.setItem('userObj', JSON.stringify(this.userAccts));
    console.log('this is the User Service array', this.userAccts);
  }
  checkIfUserExists(userName: string): boolean {
    // going to search for user name so there are no dups
    let result = false;
    if (this.userAccts.find(x => userName.toUpperCase() === x.uName) !== undefined) {
      result = true;
    }
    return result;
  }
}
