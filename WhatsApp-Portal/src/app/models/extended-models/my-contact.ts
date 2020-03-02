import {MyContactBase} from '../database-models/my-contact-base';
import {UserBase} from '../database-models/user-base';
import {SeenStatuBase} from '../database-models/seen-statu-base';
import {ChatBase} from '../database-models/chat-base';
import {BlockBase} from '../database-models/block-base';
//Generated Imports
export class MyContact extends MyContactBase 
{




//#region Generated Reference Properties
//#region user Prop
        user : UserBase;
//#endregion user Prop

//#region seenStatus Prop
        seenStatus : SeenStatuBase[];
//#endregion seenStatus Prop

//#region chats Prop
        chats : ChatBase[];
//#endregion chats Prop

//#region blocks Prop
        blocks : BlockBase[];
//#endregion blocks Prop

//#endregion Generated Reference Properties
}