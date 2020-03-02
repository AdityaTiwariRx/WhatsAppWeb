import { Component, OnInit, OnDestroy } from "@angular/core"
import { AbstractMyContact } from '../domain/abstract-my-contact';

import { Subscription } from 'rxjs';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';
import { ActivatedRoute } from '@angular/router';

import { MyContact } from '@app/models';

@Component({
    selector: "app-my-contact-edit",
    templateUrl: './my-contact-edit.component.html'
})
export class MyContactEditComponent extends AbstractMyContact implements OnInit, OnDestroy {
    myContact: MyContact;
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
            this.myContactFormGroup = this.formBuilder.formGroup(MyContact,t) as IFormGroup<MyContact>;
        })
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
