import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
})
export class ManageComponent implements OnInit {
  constructor(private router: Router) {}
  status = 'manage';
  ngOnInit(): void {}
  showDetails(id: number) {
    this.router.navigate(['manage', id]);
  }
  newUser() {
    this.router.navigate(['manage', 'create']);
  }
  editUser(id: number) {
    this.router.navigate(['manage/edit', id]);
  }
}
