import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractvStatu } from '../domain/abstract-v-statu';
import { vStatu } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-v-statu-list",
    templateUrl:'./v-statu-list.component.html'
})
export class vStatuListComponent extends AbstractvStatu implements OnInit, OnDestroy {
    vStatus: List<vStatu>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<vStatu>) => {
            this.vStatus = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
