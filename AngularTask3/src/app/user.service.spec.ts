import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
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
    service.getUsers().subscribe((data) => {
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it('should return particular user', () => {
    const id = '9';
    service.getUser(id).subscribe((data) => {
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne(
      'http://localhost:8080/users/' + id
    );
    expect(req.request.method).toEqual('GET');

    req.flush([]);

    httpTestingController.verify();
  });

  it('should return create user', () => {
    const user = {
      firstname: 'thh',
      lastname: 'uui',
      age: 90,
      login: 'sd',
      password: 'uu8',
    };
    service.createUser(user).subscribe((data) => {
      expect(data).toEqual([]);
    });

    const req = httpTestingController.expectOne('http://localhost:8080/users');
    expect(req.request.method).toEqual('POST');

    req.flush([]);

    httpTestingController.verify();
  });
});
