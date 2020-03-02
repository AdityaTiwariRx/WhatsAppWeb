import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { vChat } from '@app/models';

export class AbstractvChat extends RxHttp {
    vChatFormGroup: IFormGroup<vChat>
}
