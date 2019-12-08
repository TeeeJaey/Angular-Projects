import { Component, OnInit } from '@angular/core';

import { User } from '../common/user';
import { AuthenticationService } from '../common/services/authentication.service';

import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  currentUser: User;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
) {
    this.currentUser = this.authenticationService.currentUserValue;
}

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/home']);
  }
}
