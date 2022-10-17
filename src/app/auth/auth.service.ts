import { LoginForm, RegisterFrom } from './../types/auth';
import { Injectable } from '@angular/core';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import {  signOut } from "firebase/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoading: Boolean = false;
  passwordMatch: Boolean= true;
  isAuthendicated: Boolean = false;
  constructor(private router: Router) { }

  login(form:LoginForm) {
    if(this.isLoading) return;
    this.isLoading = true;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        this.isAuthendicated = true;
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthendicated = false;
      }).finally(() => (this.isLoading = false))
  }

  register(form: RegisterFrom) {
    if(form.password !== form.confirm_password) {
      this.passwordMatch = false;
      return
     }

     if(this.isLoading) return;
      this.isLoading = true;

    const auth = getAuth();
      createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
  
        this.isAuthendicated = true;
      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthendicated = false;
      }).finally(() => (this.isLoading = false));
    }


    logout() {

      const auth = getAuth();
        signOut(auth).then(() => {
          this.router.navigate(['login']);
          this.isAuthendicated = false;
        }).catch((error) => {
          // An error happened.
        });

    }
}
