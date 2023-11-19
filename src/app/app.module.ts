import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from './main/components/layout/sidebar/sidebar.component';
import { TopbarComponent } from './main/components/layout/topbar/topbar.component';
import { BottombarComponent } from './main/components/layout/bottombar/bottombar.component';
import { LoginComponent } from './main/pages/auth/login/login.component';
import { RegisterComponent } from './main/pages/auth/register/register.component';
import { WelcomeComponent } from './main/pages/welcome/welcome.component';
import { NotFoundComponent } from './main/pages/not-found/not-found.component';
import { HomeComponent } from './main/pages/home/home.component';
import { MyAccountComponent } from './main/pages/my-account/my-account.component';
import { AddPostComponent } from './main/pages/add-post/add-post.component';
import { AnunturiComponent } from './main/pages/anunturi/anunturi.component';
import { EventsComponent } from './main/pages/events/events.component';
import { UsersComponent } from './main/pages/users/users.component';
import { TestimonialsComponent } from './main/components/testimonials/testimonials.component';
import { OurTeamComponent } from './main/components/our-team/our-team.component';
import { DiscoverComponent } from './main/components/discover/discover.component';
import { ImpactComponent } from './main/components/impact/impact.component';
import { OurStoryComponent } from './main/components/our-story/our-story.component';
import { OurStoryPageComponent } from './main/pages/our-story-page/our-story-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopbarComponent,
    BottombarComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent,
    NotFoundComponent,
    HomeComponent,
    MyAccountComponent,
    AddPostComponent,
    AnunturiComponent,
    EventsComponent,
    UsersComponent,
    TestimonialsComponent,
    OurTeamComponent,
    DiscoverComponent,
    ImpactComponent,
    OurStoryComponent,
    OurStoryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
