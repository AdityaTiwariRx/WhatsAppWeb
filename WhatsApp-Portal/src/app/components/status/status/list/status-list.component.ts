import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractStatus } from '../domain/abstract-status';
import { Status } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-status-list",
    templateUrl:'./status-list.component.html'
})
export class StatusListComponent extends AbstractStatus implements OnInit, OnDestroy {
    status: List<Status>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Status>) => {
            this.status = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
