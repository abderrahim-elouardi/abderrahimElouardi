import { Injectable } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: ProjetEntite[] = [
    {
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    },
    {
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    },
    {
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    },
    {
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    }
  ]


}
