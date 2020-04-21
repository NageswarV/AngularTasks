import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
   users = [
    {
      id:1,
      firstName:'user',
      lastName: 'one',
      age: 20,
      login: 'userone',
      password: 'user',
      isDeleted: true
  },
  {
    id:2,
    firstName:'user',
    lastName: 'two',
    age: 20,
    login: 'usertwo',
    password: 'user',
    isDeleted: false
},    {
  id:3,
  firstName:'user',
  lastName: 'three',
  age: 20,
  login: 'userthree',
  password: 'user',
  isDeleted: true
},    {
  id:4,
  firstName:'user',
  lastName: 'four',
  age: 20,
  login: 'userfour',
  password: 'user',
  isDeleted: false
},    {
  id:5,
  firstName:'user',
  lastName: 'five',
  age: 20,
  login: 'userfive',
  password: 'user',
  isDeleted: false
},
 ];
}
