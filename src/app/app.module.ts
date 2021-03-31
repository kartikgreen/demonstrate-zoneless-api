import { NgModule } from '@angular/core';
import { BrowserModule, EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ClickZonelessDirective } from './click-zoneless.directive';
import { HighlightDirective } from './highlight.directive';
import { ZonelessEventPluginService } from './zoneless-event-plugin.service';


@NgModule({
  declarations: [
    AppComponent,
    ClickZonelessDirective,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: EVENT_MANAGER_PLUGINS,
      useClass: ZonelessEventPluginService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
