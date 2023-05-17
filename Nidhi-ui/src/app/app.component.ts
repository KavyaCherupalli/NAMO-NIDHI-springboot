import { Component } from '@angular/core';
import { TokenStorageService } from './token-storage.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showUserDashboard = false;
  username1 : string = '';

  constructor(private tokenStorageService: TokenStorageService,private authService:AuthService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      console.log(user)
      this.roles = user.roles;
      this.username1 =user.username;
      
      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showUserDashboard = this.roles.includes('ROLE_USER');

      //this.username = user.username;
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
