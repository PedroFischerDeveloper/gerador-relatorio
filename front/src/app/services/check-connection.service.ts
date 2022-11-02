import { Injectable } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckConnectionService {
  public hasConnection: string = '';

  constructor() {}

  checkStatus() {
    fromEvent(window, 'online')
      .pipe(debounceTime(100))
      .subscribe((event: Event) => {
        console.log(event);
        this.hasConnection = event.type;
      });

    fromEvent(window, 'offline')
      .pipe(debounceTime(100))
      .subscribe((event: Event) => {
        console.log(event);
        this.hasConnection = event.type;
      });

    console.log(this.checkStatus);
  }
}
