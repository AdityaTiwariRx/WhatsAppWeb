import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractCheckOtp } from '../domain/abstract-check-otp';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Otp } from '@app/models';

@Component({
    selector: "app-check-otp-edit",
    templateUrl: './check-otp-edit.component.html'
})
export class CheckOtpEditComponent extends AbstractCheckOtp implements OnInit, OnDestroy {
    checkOtp: Otp;
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
            this.checkOtpFormGroup = this.formBuilder.formGroup(Otp,t) as IFormGroup<Otp>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
