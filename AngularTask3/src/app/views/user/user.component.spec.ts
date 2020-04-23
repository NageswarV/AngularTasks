import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { UserService } from 'src/app/user.service';
describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[{provide: UserService}],
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
    spyOn(component.evntId,'emit');
    component.showDetails(1);
    expect(component.evntId.emit).toHaveBeenCalledWith(1);
    
  });
  it('should emit event',function(){
    spyOn(component.statusUpdateEmit,'emit');
    component.upDateStatus()
    expect(component.statusUpdateEmit.emit).toHaveBeenCalled();
  });
  it('should emit event',function(){
    spyOn(component.updateUserEmit,'emit');
    component.updateUser(1)
    expect(component.updateUserEmit.emit).toHaveBeenCalledWith(1);
  });
});
