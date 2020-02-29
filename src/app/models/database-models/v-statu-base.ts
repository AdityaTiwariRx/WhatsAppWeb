import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vStatuBase {

//#region userId Prop
        @gridColumn({visible: true, columnIndex:6, allowSorting: true, headerKey: 'userId', keyColumn: false})
        userId : number;
//#endregion userId Prop


//#region userName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'userName', keyColumn: false})
        userName : string;
//#endregion userName Prop


//#region statusId Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'statusId', keyColumn: true})
        statusId : number;
//#endregion statusId Prop


//#region statusType Prop
        @gridColumn({visible: true, columnIndex:2, allowSorting: true, headerKey: 'statusType', keyColumn: false})
        statusType : string;
//#endregion statusType Prop


//#region statusContent Prop
        @gridColumn({visible: true, columnIndex:3, allowSorting: true, headerKey: 'statusContent', keyColumn: false})
        statusContent : string;
//#endregion statusContent Prop


//#region statusCaption Prop
        @gridColumn({visible: true, columnIndex:4, allowSorting: true, headerKey: 'statusCaption', keyColumn: false})
        statusCaption : string;
//#endregion statusCaption Prop


//#region createdTime Prop
        @gridColumn({visible: true, columnIndex:5, allowSorting: true, headerKey: 'createdTime', keyColumn: false})
        createdTime : any;
//#endregion createdTime Prop


//#region expr1 Prop
        @gridColumn({visible: true, columnIndex:7, allowSorting: true, headerKey: 'expr1', keyColumn: false})
        expr1 : number;
//#endregion expr1 Prop


//#region usercontactId Prop
        @gridColumn({visible: true, columnIndex:8, allowSorting: true, headerKey: 'usercontactId', keyColumn: false})
        usercontactId : number;
//#endregion usercontactId Prop


//#region myContactName Prop
        @gridColumn({visible: true, columnIndex:9, allowSorting: true, headerKey: 'myContactName', keyColumn: false})
        myContactName : string;
//#endregion myContactName Prop

}