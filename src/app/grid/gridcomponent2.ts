import { Component, OnInit, IterableDiffers } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import {Chart} from 'chart.js';
import { NullAstVisitor } from '@angular/compiler';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import * as admin from 'firebase-admin';
import {AngularFireDatabase} from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable, Subscription } from 'rxjs';
import {TestService} from '../test.service';
import { tick } from '@angular/core/testing';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
  })

  export class GridComponent2 implements OnInit 
{   getTempSubs: Subscription; 
    LineChart=[];
    LineChart3=[];
    LineChart4=[];
    LineChart2=[];
    graphYaxisData =[];
    Dusttt = [];
    LPG = [];
    CO = [];
    Smoke = [];
    Humidity = [];
    constructor(private testservice : TestService) {}

    ngOnInit(): void 
    {
        this.drawLineChart();
        this.Gas();
        this.MyDust();
        this.Flame();


    }
    Flame() {
        var jsonfile1= {
            "DUSTTT" :[
                {
                   "Labels" : "12:00pm",
                    "data" : 300
                       
                },
                {
                    "Labels" : "12:01pm",
                     "data" : 200
                        
                 },
                 {
                    "Labels" : "12:02pm",
                     "data" : 210
                        
                 },
                 {
                    "Labels" : "12:03pm",
                     "data" : 310
                        
                 },
                 {
                    "Labels" : "12:04pm",
                     "data" : 422
                        
                 },
                 {
                    "Labels" : "12:05pm",
                     "data" : 700
                        
                 },
                 {
                    "Labels" : "12:06pm",
                     "data" : 295
                        
                 },
                 {
                    "Labels" : "12:07pm",
                     "data" : 500
                        
                 },
                 {
                    "Labels" : "12:08pm",
                     "data" : 534
                        
                 },
                 {
                    "Labels" : "12:09pm",
                     "data" : 211
                        
                 },
                 {
                    "Labels" : "12:10pm",
                     "data" : 250
                        
                 },
                 {
                    "Labels" : "12:11pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:12pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:13pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:14pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:15pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:16pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:17pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:18pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:19pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:20pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:21pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:22pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:23pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:23pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:24pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:25pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:26pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:27pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:28pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:29pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:30pm",
                     "data" : 195
                        
                 },

                 
                 
            ]
            
        }
        var labels2 = jsonfile1.DUSTTT.map(function(e) {
            return e.Labels;
         });
         var DATA2 = jsonfile1.DUSTTT.map(function(e) {
            return e.data;
         });;

        let LineChart4 = new Chart ('lineChart4' , {
            type:"line",
            data : {
                labels : labels2,
                datasets : 
            [
                { label: 'Flame',
                data: [1,23,4,5],
       
                fill:false,
                lineTension:0.5,
                pointBackgroundColor:'#2CC2A5',
                borderColor:"#2CC2A5",
                borderWidth: 1

                }
            ]

            },
        options:
        {
           title :
           {
               text : "Flame Sensor",
               display:true
           },
           scales :
           {
               yAxes : 
            [ {
                ticks:
                {
                    beginAtZero: true
                }

               
            }]
           },
        animation : 
        {
           duration : 5000,
           easing : 'linear'
        }
            
        
    }

        
})
        
}



