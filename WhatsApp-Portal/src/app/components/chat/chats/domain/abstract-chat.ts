import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { Chat } from '@app/models';

export class AbstractChat extends RxHttp {
    chatFormGroup: IFormGroup<Chat>
}
