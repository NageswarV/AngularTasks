import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewsModule } from '../views/views.module';
import {UserDetailsComponent} from '../views/user-details/user-details.component';

const manageRout : Routes=[{
  path :'',component:ManageComponent,
  children: [{ path: ':id', component: UserDetailsComponent  }]
}];


@NgModule({
  declarations: [ManageComponent],
  imports: [
    ViewsModule,
    CommonModule,
    RouterModule.forChild(manageRout)
  ],
  exports:[ManageComponent]
})
export class ManageModule { }
