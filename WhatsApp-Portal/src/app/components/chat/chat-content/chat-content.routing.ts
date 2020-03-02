import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatContentListComponent } from './list/chat-content-list.component';
import { ChatContentAddComponent } from './add/chat-content-add.component';
import { ChatContentEditComponent } from './edit/chat-content-edit.component';

const ROUTES: Routes = [
    {
        path: '',
        component: ChatContentListComponent
    },
    {
        path: 'add',
        component: ChatContentAddComponent
    },
    {
        path: ':id',
        component:  ChatContentEditComponent
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
