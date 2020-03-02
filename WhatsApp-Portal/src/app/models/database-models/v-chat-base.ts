import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vChatBase {

//#region senderId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'senderId', keyColumn: true})
        senderId : number;
//#endregion senderId Prop


//#region sendername Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'sendername', keyColumn: false})
        sendername : string;
//#endregion sendername Prop


//#region receiverId Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'receiverId', keyColumn: false})
        receiverId : number;
//#endregion receiverId Prop


//#region receivername Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'receivername', keyColumn: false})
        receivername : string;
//#endregion receivername Prop


//#region chatId Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'chatId', keyColumn: false})
        chatId : number;
//#endregion chatId Prop


//#region chatMessage Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'chatMessage', keyColumn: false})
        chatMessage : string;
//#endregion chatMessage Prop


//#region sendTime Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'sendTime', keyColumn: false})
        sendTime : any;
//#endregion sendTime Prop

}