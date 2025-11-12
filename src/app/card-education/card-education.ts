import { Component, Input } from '@angular/core';
import { Education } from '../Entities/Education';

@Component({
  selector: 'app-card-education',
  imports: [],
  templateUrl: './card-education.html',
  styleUrl: './card-education.css',
})
export class CardEducation {
  @Input() education: Education = {
    id: -1,
    cycle: '',
    date: '',
    location: '',
    title: ''
  }

}
