import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterData } from '../interfaces/register-data';
import { LoginData } from '../interfaces/login-data';
import { ReservationData } from '../interfaces/reservation-data';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {

  }



  private url: string = 'http://localhost:8080/api/'

  public register(registerData: RegisterData) {
    return this.http.post(this.url + 'auth/register', registerData)
  }

  public login(loginData: LoginData) {
    return this.http.post(this.url + 'auth/login', loginData)
  }

  public book(reservationData: ReservationData, authToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const options = { headers: headers };
    return this.http.post(this.url + 'reservation/reservation', reservationData, options);
  }

  public getAllReservations() {
    return this.http.get(this.url + 'reservation');
  }

  public deleteReservation(id: string, authToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const options = { headers: headers };
    return this.http.delete(`${this.url}reservation/${id}`, options);
  }

  // public updateReservation(id: string, reservationData: ReservationData, authToken: string) {
  //   const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
  //   const options = { headers: headers };
  //   return this.http.put(`${this.url}reservation/${id}`, reservationData, options);
  // }

  public updateReservation(id: string, reservationData: ReservationData, authToken: string) {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${authToken}`);
    const options = { headers: headers };
    return this.http.put(`${this.url}reservation/${id}`, reservationData, options);
  }


  getAuthToken(): string {
    const authToken = localStorage.getItem('accessToken');
    if (authToken !== null) {
      return authToken;
    } else {
      return '';
    }
  }

}



