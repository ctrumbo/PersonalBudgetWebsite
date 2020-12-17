import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'pbw-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent implements OnInit {

  //doughnut chart
  public barChartLabels1 = ['2000', '2001', '2002', '2003'];
  public barChartData1 = [{data: [120, 150, 180, 90]}];
  public barChartType1 = '1';
  public barChartOptions1 = {
    scaleShowVertical: false,
    responsive: true
  };
  public barChartLegend1 = true;
  //bar chart
  public barChartType2 = '2';
  //radar
  public barChartType3 = '3';
  constructor() { }


  ngOnInit(): void {
  }

}
