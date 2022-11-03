import { CheckConnectionService } from './services/check-connection.service';
import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'gerador-relatorio';

  public showMenu: boolean = false;

  constructor(
    private authService: AuthService,
    private checkConnectionService: CheckConnectionService
  ) {}

  async ngOnInit() {
    await this.authService.showMenuEmmiter.subscribe((show) =>
      console.log(show)
    );
  }
}
