import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NuitmodeService } from '../nuitmode/nuitmode-service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  mode = inject(NuitmodeService)
  basculer() {
    this.mode.nuitMode = !this.mode.nuitMode
  }
}
