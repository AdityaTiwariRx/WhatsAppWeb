import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { vChatListComponent } from './list/v-chat-list.component';
import { vChatAddComponent } from './add/v-chat-add.component';
import { vChatEditComponent } from './edit/v-chat-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: vChatListComponent
    },
    {
        path: 'add',
        component: vChatAddComponent
    },
    {
        path: ':id',
        component:  vChatEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
