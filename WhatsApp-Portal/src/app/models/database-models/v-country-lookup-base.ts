import { prop,propObject,propArray,required,maxLength,range  } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class vCountryLookupBase {

//#region countryName Prop
        @gridColumn({visible: true, columnIndex:0, allowSorting: true, headerKey: 'countryName', keyColumn: false})
        countryName : string;
//#endregion countryName Prop


//#region countryCode Prop
        @gridColumn({visible: true, columnIndex:1, allowSorting: true, headerKey: 'countryCode', keyColumn: false})
        countryCode : string;
//#endregion countryCode Prop

}