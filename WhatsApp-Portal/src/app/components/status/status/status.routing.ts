import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusListComponent } from './list/status-list.component';
import { StatusAddComponent } from './add/status-add.component';
import { StatusEditComponent } from './edit/status-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: StatusListComponent
    },
    {
        path: 'add',
        component: StatusAddComponent
    },
    {
        path: ':id',
        component:  StatusEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
