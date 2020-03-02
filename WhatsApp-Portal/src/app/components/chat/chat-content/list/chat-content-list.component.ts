import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractChatContent } from '../domain/abstract-chat-content';
import { ChatContent } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-chat-content-list",
    templateUrl:'./chat-content-list.component.html'
})
export class ChatContentListComponent extends AbstractChatContent implements OnInit, OnDestroy {
    chatContent: List<ChatContent>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<ChatContent>) => {
            this.chatContent = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
