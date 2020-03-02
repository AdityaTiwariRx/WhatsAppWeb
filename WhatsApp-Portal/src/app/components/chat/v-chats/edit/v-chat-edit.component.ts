import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvChat } from '../domain/abstract-v-chat';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vChat } from '@app/models';

@Component({
    selector: "app-v-chat-edit",
    templateUrl: './v-chat-edit.component.html'
})
export class vChatEditComponent extends AbstractvChat implements OnInit, OnDestroy {
    vChat: vChat;
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
            this.vChatFormGroup = this.formBuilder.formGroup(vChat,t) as IFormGroup<vChat>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
