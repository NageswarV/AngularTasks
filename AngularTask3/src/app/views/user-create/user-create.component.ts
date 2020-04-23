import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/user.service';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
})
export class UserCreateComponent implements OnInit {
  newForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
  });
  constructor(private userService: UserService) {}

  ngOnInit(): void {
  }
  newUser() {
    this.userService
      .createUser(this.newForm.value)
      .subscribe(function (response) {
        this.newForm.reset();
      });
  }
}
