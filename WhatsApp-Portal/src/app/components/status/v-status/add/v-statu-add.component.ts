import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { vStatu } from '@app/models';
import { AbstractvStatu } from '../domain/abstract-v-statu';

@Component({
    selector: "app-v-statu-add",
    templateUrl: './v-statu-add.component.html'
})
export class vStatuAddComponent extends AbstractvStatu implements OnInit, OnDestroy {
    vStatu: vStatu;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.vStatu = new vStatu();
        this.vStatuFormGroup = this.formBuilder.formGroup(this.vStatu) as IFormGroup<vStatu>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
