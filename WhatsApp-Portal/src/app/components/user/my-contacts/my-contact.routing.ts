import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyContactListComponent } from './list/my-contact-list.component';
import { MyContactAddComponent } from './add/my-contact-add.component';
import { MyContactEditComponent } from './edit/my-contact-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: MyContactListComponent
    },
    {
        path: 'add',
        component: MyContactAddComponent
    },
    {
        path: ':id',
        component:  MyContactEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
