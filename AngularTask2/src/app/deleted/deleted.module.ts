import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletedComponent } from './deleted.component';
import { ViewsModule } from '../views/views.module';



@NgModule({
  declarations: [DeletedComponent],
  imports: [
    ViewsModule,
    CommonModule
  ],
  exports:[DeletedComponent]
})
export class DeletedModule { }
