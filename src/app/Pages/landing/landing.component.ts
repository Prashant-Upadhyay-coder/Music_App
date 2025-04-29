import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  imports: [CommonModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent  implements OnInit{
  isactive: boolean =true;
  router= inject(Router)
  ngOnInit(): void {
  setTimeout(() => {
      this.isactive=false
    },2000);
     setTimeout(() => {
     this.router.navigate(['login']);
     }, 4000);
  }

}
