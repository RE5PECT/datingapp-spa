import { AuthService } from './../services/Auth.service';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegister = new EventEmitter();

  model: any = {};
  constructor(private _authService:AuthService) { }

  ngOnInit() {
  }

  register(){
    this._authService.register(this.model).subscribe(
      () =>{
        console.log('registration ok')
      },
      error =>{
        console.log(error);
      }
    );
    
  }

  cancel(){
    this.cancelRegister.emit();
  }

}
