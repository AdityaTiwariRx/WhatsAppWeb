import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Status } from '@app/models';

export class AbstractStatus extends RxHttp {
    statusFormGroup: IFormGroup<Status>
}
