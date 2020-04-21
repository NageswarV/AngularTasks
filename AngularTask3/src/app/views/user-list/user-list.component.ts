import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {}
  @Input() status: any;
  @Output() emitId = new EventEmitter<number>();
  @Output() updateUserEmit = new EventEmitter<number>();
  users: any;
  ngOnInit(): void {
    this.userService.getUsers().subscribe((result) => {
      this.users = result as any;
    });
  }
  showDetails(id: number): void {
    this.emitId.emit(id);
  }
  updateStatus(id: number): void {
    for (let user of this.users) {
      if (user.id === id && user.isDeleted) user.isDeleted = false;
      else {
        if (user.id === id && !user.isDeleted) user.isDeleted = true;
      }
    }
  }
  updateUser(id: number) {
    this.updateUserEmit.emit(id);
  }
}
