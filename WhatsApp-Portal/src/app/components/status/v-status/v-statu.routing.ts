import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vStatuListComponent } from './list/v-statu-list.component';
import { vStatuAddComponent } from './add/v-statu-add.component';
import { vStatuEditComponent } from './edit/v-statu-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vStatuListComponent
    },
    {
        path: 'add',
        component: vStatuAddComponent
    },
    {
        path: ':id',
        component:  vStatuEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
