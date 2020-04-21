import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { FormsModule ,ReactiveFormsModule}   from '@angular/forms';
import { UserEditComponent } from './user-edit/user-edit.component';
import { FullnamePipe } from './fullname.pipe';


@NgModule({
  declarations: [UserComponent, UserListComponent, UserDetailsComponent, UserCreateComponent, UserEditComponent, FullnamePipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[UserComponent,UserListComponent,UserDetailsComponent]
})
export class ViewsModule { }
