import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vChat } from '@app/models';
import { AbstractvChat } from '../domain/abstract-v-chat';

@Component({
    selector: "app-v-chat-add",
    templateUrl: './v-chat-add.component.html'
})
export class vChatAddComponent extends AbstractvChat implements OnInit, OnDestroy {
    vChat: vChat;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vChat = new vChat();
        this.vChatFormGroup = this.formBuilder.formGroup(this.vChat) as IFormGroup<vChat>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
