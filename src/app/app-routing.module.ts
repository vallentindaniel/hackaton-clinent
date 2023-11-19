import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/pages/auth/login/login.component';
import { RegisterComponent } from './main/pages/auth/register/register.component';
import { HomeComponent } from './main/pages/home/home.component';
import { NotFoundComponent } from './main/pages/not-found/not-found.component';
import { MyAccountComponent } from './main/pages/my-account/my-account.component';
import { AddPostComponent } from './main/pages/add-post/add-post.component';
import { AuthGuard } from './main/_guard/auth.guard';
import { WelcomeComponent } from './main/pages/welcome/welcome.component';
import { AnunturiComponent } from './main/pages/anunturi/anunturi.component';
import { EventsComponent } from './main/pages/events/events.component';
import { UsersComponent } from './main/pages/users/users.component';
import { OurStoryPageComponent } from './main/pages/our-story-page/our-story-page.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent},

  { path: 'anunturi', component: AnunturiComponent},
  { path: 'evenimente', component: EventsComponent},
  { path: 'utilizatori', component: UsersComponent},

  { path: 'our-story', component: OurStoryPageComponent},

  { path: 'my-account', component: MyAccountComponent, canActivate: [AuthGuard]},

  { path: 'add-post', component: AddPostComponent,  canActivate: [AuthGuard]},

  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
