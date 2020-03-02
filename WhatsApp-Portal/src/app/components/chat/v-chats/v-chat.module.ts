import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { RxReactiveFormsModule } from "@rxweb/reactive-form-validators";

import { ROUTING } from './v-chat.routing'

import { vChatListComponent } from './list/v-chat-list.component'
import { vChatEditComponent } from './edit/v-chat-edit.component';
import { vChatAddComponent } from './add/v-chat-add.component';
import { vChatSharedModule } from './v-chat-shared.module';

@NgModule({
    imports: [
        CommonModule, FormsModule, ReactiveFormsModule, RxReactiveFormsModule,vChatSharedModule,
        ROUTING
    ],
    declarations: [vChatListComponent,vChatEditComponent,vChatAddComponent],
    exports: [RouterModule],
    providers: []
})
export class vChatModule { }


