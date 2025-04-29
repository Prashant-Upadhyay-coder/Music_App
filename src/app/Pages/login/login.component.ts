import { Component, inject, OnInit } from '@angular/core';
import {
  SocialAuthService,
  SocialUser,
  GoogleLoginProvider,
} from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';
// Add to your component
// Add global type declarations
declare global {
  interface Window {
    google: any;
    handleCredentialResponse: (response: any) => void;
  }

}
@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
  router = inject(Router)
 ngOnInit(): void {
    this.loadScript('https://accounts.google.com/gsi/client');
    window.handleCredentialResponse = (response: any) => {
      this.handleGoogleLogin(response.credential);
    };
  }

  private loadScript(url: string): void {
    const script = document.createElement('script');
    script.src = url;
    script.async = true; // Load asynchronously
    document.body.appendChild(script);
  }


  private handleGoogleLogin(token: string): void {
    const payload = this.decodeJWT(token);
    console.log('User Data:', payload);
    
    sessionStorage.setItem('user', JSON.stringify({
      id: payload.sub,
      name: payload.name,
      email: payload.email,
      picture: payload.picture,
    }));

    this.router.navigate(['/Uudo']);
  }

  private decodeJWT(token: string): any {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }  
}
