import { Component, OnInit, OnDestroy } from "@angular/core"
import { List } from "@rxweb/generics"
import { AbstractCheckOtp } from '../domain/abstract-check-otp';
import { Otp } from "@app/models";
import { Subscription } from 'rxjs';

@Component({
    selector:"app-check-otp-list",
    templateUrl:'./check-otp-list.component.html'
})
export class CheckOtpListComponent extends AbstractCheckOtp implements OnInit, OnDestroy {
    checkOtp: List<Otp>;
    subscription: Subscription;

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t: List<Otp>) => {
            this.checkOtp = t;
        })
    }


    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
