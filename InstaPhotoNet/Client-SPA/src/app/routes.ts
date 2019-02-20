import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoListComponent } from './users/photo-list/photo-list.component';
import { UserDetail02Component } from './users/user-detail02/user-detail02.component';
import { ListsResolver } from './_resolvers/lists.resolver';
import { UseredittestComponent } from './useredittest/useredittest.component';
import { UserOwnProfileComponent } from './user-own-profile/user-own-profile.component';



export const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: '', // localhost:4200/users
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users', component: UserListComponent,
        resolve: { users: UserListResolver }
      },
      {
        path: 'users/:id', component: UserDetail02Component,
        resolve: { user: UserDetailResolver }
      },
      {
        path: 'user/edit', component: UseredittestComponent,
        resolve: { user: UserEditResolver }, canDeactivate: [PreventUnsavedChanges]
      },
      {
        path: 'user', component: UserOwnProfileComponent,
        resolve: {user: UserEditResolver }
      },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'posts', component: PhotoListComponent },
      { path: 'lists', component: ListsComponent, resolve: { users: ListsResolver } },

    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

