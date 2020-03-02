import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './my-contact.routing'

import { MyContactListComponent } from './list/my-contact-list.component'
import { MyContactEditComponent } from './edit/my-contact-edit.component';
import { MyContactAddComponent } from './add/my-contact-add.component';
import { MyContactSharedModule } from './my-contact-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,MyContactSharedModule,
        ROUTING
    ],
    declarations: [MyContactListComponent,MyContactEditComponent,MyContactAddComponent],
    exports: [RouterModule],
    providers: []
})
export class MyContactModule { }


