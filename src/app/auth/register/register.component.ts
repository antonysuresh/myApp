import { Component, OnInit } from '@angular/core';
import { RegisterFrom } from 'src/app/types/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rform: RegisterFrom = {
    email: '',
    password: '',
    confirm_password: ''
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.rform);
  }

}
