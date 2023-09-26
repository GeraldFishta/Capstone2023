import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  togglerNavbar = false;
  isLoggedIn = false;
  isAdmin = false;

  constructor() { }

  ngOnInit(): void {

    const isLogged = localStorage.getItem('isLogged');
    const isAdmin = localStorage.getItem('isAdmin');

    this.isLoggedIn = isLogged === 'true';
    this.isAdmin = isAdmin === 'true';
  }

  logOut(): void {

    this.isLoggedIn = false;
    localStorage.removeItem('isLogged');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('username');

  }

}
