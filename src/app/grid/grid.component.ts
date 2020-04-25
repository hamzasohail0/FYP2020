import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {Chart} from 'chart.js';
import { NullAstVisitor } from '@angular/compiler';
import { HttpClient } from "@angular/common/http";





@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {

  LineChart=[];
  BarChart=[];
  PieChart=[];
  LineChart2=[];
  
  
  constructor() { }
 
 
 

  ngOnInit(){

   var jsonfile= {
        "TempandandHumidity" :[
            {
               "Labels" : "1pm",
                "data" : 22
                   
            },
            {
                "Labels" : "2pm",
                 "data" : 21
                    
             },
             {
                "Labels" : "3pm",
                 "data" : 19
                    
             },
             {
                "Labels" : "4pm",
                 "data" : 18
                    
             },
             {
                "Labels" : "5pm",
                 "data" : 17.5
                    
             },
             {
                "Labels" : "6pm",
                 "data" : 21.8
                    
             },
             {
                "Labels" : "7pm",
                 "data" : 10
                    
             },
             {
                "Labels" : "8pm",
                 "data" : 15
                    
             },
             {
                "Labels" : "9pm",
                 "data" : 16
                    
             },
             {
                "Labels" : "10pm",
                 "data" : 20
                    
             },
             {
                "Labels" : "11pm",
                 "data" : 3
                    
             },
             {
                "Labels" : "12pm",
                 "data" : 1
                    
             }
        ]
        
    }
    var labels1 = jsonfile.TempandandHumidity.map(function(e) {
        return e.Labels;
     });
     var DATA = jsonfile.TempandandHumidity.map(function(e) {
        return e.data;
     });;
    
    
    let LineChart = new Chart('lineChart', {

      type: 'line',
    data: {
     labels: labels1,
     datasets: [{
         label: 'Graph',
         data:  DATA,

         fill:false,
         lineTension:1,
         borderColor:"pink",
         borderWidth: 2,
         pointBackgroundColor:'red',
         pointHoverBackgroundColor: 'red',
         cubicInterpolationMode: "monotone",
        
         
     }]
    }, 
    options: {
        
        
      
      
     title:{
         text:"Temperature & Humidity",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
        },
         animation:
         {
           duration:7000,
           easing:'linear',
        

         }
         
     }
    
    });

    let PieChart = new Chart('pieChart', {
      type: 'doughnut',
    data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
         label: '# of Votes',
         data: [9,7 , 3, 5, 2, 10,],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 64, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Flame Sensor",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     }
    }
    });

    let BarChart = new Chart('barChart', {
      type: 'bar',
    data: {
     labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
     datasets: [{
         label: '# of Votes',
         data: [9,7 , 3, 5, 2, 10],
         backgroundColor: [
             'rgba(255, 99, 132, 0.2)',
             'rgba(54, 162, 235, 0.2)',
             'rgba(255, 206, 86, 0.2)',
             'rgba(75, 192, 192, 0.2)',
             'rgba(153, 102, 255, 0.2)',
             'rgba(255, 159, 70, 0.2)'
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             'rgba(255, 206, 86, 1)',
             'rgba(75, 192, 192, 1)',
             'rgba(153, 102, 255, 1)',
             'rgba(255, 159, 64, 1)'
         ],
         borderWidth: 1
     }]
    }, 
    options: {
     title:{
         text:"Gas Sensor",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
     },
      animation:
         {
           duration:4000,
           easing:'easeInOutQuart'
         }
     }
    
    });

    let LineChart2 = new Chart('lineChart2', {
      type: 'line',
    data: {
     labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
     datasets: [{
         label: 'Graph',
         data: [2,6, 2, 8, 1, 12,17,10,12,1,3,9],

         fill:false,
         lineTension:0.5,
         borderColor:"purple",
         borderWidth: 1
     }]
    }, 
    options: {
      
      
     title:{
         text:"Dust Sensor",
         display:true
     },
     scales: {
         yAxes: [{
             ticks: {
                 beginAtZero:true
             }
         }]
        },
         animation:
         {
           duration:4000,
           easing:'linear'
          
         }
     }
    });
  
  }
}