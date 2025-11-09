import { Component, inject, Input } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';
import { CommonModule, NgClass } from '@angular/common';
import { CongfigurationService } from '../configuration/congfiguration-service';

@Component({
  selector: 'app-projet',
  imports: [CommonModule, NgClass],
  standalone: true,
  templateUrl: './projet.html',
  styleUrl: './projet.css',
})
export class Projet {
  config = inject(CongfigurationService)
  @Input() projet: ProjetEntite = {
    id: -1,
    titre: '',
    acteurs: [],
    description: '',
    detail_description: '',
    img: '',
    technologies: []
  }
}
