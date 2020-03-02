import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vStatuBase {

//#region userId Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'userId', keyColumn: true})
        userId : number;
//#endregion userId Prop


//#region statusId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'statusId', keyColumn: false})
        statusId : number;
//#endregion statusId Prop


//#region statusUserId Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'statusUserId', keyColumn: false})
        statusUserId : number;
//#endregion statusUserId Prop


//#region statusType Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'statusType', keyColumn: false})
        statusType : string;
//#endregion statusType Prop


//#region statusContent Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'statusContent', keyColumn: false})
        statusContent : string;
//#endregion statusContent Prop


//#region statusCaption Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'statusCaption', keyColumn: false})
        statusCaption : string;
//#endregion statusCaption Prop


//#region createdTime Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'createdTime', keyColumn: false})
        createdTime : any;
//#endregion createdTime Prop


//#region myContactId Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'myContactId', keyColumn: false})
        myContactId : number;
//#endregion myContactId Prop


//#region userName Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'userName', keyColumn: false})
        userName : string;
//#endregion userName Prop


//#region myContactName Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'myContactName', keyColumn: false})
        myContactName : string;
//#endregion myContactName Prop


//#region usercontactId Prop
        @gridColumn({visible: true, columnIndex:10, allowSorting: true, headerKey: 'usercontactId', keyColumn: false})
        usercontactId : number;
//#endregion usercontactId Prop

}