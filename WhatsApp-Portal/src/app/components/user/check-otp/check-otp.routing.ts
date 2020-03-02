import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckOtpListComponent } from './list/check-otp-list.component';
import { CheckOtpAddComponent } from './add/check-otp-add.component';
import { CheckOtpEditComponent } from './edit/check-otp-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: CheckOtpListComponent
    },
    {
        path: 'add',
        component: CheckOtpAddComponent
    },
    {
        path: ':id',
        component:  CheckOtpEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
