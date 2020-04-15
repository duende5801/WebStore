import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { PasswordModule } from 'primeng/password';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    SidebarModule,
    PasswordModule,
    SharedModule
  ]
})
export class ViewsModule { }
