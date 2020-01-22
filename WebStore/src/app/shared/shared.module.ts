import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubtotalPipe } from './pipes/subtotal.pipe';



@NgModule({
  declarations: [SubtotalPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
