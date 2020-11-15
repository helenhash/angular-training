import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {CountdownTimerComponent} from '../components/countdown-timer/countdown-timer.component';

@Component({
  selector: 'demo-comp-interaction',
  templateUrl: './demo-comp-interaction.component.html',
  styleUrls: ['./demo-comp-interaction.component.scss']
})
export class DemoCompInteractionComponent implements AfterViewInit {
  names = ['Dr IQ', '   ', '  Bombasto  '];

  @ViewChild(CountdownTimerComponent, {static: true})
  private timerComponent: CountdownTimerComponent;

  constructor() { }

  seconds() { return 0; }

  ngAfterViewInit() {
    // Redefine `seconds()` to get from the `CountdownTimerComponent.seconds` ...
    // but wait a tick first to avoid one-time devMode
    // unidirectional-data-flow-violation error
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }

}
