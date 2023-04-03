import { Component, Inject } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { FeatureFlagService } from './feature-flag.service';

@Component({
  selector: 'base-component',
  template: '<ng-container *ngComponentOutlet="uiComponent | async"></ng-container>',
})
export class BaseComponent {
  constructor(@Inject('UIcomponent') public uiComponent: any) {}
}
