import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { FileUploadModule } from 'ng2-file-upload';
import { NgxGalleryModule } from 'ngx-gallery';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_services/auth.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ErrorInterceptorProvider } from './_services/error.interceptor';
import { AlertifyService } from './_services/alertify.service';
import { UserListComponent } from './users/user-list/user-list.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { appRoutes } from './routes';
import { AuthGuard } from './_guards/auth.guard';
import { UserService } from './_services/user.service';
import { UsersComponent } from './users/users.component';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UserDetailResolver } from './_resolvers/user-detail.resolver';
import { UserListResolver } from './_resolvers/user-list.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { UserEditResolver } from './_resolvers/user-edit.resolver';
import { PhotoEditorComponent } from './users/photo-editor/photo-editor.component';
import { PostService } from './_services/post.service';
import { PhotoListComponent } from './users/photo-list/photo-list.component';
import { LoginComponent } from './login/login.component';
import { UserDetail02Component } from './users/user-detail02/user-detail02.component';
import { ListsResolver } from './_resolvers/lists.resolver';
import { UseredittestComponent } from './useredittest/useredittest.component';
import { UserOwnProfileComponent } from './user-own-profile/user-own-profile.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';



export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListsComponent,
    UsersComponent,
    MessagesComponent,
    NavComponent,
    RegisterComponent,
    UserCardComponent,
    UserListComponent,   
    PhotoEditorComponent,
    PhotoListComponent,
    LoginComponent,
    UserEditComponent,
    UserDetail02Component,
    UseredittestComponent,
    UserOwnProfileComponent,
      
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxGalleryModule,
    FileUploadModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/auth']
      }
    })
  ],
  providers: [
    AuthService,
    ErrorInterceptorProvider,
    AlertifyService,
    AuthGuard,
    UserService,
    UserDetailResolver,
    UserListResolver,
    UserEditResolver,
    PreventUnsavedChanges,
    PostService,
    ListsResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
