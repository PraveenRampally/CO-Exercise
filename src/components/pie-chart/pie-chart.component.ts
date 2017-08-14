import { Component,Input } from '@angular/core';

@Component({
  selector: 'pie-chart',
  template: require('./pie-chart.component.html')
})
export class PieChartComponent {
 
  @Input() pieChartData:number[];
  public pieChartType:string = 'pie';
  public pieChartColors: Array<any> = [{
    backgroundColor: [
      "#368137",
      "#ec0945"]
  }
  ];
}