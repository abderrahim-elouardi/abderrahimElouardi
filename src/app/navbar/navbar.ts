import { Component, inject } from '@angular/core';
import { CongfigurationService } from '../configuration/congfiguration-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  config = inject(CongfigurationService)
  basculer() {
    this.config.mode = !this.config.mode
  }
}
