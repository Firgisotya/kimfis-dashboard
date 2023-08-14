import { Component } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
  ApexYAxis,
  ApexLegend,
  ApexPlotOptions,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";

export type Chart = {
  // line
  seriesLine: ApexAxisChartSeries;
  chartLine: ApexChart;
  xline: ApexXAxis;
  yline: ApexYAxis;
  dataLabelsLine: ApexDataLabels;
  gridLine: ApexGrid;
  strokeLine: ApexStroke;
  titleLine: ApexTitleSubtitle;

  // area
  seriesArea: ApexAxisChartSeries;
  chartArea: ApexChart;
  xarea: ApexXAxis;
  strokeArea: ApexStroke;
  dataLabelsArea: ApexDataLabels;
  yarea: ApexYAxis;
  titleArea: ApexTitleSubtitle;
  labelsArea: string[];
  legendArea: ApexLegend;
  subtitleArea: ApexTitleSubtitle;

  // column
  seriesColumn: ApexAxisChartSeries;
  chartColumn: ApexChart;
  dataLabelsColumn: ApexDataLabels;
  plotOptionsColumn: ApexPlotOptions;
  ycolumn: ApexYAxis;
  xcolumn: ApexXAxis;
  fillColumn: ApexFill;
  tooltipColumn: ApexTooltip;
  strokeColumn: ApexStroke;
  legendColumn: ApexLegend;

  // mixed
  seriesMix: ApexAxisChartSeries;
  chartMix: ApexChart;
  xmix: ApexXAxis;
  ymix: ApexYAxis | ApexYAxis[];
  titleMix: ApexTitleSubtitle;
  labelsMix: string[];
  strokeMix: any; // ApexStroke;
  dataLabelsMix: any; // ApexDataLabels;
  fillMix: ApexFill;
  tooltipMix: ApexTooltip;


};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  public chart: Partial<Chart> | any;


  constructor() {

  }

  ngOnInit() {

    // chart line
    this.chart = {
      // line
      seriesLine: [
        {
          name: "Desktops",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chartLine: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabelsLine: {
        enabled: false
      },
      strokeLine: {
        curve: "straight"
      },
      gridLine: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xline: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep"
        ],
        labels: {
          style: {
            colors: "#038ff9"
          }
        }
      },
      yline: {
        labels: {
          style: {
            colors: "#038ff9"
          },
          show: true,
        }
      },

      // area
      seriesArea: [
        {
          name: "STOCK ABC",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }
      ],
      chartArea: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabelsArea: {
        enabled: false
      },
      strokeArea: {
        curve: "straight"
      },
      subtitleArea: {
        text: "Price Movements",
        align: "left"
      },
      labelsArea: ["13 Nov 2017", "14 Nov 2017", "15 Nov 2017", "16 Nov 2017", "17 Nov 2017", "20 Nov 2017", "21 Nov 2017", "22 Nov 2017", "23 Nov 2017"],
      xarea: {
        type: "datetime",
        labels: {
          style: {
            colors: "#038ff9"
          }
        }
      },
      yarea: {
        opposite: true,
        labels: {
          style: {
            colors: "#038ff9"
          }
        }
      },
      legendArea: {
        horizontalAlign: "left"
      },

      // column
      seriesColumn: [
        {
          name: "Net Profit",
          data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
        },
        {
          name: "Revenue",
          data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
        },
        {
          name: "Free Cash Flow",
          data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
        }
      ],
      chartColumn: {
        type: "bar",
        height: 350
      },
      plotOptionsColumn: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded"
        }
      },
      dataLabelsColumn: {
        enabled: false
      },
      strokeColumn: {
        show: true,
        width: 2,
        colors: ["transparent"]
      },
      xcolumn: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct"
        ],
        labels: {
          style: {
            colors: "#038ff9"
          }
        }
      },
      ycolumn: {
        title: {
          text: "$ (thousands)"
        },
        labels: {
          style: {
            colors: "#038ff9"
          }
        }
      },
      fillColumn: {
        opacity: 1
      },
      tooltipColumn: {
        y: {

        }
      },

      // mixed
      seriesMix: [
        {
          name: "Website Blog",
          type: "column",
          data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        },
        {
          name: "Social Media",
          type: "line",
          data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }
      ],
      chartMix: {
        height: 350,
        type: "line"
      },
      strokeMix: {
        width: [0, 4]
      },
      titleMix: {
        text: "Traffic Sources"
      },
      dataLabelsMix: {
        enabled: true,
        enabledOnSeries: [1]
      },
      labelsMix: [
        "01 Jan 2001",
        "02 Jan 2001",
        "03 Jan 2001",
        "04 Jan 2001",
        "05 Jan 2001",
        "06 Jan 2001",
        "07 Jan 2001",
        "08 Jan 2001",
        "09 Jan 2001",
        "10 Jan 2001",
        "11 Jan 2001",
        "12 Jan 2001"
      ],
      xmix: {
        type: "datetime",
        labels: {
          style: {
            colors: "#038ff9"
          }
        }
      },
      ymix: [
        {
          title: {
            text: "Website Blog"
          }
        },
        {
          opposite: true,
          title: {
            text: "Social Media"
          }
        },
        {
          labels: {
            style: {
              colors: "#038ff9"
            }
          }
        }


      ]

    }





  }

}
