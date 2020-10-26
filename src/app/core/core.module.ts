import {NgModule, Optional, SkipSelf} from '@angular/core';
import {SharedModule} from '@app/shared/shared.module';
import {HebBaseComponent} from './components/heb-base/heb-base.component';
import {CommonNavBarComponent} from '@app/core/components/heb-nav-bar/common-nav-bar.component';

@NgModule({
  imports: [
    SharedModule,
  ],
  declarations: [
    HebBaseComponent,
    CommonNavBarComponent
  ],
  exports: [
    HebBaseComponent,
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
