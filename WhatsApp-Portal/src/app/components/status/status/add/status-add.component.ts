import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Status } from '@app/models';
import { AbstractStatus } from '../domain/abstract-status';

@Component({
    selector: "app-status-add",
    templateUrl: './status-add.component.html'
})
export class StatusAddComponent extends AbstractStatus implements OnInit, OnDestroy {
    status: Status;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.status = new Status();
        this.statusFormGroup = this.formBuilder.formGroup(this.status) as IFormGroup<Status>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
