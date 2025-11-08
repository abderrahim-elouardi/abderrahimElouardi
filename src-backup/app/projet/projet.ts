import { Component, Input } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';

@Component({
  selector: 'app-projet',
  imports: [],
  templateUrl: './projet.html',
  styleUrl: './projet.css',
})
export class Projet {
  @Input() projet: ProjetEntite = {
    titre: '',
    acteurs: [],
    description: '',
    detail_description: '',
    img: '',
    technologies: []
  }
}
