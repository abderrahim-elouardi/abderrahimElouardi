import { Component, inject, Input } from '@angular/core';
import { Education } from '../Entities/Education';
import { DataService } from '../dataService/data-service';
import { CongfigurationService } from '../configuration/congfiguration-service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card-education',
  imports: [NgIf],
  templateUrl: './card-education.html',
  styleUrl: './card-education.css',
})
export class CardEducation {
  @Input() education: Education = {
    id: -1,
    cycle: '',
    date: '',
    location: '',
    title: '',
    cycle_anglais: "",
    cycle_arabe: "",
    titre_anglais: "",
    titre_arabe: ""
  }

  config = inject(CongfigurationService)



}
