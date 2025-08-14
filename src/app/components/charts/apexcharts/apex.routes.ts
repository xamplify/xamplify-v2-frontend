
      import { NgModule } from '@angular/core';
      import { RouterModule, Routes } from '@angular/router';
      
      export const admin: Routes = [  
       {path:'charts/apex-charts',children:[ 
        {
        path: 'line-charts',
        loadComponent: () =>
          import('./line-charts/line-charts.component').then((m) => m.LineChartsComponent),
          title: 'xAmplify - Line Charts'
      },
      {
        path: 'area-charts',
        loadComponent: () =>
          import('./area-charts/area-charts.component').then((m) => m.AreaChartsComponent),
          title: 'xAmplify - Area Charts'
      },
     {
        path: 'bar-charts',
        loadComponent: () =>
          import('./bar-charts/bar-charts.component').then((m) => m.BarChartsComponent),
          title: 'xAmplify - Bar Charts'
      },  {
        path: 'column-charts',
        loadComponent: () =>
          import('./column-charts/column-charts.component').then((m) => m.ColumnChartsComponent),
          title: 'xAmplify - Column Charts'
      },  {
        path: 'mixed-charts',
        loadComponent: () =>
          import('./mixedcharts/mixedcharts.component').then((m) => m.MixedchartsComponent),
          title: 'xAmplify -  MIxed Charts'
      },  {
        path: 'rangearea-charts',
        loadComponent: () =>
          import('./rangeareacharts/rangeareacharts.component').then((m) => m.RangeareachartsComponent),
          title: 'xAmplify - Range Charts'
      },  {
        path: 'timeline-charts',
        loadComponent: () =>
          import('./timelinecharts/timelinecharts.component').then((m) => m.TimelinechartsComponent),
          title: 'xAmplify - TimeLine Charts'
      }, 
       {
        path: 'candlestick-charts',
        loadComponent: () =>
          import('./candlestickcharts/candlestickcharts.component').then((m) => m.CandlestickchartsComponent),
          title: 'xAmplify - CandleStick Charts'
      },  {
        path: 'boxplot-charts',
        loadComponent: () =>
          import('./boxplotcharts/boxplotcharts.component').then((m) => m.BoxplotchartsComponent),
          title: 'xAmplify - Box Plot Charts'
      },
      {
        path: 'bubble-charts',
        loadComponent: () =>
          import('./bubblecharts/bubblecharts.component').then((m) => m.BubblechartsComponent),
          title: 'xAmplify - Bubble Charts'
      },  {
        path: 'scatter-charts',
        loadComponent: () =>
          import('./scattercharts/scattercharts.component').then((m) => m.ScatterchartsComponent),
          title: 'xAmplify - Scatter Charts'
      },  {
        path: 'heatmap-charts',
        loadComponent: () =>
          import('./heatmapcharts/heatmapcharts.component').then((m) => m.HeatmapchartsComponent),
          title: 'xAmplify - HeatMap Charts'
      },  {
        path: 'treemap-charts',
        loadComponent: () =>
          import('./treemapcharts/treemapcharts.component').then((m) => m.TreemapchartsComponent),
          title: 'xAmplify - TreeMap Charts'
      },  {
        path: 'piecharts',
        loadComponent: () =>
          import('./piecharts/piecharts.component').then((m) => m.PiechartsComponent),
          title: 'xAmplify - Pie Charts'
      },  {
        path: 'radialbar-charts',
        loadComponent: () =>
          import('./radialbarcharts/radialbarcharts.component').then((m) => m.RadialbarchartsComponent),
          title: 'xAmplify - Radial Charts'
      },  {
        path: 'radar-charts',
        loadComponent: () =>
          import('./radarcharts/radarcharts.component').then((m) => m.RadarchartsComponent),
          title: 'xAmplify - Radar Charts'
      },
      {
        path: 'polararea-charts',
        loadComponent: () =>
          import('./polarareacharts/polarareacharts.component').then((m) => m.PolarareachartsComponent),
          title: 'xAmplify - Polar Area Charts'
      },
      
      ]}
      ];
      @NgModule({
        imports: [RouterModule.forChild(admin)],
        exports: [RouterModule],
      })
      export class apexchartsRoutingModule {
        static routes = admin;
      }