import { RxHttp } from "@rxweb/http";
import { IFormGroup } from '@rxweb/reactive-form-validators';
import { ChatContent } from '@app/models';

export class AbstractChatContent extends RxHttp {
    chatContentFormGroup: IFormGroup<ChatContent>
}
