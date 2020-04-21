import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageComponent } from './manage.component';
import { RouterModule, Routes } from '@angular/router';
import { ViewsModule } from '../views/views.module';
import { UserDetailsComponent } from '../views/user-details/user-details.component';
import { UserCreateComponent } from '../views/user-create/user-create.component';
import { UserEditComponent } from '../views/user-edit/user-edit.component';
const manageRout: Routes = [
  {
    path: '',
    component: ManageComponent,
    children: [
      { path: 'create', component: UserCreateComponent },
      { path: ':id', component: UserDetailsComponent },
      { path: 'edit/:id', component: UserEditComponent },
    ],
  },
];

@NgModule({
  declarations: [ManageComponent],
  imports: [ViewsModule, CommonModule, RouterModule.forChild(manageRout)],
  exports: [ManageComponent],
})
export class ManageModule {}
