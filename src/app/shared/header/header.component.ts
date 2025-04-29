import { SocialAuthService } from '@abacritt/angularx-social-login';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  private authService = inject(SocialAuthService);
  private router = inject(Router);

  user: any;

  constructor() {
    const userData = sessionStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    } else {
      this.router.navigate(['/login']);
    }
  }

  signOut() {
    this.authService.signOut().then(() => {
      sessionStorage.removeItem('user');
      this.router.navigate(['/login']);
    });
  }
}
