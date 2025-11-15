import { Injectable } from '@angular/core';
import { ProjetEntite } from '../Entities/ProjetEntite';
import { Education } from '../Entities/Education';
import { Technologie } from '../Entities/Technologie';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  projects: ProjetEntite[] = [

    {
      id: 0,
      titre: "web application pour la reservation",
      titre_arabe: "تطبيق ويب للحجز",
      titre_anglais: "Web application for booking",
      description_anglais: "A web application for booking that provides basic users with interfaces to book 6 types of offers, and allows the manager to publish offers and the admin to manage the managers.",
      description_arabe: "تطبيق ويب للحجز يوفر للمستخدمين العاديين واجهات لحجز 6 أنواع من العروض، ويسمح للمدير بنشر العروض وللمدير العام (Admin) بإدارة المدراء",
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
      technologies: [],
      link_detail: "https://www.linkedin.com/posts/abderrahimelouardi_pfe-soutenance-springboot-ugcPost-7332840468512178178-Ym9U?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmFxoQBgtxROtLl0wzQcJz-SwQ5SI9Spec"
    },
    {
      id: 1,
      titre: "Projet Full-Stack ML pour l'Immobilier",
      titre_arabe: "مشروع متكامل (Full-Stack) للتعلم الآلي (ML) للعقارات",
      titre_anglais: "Full-Stack ML Project for Real Estate",
      img: "myImages/projet2.jpg",
      description_anglais: "Designed an Angular/Spring Boot application (secured with JWT) for real estate price estimation. I exposed a Scikit-learn regression model via a FastAPI API, achieving an $R^2$ score of 0.85 after comprehensive data cleaning (handling missing values, categorical variables).",
      description_arabe: "تصميم تطبيق ويب باستخدام Angular و Spring Boot (مع تأمين JWT) لتقدير أسعار العقارات. لقد قمت بعرض نموذج انحدار (Regression Model) من مكتبة Scikit-learn عبر واجهة برمجية (API) باستخدام FastAPI، وحققتُ درجة $R^2$ بلغت 0.85 بعد تنظيف شامل للبيانات (بما في ذلك معالجة القيم المفقودة والمتغيرات الفئوية",
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
      technologies: [],
      link_detail: "https://www.linkedin.com/posts/abderrahimelouardi_machinelearning-fastapi-springboot-ugcPost-7375510421752934400-vfLl?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmFxoQBgtxROtLl0wzQcJz-SwQ5SI9Spec"
    },
    {
      id: 2,
      titre: "Analyse de Données et Segmentation Client",
      titre_anglais: "Data Analysis and Customer Segmentation",
      titre_arabe: "تحليل البيانات وتجزئة العملاء",
      img: "myImages/projet3.jpg",
      description: "Projet d'analyse de données sur un dataset bancaire incluant l'exploration et le prétraitement (Normalisation, One-Hot Encoding). L'algorithme K-Means a été appliqué pour segmenter la clientèle, fournissant des groupes distincts basés sur les caractéristiques pour des stratégies commerciales ciblées.",
      description_anglais: "Data analysis project on a banking dataset, including exploration and preprocessing (Normalization, One-Hot Encoding). The K-Means algorithm was applied to segment the clientele, providing distinct groups based on characteristics for targeted business strategies.",
      description_arabe: "مشروع لتحليل البيانات على مجموعة بيانات بنكية، متضمناً الاستكشاف والمعالجة المسبقة (التطبيع/Normalization، ترميز One-Hot Encoding). تم تطبيق خوارزمية K-Means لتجزئة العملاء، مما أسفر عن مجموعات مميزة بناءً على الخصائص، لاستخدامها في استراتيجيات تجارية مستهدفة",
      detail_description: "",
      acteurs: [],
      technologies: [],
      link_detail: "https://www.linkedin.com/posts/abderrahimelouardi_datamining-machinelearning-kmeans-ugcPost-7391530114041196544-LoNA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEmFxoQBgtxROtLl0wzQcJz-SwQ5SI9Spec"
    }
  ]

  Educations: Education[] = [
    {
      id: 1,
      cycle: "Cycle Master",
      cycle_anglais: "Master's Program",
      cycle_arabe: "سلك الماجستير",
      titre_anglais: "Web Intelligence and Data Science",
      titre_arabe: "ذكاء الويب وعلوم البيانات",
      location: "FSDM ,FES",
      date: "2025 - 2027",
      title: "Web Intelligence et Science de Donnees"
    },
    {
      id: 2,
      cycle: "Cycle Licence",
      cycle_anglais: "Bachelor's Program",
      cycle_arabe: "سلك الإجازة",
      titre_anglais: "Mathematical and Computer Science",
      titre_arabe: "علوم الرياضيات والمعلوماتية",
      location: "FSDM ,FES",
      date: "2022 - 2025",
      title: "Science Mathematique et informatique"
    },
    {
      id: 3,
      cycle: "Baccalaureat ",
      cycle_anglais: "High School Diploma",
      cycle_arabe: "شهادة البكالوريا",
      titre_anglais: "Physics - Chemistry",
      titre_arabe: "فيزياء - كيمياء",
      location: "Lycee Al Amal ,FES",
      date: "2021 - 2022",
      title: "Physique - Chimie"
    }
  ]

  Languages: Technologie[] = [
    {
      id: 1,
      img: "outilsFolder/java.png",
      name: "Java",
      version: "17"
    },
    {
      id: 2,
      img: "outilsFolder/python.png",
      name: "Python",
      version: "3"
    },
    {
      id: 3,
      img: '',
      name: "C",
      version: ""
    },
    {
      id: 3,
      img: '',
      name: "JS",
      version: ""
    },
    {
      id: 3,
      img: '',
      name: "TS",
      version: ""
    },
    {
      id: 3,
      img: '',
      name: "PHP",
      version: ""
    },
  ]

  Database: Technologie[] = [
    {
      id: 1,
      img: '',
      name: 'Oracl',
      version: "21c"
    },
    {
      id: 2,
      img: "",
      name: "MySql",
      version: ""
    }
  ]
  Freamwork: Technologie[] = [
    {
      id: 1,
      img: '',
      name: "Spring Boot",
      version: ''
    },
    {
      id: 2,
      img: "",
      name: "Angular",
      version: "20"
    },
    {
      id: 3,
      img: "",
      name: "Fast Api",
      version: ""
    },
    {
      id: 4,
      img: "",
      name: "React Js",
      version: ""
    },
    {
      id: 5,
      img: "",
      name: "Next Js",
      version: ""
    },
    {
      id: 6,
      img: "",
      name: "Bootstrap",
      version: ""
    },
    {
      id: 7,
      img: "",
      name: "Tailwind",
      version: ""
    }
  ]

  AI: Technologie[] = [
    {
      id: 1,
      img: "",
      name: "Scikit-learn",
      version: ""
    }
  ]

  Tools: Technologie[] = [
    {
      id: 1,
      img: "",
      name: "Git",
      version: ""
    },
    {
      id: 2,
      img: "",
      name: "Postman",
      version: ""
    },
    {
      id: 3,
      name: "Githup",
      img: "",
      version: ""
    }
  ]



}
