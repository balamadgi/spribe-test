import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoundProgressModule} from 'angular-svg-round-progressbar'

import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { ChangeAvatarWindowComponent } from './change-avatar-window/change-avatar-window.component';
import { ImageService } from './services/image-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    ChangeAvatarWindowComponent
  ],
  imports: [
		BrowserModule,
		RoundProgressModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
