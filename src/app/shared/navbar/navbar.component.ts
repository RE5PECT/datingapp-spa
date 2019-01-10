import { AlertifyService } from './../../services/alertify.service';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  constructor(private _authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {
  }

  login() {
    this._authService.login(this.model.username, this.model.password).subscribe(
      (resp: any) => {
        this.alertify.success('Login Successful');
      },
      (err: any) => {
        this.alertify.error(err);      
      },
      () => {
        this.router.navigate(['/lists']);
      }
    );
  }

  loggedIn() {
    return this._authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['/home']);
  }

}
