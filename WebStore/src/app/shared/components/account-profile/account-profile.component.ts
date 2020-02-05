import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../interfaces/user';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-account-profile',
  templateUrl: './account-profile.component.html',
  styleUrls: ['./account-profile.component.scss']
})
export class AccountProfileComponent implements OnInit {
  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private uService: UserService) { }

  get fName() { return this.userForm.get('fName'); }
  get lName() { return this.userForm.get('lName'); }
  get uName() { return this.userForm.get('uName'); }
  get email() { return this.userForm.get('email'); }
  get password() { return this.userForm.get('password'); }

  acctUser: string;
  parseAcctUser: User;
  userStored: User[];

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      fName: ['', Validators.required],
      lName: ['', Validators.required],
      uName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  submitForm() {
    if (this.userForm.invalid) {
      alert('Hey Fix your errors!');
    } else {
      alert('Successful');
      this.acctUser = JSON.stringify(this.userForm.value);
      localStorage.setItem('userObj', this.acctUser);
      console.log(this.acctUser);
      }
    }
    setValue2() {
      this.parseAcctUser = JSON.parse(localStorage.getItem('userObj'));
      this.userForm.setValue(this.parseAcctUser);
      this.userStored.push(this.parseAcctUser);
      this.uService.setUserData(this.userStored);
      console.log(this.parseAcctUser);
  }

}
