import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [ CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor( ){}
  rt= inject(Router)
  ngOnInit(): void {
    this.observeImages();
  }
 images: any[]= [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    'assets/download (1).jfif',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Secondimages : any[] = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Thirdimages: any[]  = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Fourthimages : any[] = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];
  Fifthimages : any[] = [
    // 'assets/3100d0bbf79d1d173ca18ad04dbd23db.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    'assets/sddefault.jpg',
    'assets/Mere-Ghar-Ram-Aaye-Hain-Hindi-2022-20221019191009-500x500.jpg',
    
    'assets/download (1).jfif',
    // Add more image sources as needed
  ];


  RTMP(){
  this.rt.navigate(['Uudo/music'])
  }
  observeImages() {
    const images = document.querySelectorAll('.scrolling-image');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    });

    images.forEach((image: any) => {
      observer.observe(image);
    });
  }
}
