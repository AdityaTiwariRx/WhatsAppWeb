import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractChat } from '../domain/abstract-chat';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Chat } from '@app/models';

@Component({
    selector: "app-chat-edit",
    templateUrl: './chat-edit.component.html'
})
export class ChatEditComponent extends AbstractChat implements OnInit, OnDestroy {
    chat: Chat;
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
            this.chatFormGroup = this.formBuilder.formGroup(Chat,t) as IFormGroup<Chat>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
