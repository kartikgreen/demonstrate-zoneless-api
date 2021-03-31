import { Injectable } from "@angular/core";
import { EventManager } from "@angular/platform-browser";

@Injectable()
export class ZonelessEventPluginService {
  manager: EventManager;

  supports(eventName: string): boolean {
    return eventName.endsWith("zonelessMode");
  }

  addEventListener(element: HTMLElement, eventName: string, originalHandler: EventListener): Function {
    const [clickEvent] = eventName.split(".");
    this.manager.getZone().runOutsideAngular(() => {
      element.addEventListener(clickEvent, originalHandler);
    });
    return () => element.removeEventListener(clickEvent, originalHandler);
  }
}
