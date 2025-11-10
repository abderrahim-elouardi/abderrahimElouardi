import { Component, Input } from '@angular/core';
import { EducationCard } from '../education-card/education-card';
import { Education } from '../Entities/Education';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-education-row',
  imports: [EducationCard, NgIf],
  templateUrl: './education-row.html',
  styleUrl: './education-row.css',
})
export class EducationRow {
  @Input() education: Education = {
    id: -1,
    cycle: '',
    date: '',
    location: '',
    title: ''
  }
}
