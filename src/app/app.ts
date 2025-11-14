import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NgClass } from '@angular/common';
import { CongfigurationService } from './configuration/congfiguration-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgClass],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Abderrahim El ouardi');
  config = inject(CongfigurationService)

}
