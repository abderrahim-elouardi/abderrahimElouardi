import { Component, inject } from '@angular/core';
import { CongfigurationService } from '../configuration/congfiguration-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  config = inject(CongfigurationService)
  basculer() {
    this.config.mode = !this.config.mode
  }
}
