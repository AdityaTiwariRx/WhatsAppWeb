import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractvStatu } from '../domain/abstract-v-statu';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { vStatu } from '@app/models';

@Component({
    selector: "app-v-statu-edit",
    templateUrl: './v-statu-edit.component.html'
})
export class vStatuEditComponent extends AbstractvStatu implements OnInit, OnDestroy {
    vStatu: vStatu;
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
            this.vStatuFormGroup = this.formBuilder.formGroup(vStatu,t) as IFormGroup<vStatu>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
