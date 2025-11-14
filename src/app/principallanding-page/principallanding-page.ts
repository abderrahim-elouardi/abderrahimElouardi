import { Component, inject } from '@angular/core';
import { CongfigurationService } from '../configuration/congfiguration-service';
import { DataService } from '../dataService/data-service';
import { ProjetEntite } from '../Entities/ProjetEntite';
import { Projet } from '../projet/projet';
import { CommonModule, NgClass } from '@angular/common';
import { Education } from '../Entities/Education';
import { CardEducation } from '../card-education/card-education';
import { Technologie } from '../Entities/Technologie';

@Component({
  selector: 'app-principallanding-page',
  imports: [CommonModule, NgClass, Projet, CardEducation],
  standalone: true,
  templateUrl: './principallanding-page.html',
  styleUrl: './principallanding-page.css',
})
export class PrincipallandingPage {
  francais_nom: string = "Abderrahim El Ouardi"
  francais_titre = "Data Scientist et AI Engineur"
  francais_introduction = "Étudiant en Master en Sciences des Données et Systèmes Intelligents, je suis profondément passionné par l'Intelligence Artificielle et l'exploitation des données. Ma double casquette de Développeur Full Stack me confère la capacité unique d'implémenter des solutions d'IA complètes. Je cherche constamment à transformer la théorie en applications concrètes et performantes."
  francais_introduction_Detaille = "je me présente, je suis un étudiant en Master en Sciences des Données et Systèmes Intelligents, un domaine qui se trouve au cœur de la révolution technologique actuelle.Ma passion pour la Science des Données et l'Intelligence Artificielle n'est pas seulement académique : elle est le moteur de mon parcours et de mes projets. J'ai un profond intérêt pour la manière dont nous pouvons extraire des connaissances significatives à partir de données complexes et pour le développement de modèles d'IA capables de transformer des industries.En parallèle de ma spécialisation en IA, je possède également une solide expertise en tant que Développeur Full Stack. Cette double compétence me permet non seulement de concevoir et d'entraîner des modèles sophistiqués, mais aussi de les intégrer de manière fluide dans des applications web ou des systèmes prêts à l'emploi. Je suis capable de gérer un projet de bout en bout, de la collecte et l'analyse des données (Back-end) à l'interface utilisateur intuitive (Front-end)."
  image1 = "myImages/myPhoto1.jpg"
  image2 = "myImages/myPhoto2.jpg"
  cvPath: string = "myImages/ABDERRAHIM EL OUARDI (7).pdf"
  anglais_titre: string = "data Analyst"
  arabe_nom: string = " عبد الرحيم الوردي"
  arabe_titre: string = "محلل بيانات"
  arabe_instroduction: string = "طالب ماجستير في علوم البيانات والأنظمة الذكية، لدي شغف عميق بالذكاء الاصطناعي واستغلال البيانات. إن خبرتي المزدوجة كمطور متكامل (Full Stack Developer) تمنحني القدرة الفريدة على تطبيق حلول الذكاء الاصطناعي بشكل متكامل. أسعى باستمرار لتحويل النظرية إلى تطبيقات عملية وعالية الأداء."
  anglais_introduction: string = "A Master's student in Data Science and Intelligent Systems, I am deeply passionate about Artificial Intelligence and data exploitation. My dual background as a Full Stack Developer provides me with the unique ability to implement comprehensive AI solutions. I constantly seek to transform theory into concrete, high-performance applications."

  config = inject(CongfigurationService)
  data = inject(DataService)


  projects: ProjetEntite[] = []
  educations: Education[] = []
  outilTechnologies: Technologie[] = []
  Languages: Technologie[] = []
  Database: Technologie[] = []
  Freamwork: Technologie[] = []
  AI: Technologie[] = []
  Tools: Technologie[] = []


  constructor() {
    this.projects = this.data.projects
    this.educations = this.data.Educations
    this.Languages = this.data.Languages
    this.Database = this.data.Database
    this.Freamwork = this.data.Freamwork
    this.AI = this.data.AI
    this.Tools = this.data.Tools

  }

  basculerEng() {
    this.config.longue = "EN"
  }

  basculerFr() {
    this.config.longue = "FR"
  }
  basculerAr() {
    this.config.longue = "Ar"

  }
  changeMode() {
    this.config.mode = !this.config.mode
  }

  basculerLanguages() {
    this.config.skill = "Languages"

  }

  basculerDatabase() {
    this.config.skill = "Database"
  }
  basculerFreamwork() {
    this.config.skill = "Freamwork"
  }
  basculerAi() {
    this.config.skill = "AI"
  }
  basculerTools() {
    this.config.skill = "Tools"
  }
}
