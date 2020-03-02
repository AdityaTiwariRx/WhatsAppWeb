import { IMultilingual, IMiddleware, } from "@rxweb/angular-router"
import { RxHttp } from "@rxweb/http"
import { BrowserStorage } from '../services/browser-storage';
import { ActivatedRouteSnapshot } from '@angular/router';

const STORAGE_KEY: string = "language";
const LANGUAGE_CODE: string = "en";

export abstract class BaseMultilingualContentResolver extends RxHttp implements IMiddleware, IMultilingual {

    private getName(component: Function) {
       // return MultiLingualData.getName(component)
    }
    resolveChildren(component: Function): boolean | Promise<boolean> {
        let name = this.getName(component);
        return  ;
    }

    constructor(private browserStorage: BrowserStorage, private isGlobal: boolean = false) { super() }

    invoke(user: { [key: string]: any; }, activatedRouteSnapshot: ActivatedRouteSnapshot): boolean | Promise<boolean> {
        let name = this.isGlobal ? 'global' : this.getName(activatedRouteSnapshot.component as Function);
       return ;

    }

    resolveData(name: string) {
        if (name ) {
            var promise = new Promise<boolean>((resolve, reject) => {
                var language = this.browserStorage.local.get(STORAGE_KEY) || LANGUAGE_CODE;
                this.get({  path: `assets/localization/${name}-${language}.json` }).subscribe(t => {
                   // MultiLingualData.addOrUpdate(name, t);
                    resolve(true);
                }, x => {
                    resolve(true)
                })
            })
            return promise;
        }
        else
            return true;
    }
}
