import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-statu.routing'

import { vStatuListComponent } from './list/v-statu-list.component'
import { vStatuEditComponent } from './edit/v-statu-edit.component';
import { vStatuAddComponent } from './add/v-statu-add.component';
import { vStatuSharedModule } from './v-statu-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vStatuSharedModule,
        ROUTING
    ],
    declarations: [vStatuListComponent,vStatuEditComponent,vStatuAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vStatuModule { }


