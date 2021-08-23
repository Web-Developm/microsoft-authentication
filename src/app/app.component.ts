import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'microsoft';


  constructor(private authService: MsalService, private router: Router) {

  }

  login() {
    if (this.authService.loginPopup().subscribe((response: AuthenticationResult) => {
      this.authService.instance.setActiveAccount(response.account)
    })) {
      this.router.navigate(['/welcome']);
    }

    else {
      this.router.navigate(['/app']);
    }


  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null;
  }

  logout() {
    return this.authService.logout();

  }

}
