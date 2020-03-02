import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { ChatContent } from '@app/models';
import { AbstractChatContent } from '../domain/abstract-chat-content';

@Component({
    selector: "app-chat-content-add",
    templateUrl: './chat-content-add.component.html'
})
export class ChatContentAddComponent extends AbstractChatContent implements OnInit, OnDestroy {
    chatContent: ChatContent;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.chatContent = new ChatContent();
        this.chatContentFormGroup = this.formBuilder.formGroup(this.chatContent) as IFormGroup<ChatContent>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
