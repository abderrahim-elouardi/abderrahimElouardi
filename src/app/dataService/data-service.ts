import { Injectable } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';
import { Education } from '../Entities/Education';

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
      titre: "Projet Full-Stack ML pour l'Immobilier",
      img: "myImages/projet2.jpg",
      description: "Conception d'une application Angular/Spring Boot (sécurité JWT) pour l'estimation de prix immobiliers. J'ai exposé un modèle de régression Scikit-learn via une API FastAPI, atteignant un score de R² de 0.85 après un nettoyage complet des données (gestion des manquantes, variables catégorielles).",
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
      titre: "Analyse de Données et Segmentation Client",
      img: "myImages/projet3.jpg",
      description: "Projet d'analyse de données sur un dataset bancaire incluant l'exploration et le prétraitement (Normalisation, One-Hot Encoding). L'algorithme K-Means a été appliqué pour segmenter la clientèle, fournissant des groupes distincts basés sur les caractéristiques pour des stratégies commerciales ciblées.",
      detail_description: "",
      acteurs: [],
      technologies: []
    }
  ]

  Educations: Education[] = [
    {
      id: 1,
      cycle: "Cycle Master",
      location: "FSDM ,FES",
      date: "2025 - 2027",
      title: "Web Intelligence et Science de Donnees"
    },
    {
      id: 2,
      cycle: "Cycle Licence",
      location: "FSDM ,FES",
      date: "2022 - 2025",
      title: "Science Mathematique et informatique"
    },
    {
      id: 3,
      cycle: "Baccalaureat ",
      location: "Lycee Al Amal ,FES",
      date: "2021 - 2022",
      title: "Physique - Chimie"
    }
  ]


}
