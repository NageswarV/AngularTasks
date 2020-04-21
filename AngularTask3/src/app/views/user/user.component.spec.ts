import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UserService } from 'src/app/user.service';
import { of } from 'rxjs';
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService : UserService;
  const userServiceSpy = jasmine.createSpyObj('UserService', ['updateUser']);
  const getQuoteSpy = userServiceSpy.updateUser.and.returnValue(of([{}]));
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[{provide: UserService, useValue: userServiceSpy }],
      imports:[RouterTestingModule,HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should emit event',function(){
    fixture.detectChanges();
    spyOn(component.evntId,'emit');
    let eid:number=1;
    component.showDetails(eid);
    expect(component.evntId.emit).toHaveBeenCalledWith(eid);
    
  });
  it('should emit event',function(){
    fixture.detectChanges();
    spyOn(component.statusUpdateEmit,'emit');
    component.upDateStatus()
    expect(component.statusUpdateEmit.emit).toHaveBeenCalled();
  });
  it('should emit event',function(){
    spyOn(component.updateUserEmit,'emit');
    let eid:number=2;
    component.updateUser(eid)
    expect(component.updateUserEmit.emit).toHaveBeenCalledWith(eid);
  });
});
