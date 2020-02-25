import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  cards = [  
    { title: 'Card 1', cols: 1, rows: 1 },  
    { title: 'Card 2', cols: 1, rows: 1 },  
    { title: 'Card 3', cols: 1, rows: 1 },  
    { title: 'Card 4', cols: 1, rows: 1 }  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
