import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from 'ng-apexcharts';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexFill,
  ApexDataLabels,
  ApexLegend,
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
  fill: ApexFill;
  legend: ApexLegend;
  dataLabels: ApexDataLabels;
};

@Component({
  selector: 'app-chartdonut',
  templateUrl: './chartdonut.component.html',
  styleUrls: ['./chartdonut.component.scss'],
})
export class ChartdonutComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() {}

  ngOnInit(): void {
    this.chartOptions = {
      series: [36, 40, 25],
      chart: {
        type: 'donut',
      },
      labels: ['Micro', 'Small', 'Medium'],
      plotOptions: {
        pie: {
          expandOnClick: true,
          offsetX: 3,
          offsetY: 0,
          customScale: 1,

          donut: {
            size: '50%',
            background: 'transparent',
            labels: {
              show: true,
              name: {
                show: true,
              },
              value: {
                show: true,
              },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                fontSize: '20px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                fontWeight: 600,
                color: '#373d3f',
                formatter: function (w: any) {
                  return w.globals.seriesTotals.reduce((a: any, b: any) => {
                    return a + b;
                  }, 0);
                },
              },
            },
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      dropShadow: {
        enabled: true,
      },

      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function (seriesName: any, opts: any) {
          return seriesName + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
      ],
    };
  }
}
