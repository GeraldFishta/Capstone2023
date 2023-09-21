import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { LoginData } from '../interfaces/login-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }

  private url: string = 'http://localhost:8080/api/'

  public register( registerData : RegisterData ) {

    return this.http.post(this.url + 'auth/register', registerData)

  }

  public login(loginData : LoginData){

    return this.http.post(this.url + 'auth/login', loginData)

  }

}
