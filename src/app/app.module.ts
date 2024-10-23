import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './modules/auth/auth.module';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { GamesModule } from './modules/games/games.module';

@NgModule({
  declarations: [NotFoundComponent, AppComponent, NavBarComponent],
  imports: [BrowserModule, AuthModule, GamesModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
