import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './check-otp.routing'

import { CheckOtpListComponent } from './list/check-otp-list.component'
import { CheckOtpEditComponent } from './edit/check-otp-edit.component';
import { CheckOtpAddComponent } from './add/check-otp-add.component';
import { CheckOtpSharedModule } from './check-otp-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,CheckOtpSharedModule,
        ROUTING
    ],
    declarations: [CheckOtpListComponent,CheckOtpEditComponent,CheckOtpAddComponent],
    exports: [RouterModule],
    providers: []
})
export class CheckOtpModule { }


