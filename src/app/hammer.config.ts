import { HammerGestureConfig } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';

export class HammerConfig extends HammerGestureConfig {
  buildHammer(elt: HTMLElement) {
    return new Hammer(elt, {
      touchAction: 'pan-y'
    });
  }
}
