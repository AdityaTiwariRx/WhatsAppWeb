import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './chat.routing'

import { ChatListComponent } from './list/chat-list.component'
import { ChatEditComponent } from './edit/chat-edit.component';
import { ChatAddComponent } from './add/chat-add.component';
import { ChatSharedModule } from './chat-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,ChatSharedModule,
        ROUTING
    ],
    declarations: [ChatListComponent,ChatEditComponent,ChatAddComponent],
    exports: [RouterModule],
    providers: []
})
export class ChatModule { }


