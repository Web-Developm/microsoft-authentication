import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService } from '@azure/msal-angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private authService:MsalService, private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
   if(this.authService.logout()){
     this.router.navigate(['/app']);
   }
    
  }

  
  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null;
  }

}
