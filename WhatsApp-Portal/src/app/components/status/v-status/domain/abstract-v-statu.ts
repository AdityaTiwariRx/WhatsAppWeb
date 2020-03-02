import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vStatu } from '@app/models';

export class AbstractvStatu extends RxHttp {
    vStatuFormGroup: IFormGroup<vStatu>
}
