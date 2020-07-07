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
// import {TestService} from 'src/app/test.service';
import {TestService} from '../test.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit {
    
  getTempSubs: Subscription; 

  LineChart=[];
  LineChart3=[];
  PieChart=[];
  LineChart2=[];
  graphYaxisData =[];
  Dusttt = [];
  LPG = [];
  CO = [];
  Smoke = [];
  Humidity = [];

  
  constructor(private testservice : TestService) {}

  ngOnInit() {




    console.log('Getting Tempeature Only');
    let temp1 = [];
    this.getTempSubs = this.testservice.getTemerature().subscribe(data => {
        console.log(data.map(item =>{return {"data": item.payload.toJSON()}}))
        console.log('Foobar subscription hit');
        this.graphYaxisData = data.map(item =>{return {"data": item.payload.toJSON()}});
        console.log('graph data: ',this.graphYaxisData);
         this.drawLineChart();
     
          console.log ('Getting dust Only');
          this.getTempSubs = this.testservice.getDust().subscribe(data => {
          console.log (data.map(item => {return {"data" : item.payload.toJSON()} }));
           console.log ('Subscription Hitttttt');
           this.Dusttt = data.map (item => {return {"data" : item.payload.toJSON()}});
          console.log ('graph data ' ,this.Dusttt);
          this.MyDust();

            
            this.getTempSubs = this.testservice.getHumidity().subscribe (data => {
            console.log (data.map(item => {return {"data" : item.payload.toJSON()}}));
            debugger;
            this.Humidity = data.map (item => {return {"data" : item.payload.toJSON()}});
            console.log ('Humidity' , this.Humidity); 
            this.drawLineChart();

            })

        console.log ('Getting LPG');
        this.getTempSubs = this.testservice.getLPG().subscribe (data => {
            console.log (data.map(item => {return {"data" : item.payload.toJSON()}}));
            console.log ("Subscription HIT FOR LPG");
            this.LPG = data.map (item => {return {"data" : item.payload.toJSON()}});
            console.log ('my LPG data' , this.LPG) ;
            this.MYLPG (); })
       })

       console.log ('Getting CO');
       this.getTempSubs = this.testservice.getCO().subscribe(data => { 
        console.log (data.map (item => {return {"data" : item.payload.toJSON()}}));
        console.log ("Hitting for CO");
        this.CO = data.map (item => {return {"data" : item.payload.toJSON()}});
        console.log (' CO aagi ' , this.CO);
        this.MYLPG();

               ;

       })
          
       
       
    });

   var jsonfile= {
        "Tempeature" :[ 
            {
               "Labels" : "1pm",
                "data" : 33
                   
            },

            {
                "Labels" : "2pm",
                 "data" : 32
                    
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
    var labels1 = jsonfile.Tempeature.map(function(e) {
        return e.Labels;
     });
     var DATA = jsonfile.Tempeature.map(function(e) {
        return e.data;
     });;
    
     var jsonfile1= {
        "Humidity" :[
            {
               "Labels" : "1pm",
                "data" : 300
                   
            },
            {
                "Labels" : "2pm",
                 "data" : 200
                    
             },
             {
                "Labels" : "3pm",
                 "data" : 210
                    
             },
             {
                "Labels" : "4pm",
                 "data" : 310
                    
             },
             {
                "Labels" : "5pm",
                 "data" : 422
                    
             },
             {
                "Labels" : "6pm",
                 "data" : 700
                    
             },
             {
                "Labels" : "7pm",
                 "data" : 295
                    
             },
             {
                "Labels" : "8pm",
                 "data" : 500
                    
             },
             {
                "Labels" : "9pm",
                 "data" : 534
                    
             },
             {
                "Labels" : "10pm",
                 "data" : 211
                    
             },
             {
                "Labels" : "11pm",
                 "data" : 250
                    
             },
             {
                "Labels" : "12pm",
                 "data" : 195
                    
             }
        ]
        
    }
    var labels2 = jsonfile1.Humidity.map(function(e) {
        return e.Labels;
     });
     var DATA2 = jsonfile1.Humidity.map(function(e) {
        return e.data;
     });;
    
   
  
    let PieChart = new Chart('pieChart', {
      type: 'doughnut',
    data: {
     labels: ["FireYes", "FireNo"],
     datasets: [{
         label: '# of Votes',
         data: [0,1],
         backgroundColor: [
             '#2E5BFF',
             'rgba(54, 162, 235, 0.7)',
         ],
         borderColor: [
             'rgba(255,99,132,1)',
             'rgba(54, 162, 235, 1)',
             
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

    
    
    
  
  }
      
     MYLPG() {
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
            ]
            
        }
        var labels1 = jsonfile.Tempeature.map(function(e) {
            return e.Labels;
         });
      
         var DATA = jsonfile.Tempeature.map(function(e) {
            return e.data;
         });;


     
        
            
        let LineChart3 = new  Chart ('lineChart3' , {
            type: 'line',
            data : {
                labels : labels1,
                datasets: [
                    {
                    label :"CO",
                    data : [1,2,3,4,5],
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
            ]
            
        }
        var labels1 = jsonfile.Tempeature.map(function(e) {
            return e.Labels;
         });
      
         var DATA = jsonfile.Tempeature.map(function(e) {
            return e.data;
         });;

        this.graphYaxisData = this.graphYaxisData.map(obj => +obj.data.replace('°C',''))
        console.log('drawing line chart with','x-axis: ',labels1, 'y-axis',this.graphYaxisData)

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

         this.Dusttt = this.Dusttt.map(obj => +obj.data.replace('mV',''))
         console.log('drawing line chart with','x-axis: ',labels2, 'y-axis',this.Dusttt)
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




    
    }


  
 