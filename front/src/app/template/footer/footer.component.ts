import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public showMenu: boolean = false;

  constructor(
    private router: Router,
    private isAuth: AuthService,
    private auth: AuthService
  ) {}

  ngOnInit(): void {}

  navTo(navTo: string) {
    this.router.navigateByUrl(navTo);
  }
}
