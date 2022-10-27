import { ApiService } from './../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public URL = 'auth';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {}

  list() {
    this.apiService.get(this.URL);
  }

  edit(id: number) {
    this.apiService.edit(this.URL, id);
  }

  delete(id: number) {
    this.apiService.delete(this.URL, id);
  }
}
