import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoDataBindingComponent } from './demo-data-binding/demo-data-binding.component';
import {FormsModule} from '@angular/forms';
import {ParentComponent} from '@app/demo-comp-template/components/parent/parent.component';
import {ChildComponent} from '@app/demo-comp-template/components/child/child.component';
import {DemoCompTemplateRoutingModule} from '@app/demo-comp-template/demo-comp-template.routing.module';
import {HighlightDirective} from '@app/demo-comp-template/directives/highlight.directive';
import {DemoDirectiveComponent} from '@app/demo-comp-template/demo-directive/demo-directive.component';
import {UnlessDirective} from '@app/demo-comp-template/directives/unless.directive';
import {DemoPipeComponent} from '@app/demo-comp-template/demo-pipe/demo-pipe.component';
import {ExponentialStrengthPipe} from '@app/demo-comp-template/pipes/exponential-strength.pipe';
import { ChildDemoHookComponent } from './components/child-demo-hook/child-demo-hook.component';
import { DemoHookComponent } from './demo-hook/demo-hook.component';
import { NameChildComponent } from './components/name-child/name-child.component';
import { DemoCompInteractionComponent } from './demo-comp-interaction/demo-comp-interaction.component';
import { CountdownTimerComponent } from './components/countdown-timer/countdown-timer.component';

@NgModule({
  declarations: [
    DemoDataBindingComponent,
    ChildComponent,
    ParentComponent,
    HighlightDirective,
    DemoDirectiveComponent,
    UnlessDirective,
    DemoPipeComponent,
    ExponentialStrengthPipe,
    ChildDemoHookComponent,
    DemoHookComponent,
    NameChildComponent,
    DemoCompInteractionComponent,
    CountdownTimerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DemoCompTemplateRoutingModule
  ]
})
export class DemoCompTemplateModule { }
