import { Routes, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { RouteProvider } from "@rxweb/angular-router"
import { Injectable } from '@angular/core';
var routings = [
    {
        path: '', redirectTo: 'login', pathMatch: 'full',
    },
    {
        path: "login",
        loadChildren: () => import("../login/login.module").then(m => m.LoginModule)
    },

        {
			path: "chat-content",
			loadChildren: () => import("../chat/chat-content/chat-content.module").then(m => m.ChatContentModule)
		},
        {
			path: "chats",
			loadChildren: () => import("../chat/chats/chat.module").then(m => m.ChatModule)
		},
        {
			path: "v-chats",
			loadChildren: () => import("../chat/v-chats/v-chat.module").then(m => m.vChatModule)
		},
        {
			path: "chat-content",
			loadChildren: () => import("../chat/chat-content/chat-content.module").then(m => m.ChatContentModule)
		},
        {
			path: "chats",
			loadChildren: () => import("../chat/chats/chat.module").then(m => m.ChatModule)
		},
        {
			path: "v-chats",
			loadChildren: () => import("../chat/v-chats/v-chat.module").then(m => m.vChatModule)
		},
        {
			path: "status",
			loadChildren: () => import("../status/status/status.module").then(m => m.StatusModule)
		},
        {
			path: "v-status",
			loadChildren: () => import("../status/v-status/v-statu.module").then(m => m.vStatuModule)
		},
        {
			path: "chat-content",
			loadChildren: () => import("../chat/chat-content/chat-content.module").then(m => m.ChatContentModule)
		},
        {
			path: "chats",
			loadChildren: () => import("../chat/chats/chat.module").then(m => m.ChatModule)
		},
        {
			path: "v-chats",
			loadChildren: () => import("../chat/v-chats/v-chat.module").then(m => m.vChatModule)
		},
        {
			path: "status",
			loadChildren: () => import("../status/status/status.module").then(m => m.StatusModule)
		},
        {
			path: "v-status",
			loadChildren: () => import("../status/v-status/v-statu.module").then(m => m.vStatuModule)
		},
        {
			path: "check-otp",
			loadChildren: () => import("../user/check-otp/check-otp.module").then(m => m.CheckOtpModule)
		},
        {
			path: "my-contacts",
			loadChildren: () => import("../user/my-contacts/my-contact.module").then(m => m.MyContactModule)
		},
        {
			path: "otps",
			loadChildren: () => import("../user/otps/otp.module").then(m => m.OtpModule)
		},
        {
			path: "user-details",
			loadChildren: () => import("../user/user-details/user-detail.module").then(m => m.UserDetailModule)
		},
        {
			path: "users",
			loadChildren: () => import("../user/users/user.module").then(m => m.UserModule)
		}

]

export const ROUTES: Routes = routings;







console.log(ROUTES)

