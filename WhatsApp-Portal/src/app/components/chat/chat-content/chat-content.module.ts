import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './chat-content.routing'

import { ChatContentListComponent } from './list/chat-content-list.component'
import { ChatContentEditComponent } from './edit/chat-content-edit.component';
import { ChatContentAddComponent } from './add/chat-content-add.component';
import { ChatContentSharedModule } from './chat-content-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ChatContentSharedModule,
        ROUTING
    ],
    declarations: [ChatContentListComponent,ChatContentEditComponent,ChatContentAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ChatContentModule { }


