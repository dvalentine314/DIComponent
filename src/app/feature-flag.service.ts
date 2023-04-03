import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FeatureFlagService {
  useNewUI() {
    return of(true).pipe(delay(1000));
  }
}
