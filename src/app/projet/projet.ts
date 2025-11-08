import { Component, Input } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projet',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './projet.html',
  styleUrl: './projet.css',
})
export class Projet {
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
