import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { RegisterUser } from '../RegisterUser';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: RegisterUser = {userName: "", password: "", password2: ""};
  warning: string;
  success: boolean = false;
  loading: boolean = false;

  constructor(
    private auth: AuthService ,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerUser = new RegisterUser();
  }

  onSubmit(f: NgForm): void {
    console.log({'registerUser': this.registerUser, 'warning': this.warning});
    if(this.registerUser.userName === "" || this.registerUser.password !== this.registerUser.password2){
      console.log('condition fail at register');
      return;
    }
    // valid info
    console.log('valid info');

    this.loading = true;
    this.auth.register(this.registerUser)
    .subscribe( successful => {
      console.log('success of subscribe - register', successful);
      this.success = true;
      this.warning = null;
      this.loading = false;
      }, err => {
        this.success = false;
        this.warning = err.error.message;
        this.loading = false;
      })
  
  }

}
function err(err: any) {
  throw new Error('Function not implemented.');
}

