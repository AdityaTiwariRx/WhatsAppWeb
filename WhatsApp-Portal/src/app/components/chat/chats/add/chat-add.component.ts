import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Chat } from '@app/models';
import { AbstractChat } from '../domain/abstract-chat';

@Component({
    selector: "app-chat-add",
    templateUrl: './chat-add.component.html'
})
export class ChatAddComponent extends AbstractChat implements OnInit, OnDestroy {
    chat: Chat;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.chat = new Chat();
        this.chatFormGroup = this.formBuilder.formGroup(this.chat) as IFormGroup<Chat>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
