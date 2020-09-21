import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit, OnChanges{

  @Input() characters: Character[];
  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  labelChart = 'Personajes Breaking Bad';
  public barChartLabels: Label[] = [];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  public barChartData: ChartDataSets[] = [
    { data: [], label: this.labelChart },
  ];
  public colors = [{
    backgroundColor: '#3d6e52'
  }];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:any){
   this.characters = changes.characters.currentValue;
   this.loadChartData();

  }
  loadChartData(){
   this.barChartLabels = [];
   this.barChartData = [
    { data: [], label: this.labelChart },
  ];
  this.characters.map((item: Character)=>{
    this.barChartLabels.push(item.name);
    this.barChartData[0].data.push(item.votes);
  })
  }
  // events
 
}