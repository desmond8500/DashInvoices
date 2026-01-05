import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-resume-card',
  imports: [],
  templateUrl: './resume-card.html',
  styleUrl: './resume-card.css',
})
export class ResumeCard {
  @Input() name: any = '';
  @Input() content: any = '';
}
