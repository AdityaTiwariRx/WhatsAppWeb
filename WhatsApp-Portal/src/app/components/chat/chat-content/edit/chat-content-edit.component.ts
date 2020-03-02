import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractChatContent } from '../domain/abstract-chat-content';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { ChatContent } from '@app/models';

@Component({
    selector: "app-chat-content-edit",
    templateUrl: './chat-content-edit.component.html'
})
export class ChatContentEditComponent extends AbstractChatContent implements OnInit, OnDestroy {
    chatContent: ChatContent;
    subscription: Subscription;
    id: number;

    constructor(private formBuilder: RxFormBuilder, private activatedRoute: ActivatedRoute) {
        super();
        this.activatedRoute.queryParams.subscribe(t => {
            this.id = t['id'];
        })
    }

    ngOnInit(): void {
        this.get({ params: [this.id] }).subscribe(t => {
            this.chatContentFormGroup = this.formBuilder.formGroup(ChatContent,t) as IFormGroup<ChatContent>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
