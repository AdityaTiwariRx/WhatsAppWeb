import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractMyContact } from '../domain/abstract-my-contact';
import { MyContact } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-my-contact-list",
    templateUrl:'./my-contact-list.component.html'
})
export class MyContactListComponent extends AbstractMyContact implements OnInit, OnDestroy {
    myContacts: List<MyContact>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<MyContact>) => {
            this.myContacts = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
