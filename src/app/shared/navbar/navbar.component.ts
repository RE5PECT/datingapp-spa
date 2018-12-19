import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};
  constructor(private _authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this._authService.login(this.model.username, this.model.password).subscribe(
      (resp: any) => {
        console.log('login ok!');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout(){
    localStorage.removeItem('token');
    console.log('logged out');
  }

}
