import { Component, Input } from '@angular/core';
import { Education } from '../Entities/Education';

@Component({
  selector: 'app-education-card',
  imports: [],
  templateUrl: './education-card.html',
  styleUrl: './education-card.css',
})
export class EducationCard {
  @Input() education: Education = {
    id: -1,
    cycle: '',
    date: '',
    location: '',
    title: ''
  }
}
