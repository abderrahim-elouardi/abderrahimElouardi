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
      img: "myImages/1762258326616.jpeg",
      description: "application web pour la reservation qui donne au utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [{
        name: "Manager",
        description: "Managers pour publier des offres, par example les organisateurs des clubs."
      },
      {
        name: "Client",
        description: "Client peut consuleter les offres et reserver et recuperer les tickets."
      },
      {
        name: "Admin",
        description: "Admin pour organiser les Managers"
      }
      ],
      technologies: []
    },
    {
      id: 1,
      titre: "web application pour la reservation",
      img: "myImages/1762258326616.jpeg",
      description: "application web pour la reservation qui donne au utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [{
        name: "Manager",
        description: "Managers pour publier des offres, par example les organisateurs des clubs."
      },
      {
        name: "Client",
        description: "Client peut consuleter les offres et reserver et recuperer les tickets."
      },
      {
        name: "Admin",
        description: "Admin pour organiser les Managers"
      }
      ],
      technologies: []
    },
    {
      id: 2,
      titre: "web application pour la reservation",
      img: "myImages/1762258326616.jpeg",
      description: "application web pour la reservation qui donne au utilisateur simple des interfaces pour reserver 6 type d'offre et au manager pour publier des offre et admin pour gerer les manager",
      detail_description: "",
      acteurs: [{
        name: "Manager",
        description: "Managers pour publier des offres, par example les organisateurs des clubs."
      },
      {
        name: "Client",
        description: "Client peut consuleter les offres et reserver et recuperer les tickets."
      },
      {
        name: "Admin",
        description: "Admin pour organiser les Managers"
      }
      ],
      technologies: []
    }
  ]


}
