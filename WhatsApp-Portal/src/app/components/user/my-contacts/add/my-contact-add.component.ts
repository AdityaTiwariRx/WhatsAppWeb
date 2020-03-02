import { Component, OnInit, OnDestroy } from "@angular/core"
import { Subscription } from 'rxjs';

import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { MyContact } from '@app/models';
import { AbstractMyContact } from '../domain/abstract-my-contact';

@Component({
    selector: "app-my-contact-add",
    templateUrl: './my-contact-add.component.html'
})
export class MyContactAddComponent extends AbstractMyContact implements OnInit, OnDestroy {
    myContact: MyContact;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder) {
        super();
    }

    ngOnInit(): void {
        this.myContact = new MyContact();
        this.myContactFormGroup = this.formBuilder.formGroup(this.myContact) as IFormGroup<MyContact>;
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
