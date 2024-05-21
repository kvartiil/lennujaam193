import { Component, VERSION, OnInit } from '@angular/core';

@Component({
  selector: 'graaf12',
  templateUrl: './graaf12.component.html',
  styleUrls: [ './graaf12.component.scss' ]
})
export class Graaf12Component implements OnInit  {
  name = 'Angular ' + VERSION.major;
  options: any;

  ngOnInit(): void {
    const xAxisData = [];
    const data1 = [];
    const data2 = [];

    

    this.options = {
      legend: {},
      color: ['#005AA3', '#004277', '#00213C'],
      tooltip: {},
      dataset: {
        source: [
          ['indikaator', 'Maakond', 'Tegevus', 'Suurus'],
          ['Efektiivsus', 43.3, 85.8, 93.7],
          ['Maksevõime', 83.1, 73.4, 55.1],
          ['Finantsvõimendus', 86.4, 65.2, 82.5],
          ['Tasuvus', 72.4, 53.9, 39.1],
          ['Tööjõu tootlikkus', 23, 45, 22]
        ]
      },
      xAxis: { type: 'category',
      axisLabel: { interval: 0, rotate: 20 } },
      yAxis: {},
      series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      
    };
    }
}

