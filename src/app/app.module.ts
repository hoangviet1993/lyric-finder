import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; 
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SongListComponent } from './song-list/song-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LyricViewerComponent } from './lyric-viewer/lyric-viewer.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/songs',
    pathMatch: 'full',
  },
  {
    path: 'lyrics/:artist/:title',
    component: LyricViewerComponent
  },
  {
    path: 'songs',
    component: SongListComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SongListComponent,
    NavbarComponent,
    LyricViewerComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
