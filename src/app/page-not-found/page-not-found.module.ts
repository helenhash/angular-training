import {NgModule} from '@angular/core';
import {PageNotFoundComponent} from '@app/page-not-found/views/page-not-found/page-not-found.component';
import {PageNotFoundRoutingModule} from '@app/page-not-found/page-not-found.routing.module';

@NgModule({
  imports: [
    PageNotFoundRoutingModule
  ],
  declarations: [
    PageNotFoundComponent
  ]
})

export class PageNotFoundModule { }

