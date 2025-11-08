import { Injectable } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: ProjetEntite[] = [
    {
      id: 0,
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    },
    {
      id: 1,
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    },
    {
      id: 2,
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    },
    {
      id: 3,
      titre: "web application pour la reservation",
      img: "public/myPhoto1.jpg",
      description: "application web pour la reservation qui donne ou utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [],
      technologies: []
    }
  ]


}
