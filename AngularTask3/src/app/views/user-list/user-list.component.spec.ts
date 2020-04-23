import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserListComponent } from './user-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {UserService} from '../../user.service'
describe('UserListComponent', () => {
  let component: UserListComponent;
  let fixture: ComponentFixture<UserListComponent>;
  let usersService: UserService;
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
  it('should emit showdetails event',()=>{
    spyOn(component.emitId, 'emit');
    component.showDetails(1);
    expect(component.emitId.emit).toHaveBeenCalledWith(1);
    
  });
  it('should emit event',()=>{
    spyOn(component.updateUserEmit, 'emit');
    component.updateUser(1);
    expect(component.updateUserEmit.emit).toHaveBeenCalledWith(1);
    
  });
  it(' ngOnInit should work',()=>{
    component.ngOnInit();
    expect(component.users).toBeDefined();

  })
});
