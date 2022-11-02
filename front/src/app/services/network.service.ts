import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Injectable({
  providedIn: 'root',
})
export class NetworkService {
  public handler: any;
  public status: any;

  constructor() {}

  async ngOnInit() {
    this.handler = Network['addListener'](
      'networkStatusChange',
      (status: any) => {
        console.log('Network status changed', status);
      }
    );

    this.status = await Network['getStatus']();
  }

  getNetwork() {
    alert(this.status);
    return this.status;
  }
}