    MyDust() {

        var jsonfile1= {
            "DUSTTT" :[
                {
                   "Labels" : "12:00pm",
                    "data" : 300
                       
                },
                {
                    "Labels" : "12:01pm",
                     "data" : 200
                        
                 },
                 {
                    "Labels" : "12:02pm",
                     "data" : 210
                        
                 },
                 {
                    "Labels" : "12:03pm",
                     "data" : 310
                        
                 },
                 {
                    "Labels" : "12:04pm",
                     "data" : 422
                        
                 },
                 {
                    "Labels" : "12:05pm",
                     "data" : 700
                        
                 },
                 {
                    "Labels" : "12:06pm",
                     "data" : 295
                        
                 },
                 {
                    "Labels" : "12:07pm",
                     "data" : 500
                        
                 },
                 {
                    "Labels" : "12:08pm",
                     "data" : 534
                        
                 },
                 {
                    "Labels" : "12:09pm",
                     "data" : 211
                        
                 },
                 {
                    "Labels" : "12:10pm",
                     "data" : 250
                        
                 },
                 {
                    "Labels" : "12:11pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:12pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:13pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:14pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:15pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:16pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:17pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:18pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:19pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:20pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:21pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:22pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:23pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:23pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:24pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:25pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:26pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:27pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:28pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:29pm",
                     "data" : 195
                        
                 },
                 {
                    "Labels" : "12:30pm",
                     "data" : 195
                        
                 },

                 
                 
            ]
            
        }
        var labels2 = jsonfile1.DUSTTT.map(function(e) {
            return e.Labels;
         });
         var DATA2 = jsonfile1.DUSTTT.map(function(e) {
            return e.data;
         });;

         let LineChart2 = new Chart('lineChart2', {
            type: 'line',
          data: {
           labels:labels2  ,
           datasets: [{
               label: 'Dust',
               data: this.Dusttt,
      
               fill:false,
               lineTension:0.5,
               pointBackgroundColor:'#2CC2A5',
               borderColor:"#2CC2A5",
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
                 duration:5000,
                 easing:'linear'
                
               }
           }
          });
        
    }
    Gas() {
        this.getTempSubs = this.testservice.getLPG().subscribe (data => {
            console.log (data.map(item => {return {"data" : item.payload.toJSON()}}));
            this.LPG = data.map (item => {return {"data" : item.payload.toJSON()}});
            this.LPG = this.LPG.map(obj => +obj.data.replace('ppm',''))
            console.log ('my LPG data' , this.LPG) 
                 
         this.getTempSubs = this.testservice.getCO().subscribe (data => {
             console.log (data.map (item => {return {"data" : item.payload.toJSON()}}));
             console.log ("Subscription HIT for CO");
             this.CO =  data.map (item => {return {"data" : item.payload.toJSON()}});
             this.CO = this.CO.map(obj => +obj.data.replace('ppm',''))
             console.log ('my LPG data' , this.CO)
             
         this.getTempSubs = this.testservice.getSmoke().subscribe (data => {
             console.log (data.map(item => {return {"data" : item.payload.toJSON()}}));
             this.Smoke =  data.map (item => {return {"data" : item.payload.toJSON()}});
             this.Smoke = this.CO.map(obj => +obj.data.replace('ppm',''))
             console.log ('my LPG data' , this.Smoke)
     
         })    
     
         })
            
     })
             var jsonfile= {
                 "Gas" :[ 
                     {
                        "Labels" : "12:00pm",
                         "data" : 33
                            
                     },
         
                     {
                         "Labels" : "12:01pm",
                          "data" : 32
                             
                      },
                      {
                         "Labels" : "12:02pm",
                          "data" : 19
                             
                      },
                      {
                         "Labels" : "12:03pm",
                          "data" : 18
                             
                      },
                      {
                         "Labels" : "12:04pm",
                          "data" : 17.5
                             
                      },
                      {
                         "Labels" : "12:05pm",
                          "data" : 21.8
                             
                      },
                      {
                         "Labels" : "12:06pm",
                          "data" : 10
                             
                      },
                      {
                         "Labels" : "12:07pm",
                          "data" : 15
                             
                      },
                      {
                         "Labels" : "12:08pm",
                          "data" : 16
                             
                      },
                      {
                         "Labels" : "12:09pm",
                          "data" : 20
                             
                      },
                      {
                         "Labels" : "12:10pm",
                          "data" : 3
                             
                      },
                      {
                         "Labels" : "12:11pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:12pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:13pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:14pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:15pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:16pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:17pm",
                          "data" : 1
                             
                      },
                      {
                         "Labels" : "12:18pm",
                          "data" : 1
                             
                      },
                 ]
                 
             }
             var labels1 = jsonfile.Gas.map(function(e) 
             {
                 return e.Labels;
             });
           
              var DATA = jsonfile.Gas.map(function(e) 
             {
                 return e.data;
             });;
     
             let LineChart3 = new  Chart ('lineChart3' , 
             {
                 type: 'line',
                 data : {
                     labels : labels1,
                     datasets: [
                     {
                         label :"CO",
                         data : DATA,
                         fill : false,
                         lineTension:0.5,
                         borderColor:"#2E5BFF",
                        
                        backgroundColor:"#2E5BFF",
                        borderWidth:1,
                        pointBackgroundColor: '#2E5BFF',
                        pointHoverBackgroundColor:'#2E5BFF',
                        cubicInterpolationMode: "monotone",
     
                     },
     
                     {
                         label :"LPG",
                         data : [65.55,88,32,10.5,22,6],
                         fill:false,
                         lineTension:0.5,
                        borderColor:"#2CC2A5",
                        borderWidth:1,
                        backgroundColor:'#2CC2A5',
                        pointBackgroundColor: '#2CC2A5',
                        pointHoverBackgroundColor:'#2CC2A5',
                        cubicInterpolationMode: "monotone",
     
                     },
     
                     {
                         label :"Smoke",
                         data : [3,5,6,7,5,6,73,35,8],
                         fill: false,
                         lineTension:0.5,
                        borderColor:"#8C54FF",
                        borderWidth:0.5,
                        backgroundColor:'#8C54FF',
                        pointBackgroundColor: '#8C54FF',
                        pointHoverBackgroundColor:'#8C54FF',
                        cubicInterpolationMode: "monotone",
     
                     }
     
                 ]
                 },
                 options : {
                     responsive :true,
     
                     title:
                     {
                         text: "Gases",
                         display:true,
     
                     },
                     scales :
                     {
                         yAxes:[
                             {
                                 scaleLabel :
                                 {
                                     display:true,
                                 },
                                 ticks :
                                 {
                                     beginAtZero : true
                                 }
                             }
                         ]
                         
                     },
                     animation :
                     {
                         duration:5000,
                         easing:'linear'
                     }
                  
                 }
                 
     
             });
        
    }
    
    drawLineChart() {
        var jsonfile= {
            "Tempeature" :[ 
                {
                   "Labels" : "12:00pm",
                    "data" : 33
                       
                },
    
                {
                    "Labels" : "12:01pm",
                     "data" : 32
                        
                 },
                 {
                    "Labels" : "12:02pm",
                     "data" : 19
                        
                 },
                 {
                    "Labels" : "12:03pm",
                     "data" : 18
                        
                 },
                 {
                    "Labels" : "12:04pm",
                     "data" : 17.5
                        
                 },
                 {
                    "Labels" : "12:05pm",
                     "data" : 21.8
                        
                 },
                 {
                    "Labels" : "12:06pm",
                     "data" : 10
                        
                 },
                 {
                    "Labels" : "12:07pm",
                     "data" : 15
                        
                 },
                 {
                    "Labels" : "12:08pm",
                     "data" : 16
                        
                 },
                 {
                    "Labels" : "12:09pm",
                     "data" : 20
                        
                 },
                 {
                    "Labels" : "12:10pm",
                     "data" : 3
                        
                 },
                 {
                    "Labels" : "12:11pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:12pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:13pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:14pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:15pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:16pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:17pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:18pm",
                     "data" : 1
                        
                 },
                 {
                    "Labels" : "12:19pm",
                     "data" : 1
                        
                 },
            ]
            
        }
        var labels1 = jsonfile.Tempeature.map(function(e) {
            return e.Labels;
         });
      
         var DATA = jsonfile.Tempeature.map(function(e) {
            return e.data;
         });;

         let LineChart = new Chart('lineChart', {

          
            type: 'line',
          data: {
          labels: labels1,
           datasets: [{
               label: 'Temp',
               data:  this.graphYaxisData,
      
               fill:false,
               lineTension:1,
               borderColor:"pink",
               borderWidth: 2,
               pointBackgroundColor:'red',
               pointHoverBackgroundColor: 'red',
               cubicInterpolationMode: "monotone",
              
               
           },


           {

               label : "Humidity",
               data : this.Humidity,
               fill:false,
               lineTension:1,
               borderColor:"#8C54FF",
               borderWidth: 2,
               pointBackgroundColor:'#8C54FF',
               pointHoverBackgroundColor: '#8C54FF',
               cubicInterpolationMode: "monotone",
               
           }
        ]
          }, 
          options: {
              
              responsive : true,
            
            
           title:{
               text:"Temperature Sensor",
               display:true
           },
           scales: {
               yAxes: [{
                scaleLabel: {
                    display: true,
                    
                },
                
                   ticks: {
                       beginAtZero:true
                   }
               }]
              },

               animation:
               {
                 duration:5000,
                 easing:'linear',
              
      
               }
               
           }
          
          });
        
    }

}

   
