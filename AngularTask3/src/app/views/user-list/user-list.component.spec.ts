import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListComponent } from './user-list.component';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {UserService} from '../../user.service'
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usersService: UserService;
  const userServiceSpy = jasmine.createSpyObj('UsersService', ['getUsers']);
  const getQuoteSpy = userServiceSpy.getUsers.and.returnValue(of([{}]));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListComponent ],
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListComponent);
    component = fixture.componentInstance;
    usersService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit id from showdetails',()=>{
    fixture.detectChanges();
    spyOn(component.emitId, 'emit');
    let eid:number=8;
    component.showDetails(eid);
    expect(component.emitId.emit).toHaveBeenCalledWith(eid);
    
  });
  it('should emit id from updateUser',()=>{
    fixture.detectChanges();
    spyOn(component.updateUserEmit, 'emit');
    let eid:number=8;
    component.updateUser(eid);
    expect(component.updateUserEmit.emit).toHaveBeenCalledWith(eid);
    
  });
  it(' ngOnInit should work',()=>{
    fixture.detectChanges();
    component.ngOnInit();
    expect(component.users).toBeDefined();

  })
});
