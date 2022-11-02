import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toastr: ToastrService) {}

  showMessageSuccess(title: string, message: string) {
    return this.toastr.success(title, message);
  }

  showMessageError(title: string, message: string) {
    return this.toastr.error(title, message);
  }
}
