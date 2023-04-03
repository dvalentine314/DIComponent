import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OldUIComponent } from './old-ui/old-ui.component';
import { NewUIComponent } from './new-ui/new-ui.component';
import { FeatureFlagService } from './feature-flag.service';
import { map } from 'rxjs';
import { BaseComponent } from './baseComponent';

@NgModule({
  declarations: [AppComponent, OldUIComponent, NewUIComponent, BaseComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: 'UIcomponent',
      useFactory: componentFactory,
      deps: [FeatureFlagService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function componentFactory(condition: FeatureFlagService) {
  return condition.useNewUI().pipe(map((z) => (z ? NewUIComponent : OldUIComponent)));
}
