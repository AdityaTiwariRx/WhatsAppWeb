import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatListComponent } from './list/chat-list.component';
import { ChatAddComponent } from './add/chat-add.component';
import { ChatEditComponent } from './edit/chat-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ChatListComponent
    },
    {
        path: 'add',
        component: ChatAddComponent
    },
    {
        path: ':id',
        component:  ChatEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
