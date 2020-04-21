import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageComponent } from './manage.component';
import { Router } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing'
describe('ManageComponent', () => {
  let component: ManageComponent;
  let fixture: ComponentFixture<ManageComponent>;
  let router :Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageComponent ],
      imports :[RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageComponent);
    component = fixture.componentInstance;
    router=TestBed.inject(Router);
    fixture.detectChanges();
    
  });

  it('should call navigate', () => {
    spyOn(router,'navigate');
    component.showDetails(1);
    expect(router.navigate).toHaveBeenCalledWith(['manage',1]);
  });
  it('should call navigate', () => {
    spyOn(router,'navigate');
    component.newUser();
    expect(router.navigate).toHaveBeenCalledWith(['manage','create']);
  });
  it('should call navigate', () => {
    spyOn(router,'navigate');
    component.editUser(1);
    expect(router.navigate).toHaveBeenCalledWith(['manage/edit',1]);
  });
});
