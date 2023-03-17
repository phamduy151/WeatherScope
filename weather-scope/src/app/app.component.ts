import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'weather-scope';
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }
}
