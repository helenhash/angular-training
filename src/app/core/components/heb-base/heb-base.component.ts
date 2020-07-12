import {Component, OnDestroy} from '@angular/core';
import {Subject} from 'rxjs/internal/Subject';
import {AppConstants} from '@app/app.constants';

@Component({
  template: ``
})
export class HebBaseComponent implements OnDestroy {

  destroySubject$: Subject<void> = new Subject<void>();

  appConstants = AppConstants;

  constructor() {
  }

  /**
   * Clears the destroy subject out. Prevent memory leaks.
   */
  ngOnDestroy(): void {
    this.destroySubject$.next();
  }

}
