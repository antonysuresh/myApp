import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { RegisterFrom } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  form: RegisterFrom = {
    email: '',
    password: '',
    confirm_password: ''
  }

  submit() {
   this.authService.register(this.form);
  }
  isLoading() {
    return this.authService.isLoading;
  }

}