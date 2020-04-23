import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import {HttpTestingController} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

describe('UserService', () => {
  let service: UserService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should get users', () => {
    service.getUsers().subscribe((results) => {
      expect(results).toEqual([]);
    });
    const request = httpTestingController.expectOne('http://localhost:8080/users');
    expect(request.request.method).toEqual('GET');
    request.flush([]);
    httpTestingController.verify();
  });

  it('should return particular user', () => {
    let u_id = '1';
    service.getUser(u_id).subscribe((results) =>expect(results).toEqual([]));
    const request = httpTestingController.expectOne(
      'http://localhost:8080/users/' + u_id
    );
    expect(request.request.method).toEqual('GET');
    request.flush([]);
    httpTestingController.verify();
  });

  it('should return create user', () => {
    let newuser = {
      firstname: 'user',
      lastname: 'one',
      age: 20,
      login: 'userone',
      password: 'password1',
    };
    service.createUser(newuser).subscribe((results) => {
      expect(results).toEqual([]);
    });
    const request = httpTestingController.expectOne('http://localhost:8080/users');
    expect(request.request.method).toEqual('POST');
    request.flush([]);
    httpTestingController.verify();
  });
});
