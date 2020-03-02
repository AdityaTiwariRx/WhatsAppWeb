import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { MyContact } from '@app/models';

export class AbstractMyContact extends RxHttp {
    myContactFormGroup: IFormGroup<MyContact>
}
