import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userId;
  editForm: FormGroup = new FormGroup({
    password: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(function (param) {
      this.userId = param['id'];
    });
  }
  editUser() {
    this.userService
      .updateUser({
        ...this.editForm.value,
        id: this.userId,
      })
      .subscribe(function (result) {
        this.editForm.reset();
      });
  }
}
