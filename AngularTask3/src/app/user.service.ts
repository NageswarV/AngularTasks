import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from './UserModel';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  getUsers() {
    return this.http.get<UserModel[]>('http://localhost:8080/users');
  }
  getUser(id: string) {
    return this.http.get('http://localhost:8080/users/' + id);
  }

  createUser(user: Partial<UserModel>) {
    return this.http.post('http://localhost:8080/users', user);
  }
  updateUser(user: Partial<UserModel>) {
    return this.http.put('http://localhost:8080/users/' + user.id, {
      password: user.password,
      age: user.age,
      isDeleted: user.isDeleted,
    });
  }
}
