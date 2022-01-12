import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninComponent } from './signin/signin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VmessageModule } from '../shared/components/vmessage/vmessage.module';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    VmessageModule,
    RouterModule,
    FormsModule
  ],
  declarations: [SigninComponent, SignupComponent]
})
export class HomeModule { }
