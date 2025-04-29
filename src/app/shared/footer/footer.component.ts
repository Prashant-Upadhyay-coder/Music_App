import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 rt =inject(Router)
  home(){
   this.rt.navigate(['Uudo/home'])
  }
  musicPlayer(){
   this.rt.navigate(['Uudo/music'])
  }
}
