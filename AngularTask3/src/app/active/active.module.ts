import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActiveComponent } from './active.component';
import { ViewsModule } from '../views/views.module';

@NgModule({
  declarations: [ActiveComponent],
  imports: [ViewsModule, CommonModule],
  exports: [ActiveComponent],
})
export class ActiveModule {}
