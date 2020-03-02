import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './status.routing'

import { StatusListComponent } from './list/status-list.component'
import { StatusEditComponent } from './edit/status-edit.component';
import { StatusAddComponent } from './add/status-add.component';
import { StatusSharedModule } from './status-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,StatusSharedModule,
        ROUTING
    ],
    declarations: [StatusListComponent,StatusEditComponent,StatusAddComponent],
    exports: [RouterModule],
    providers: []
})
export class StatusModule { }


