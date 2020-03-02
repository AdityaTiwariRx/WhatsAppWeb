import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Otp } from '@app/models';
import { AbstractCheckOtp } from '../domain/abstract-check-otp';

@Component({
    selector: "app-check-otp-add",
    templateUrl: './check-otp-add.component.html'
})
export class CheckOtpAddComponent extends AbstractCheckOtp implements OnInit, OnDestroy {
    checkOtp: Otp;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.checkOtp = new Otp();
        this.checkOtpFormGroup = this.formBuilder.formGroup(this.checkOtp) as IFormGroup<Otp>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
