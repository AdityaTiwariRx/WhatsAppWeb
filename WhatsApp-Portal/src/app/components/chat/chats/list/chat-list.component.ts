import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractChat } from '../domain/abstract-chat';
import { Chat } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-chat-list",
    templateUrl:'./chat-list.component.html'
})
export class ChatListComponent extends AbstractChat implements OnInit, OnDestroy {
    chats: List<Chat>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Chat>) => {
            this.chats = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
