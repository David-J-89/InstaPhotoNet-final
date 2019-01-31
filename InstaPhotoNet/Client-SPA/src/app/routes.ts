import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { PhotoListComponent } from './users/photo-list/photo-list.component';
import { UserDetail02Component } from './users/user-detail02/user-detail02.component';
import { UserEdit02Component } from './users/user-edit02/user-edit02.component';
import { PhotoUserdetailbootComponent } from './maintest/photo-userdetailboot/photo-userdetailboot.component';
import { PhotoUsereditbootComponent } from './maintest/photo-usereditboot/photo-usereditboot.component';



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
        path: 'user/edit', component: UserEdit02Component,
        resolve: { user: UserEditResolver }, canDeactivate: [PreventUnsavedChanges]
      },
      { path: 'messages', component: MessagesComponent },
      { path: 'lists', component: ListsComponent },
      { path: 'posts', component: PhotoListComponent },      
      {
        path: 'usersboot/:id', component: PhotoUserdetailbootComponent
      },
        //resolve: { user: UserDetailResolver}},
      {
        path: 'userboot/edit', component: PhotoUsereditbootComponent,
        //resolve: { user: UserEditResolver }, canDeactivate: [PreventUnsavedChanges]
      },

      
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

