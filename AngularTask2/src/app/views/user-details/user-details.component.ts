import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private usersService: UserService
  ) {}
  user: any;
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.user = this.usersService.users.find((u) => u.id === +param['id']);
    });
  }
}
