import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractStatus } from '../domain/abstract-status';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { Status } from '@app/models';

@Component({
    selector: "app-status-edit",
    templateUrl: './status-edit.component.html'
})
export class StatusEditComponent extends AbstractStatus implements OnInit, OnDestroy {
    status: Status;
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
            this.statusFormGroup = this.formBuilder.formGroup(Status,t) as IFormGroup<Status>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
