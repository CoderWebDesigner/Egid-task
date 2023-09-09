import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

const components = [
  LayoutComponent
]

@NgModule({
  declarations: [
    HeaderComponent,
    ...components
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    ...components
  ]
})
export class LayoutModule { }
