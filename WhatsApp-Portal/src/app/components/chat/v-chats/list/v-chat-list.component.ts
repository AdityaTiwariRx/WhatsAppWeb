import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvChat } from '../domain/abstract-v-chat';
import { vChat } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-chat-list",
    templateUrl:'./v-chat-list.component.html'
})
export class vChatListComponent extends AbstractvChat implements OnInit, OnDestroy {
    vChats: List<vChat>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vChat>) => {
            this.vChats = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
