import { Component,Input } from '@angular/core';

@Component({
  selector: 'coverage-bar',
  styles: [require('./progress-bar.component.less').toString()],
  template: require('./progress-bar.component.html')
})
export class ProgressBarComponent {
  
  @Input() coverage:number;
 
}