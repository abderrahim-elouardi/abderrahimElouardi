import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NgClass } from '@angular/common';
import { NuitmodeService } from './nuitmode/nuitmode-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
  mode = inject(NuitmodeService)
  // constructor(public nuit: NuitmodeService) {

  // }
}
