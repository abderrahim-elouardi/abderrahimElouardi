import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CongfigurationService {
  mode: boolean = false
  longue: string = "anglais"
}
