import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 

  constructor(private router : Router) { }
   btnClick() {
     this.router.navigate(['/livefeed']);  
 }
   
//     gotoGrid() {
//     this.router.navigate(['/grid1']);  
// }


  ngOnInit(): void {
    
  }



  
}
