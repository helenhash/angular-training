import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {BaseComponent} from './components/base/base.component';
import {CommonNavBarComponent} from '@app/core/components/nav-bar/common-nav-bar.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    BaseComponent,
    CommonNavBarComponent
  ],
  exports: [
    BaseComponent,
    CommonNavBarComponent
  ],
  providers: [
  ]
})

export class CoreModule {
  /* make sure CoreModule is imported only by one NgModule the AppModule */
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
