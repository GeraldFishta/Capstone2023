import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';



@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{

  reservations: any[] = [];

  constructor(
    private authService: AuthService,

    ) { }

  authToken = this.authService.getAuthToken();

  ngOnInit(): void {
    this.authService.getAllReservations().subscribe((data: any) => {
      this.reservations = data;
    });
  }

  editReservation(reservation: any, authToken: string) {
    if (reservation.id) {
    this.authService.updateReservation(reservation.id, reservation, authToken).subscribe((updatedReservation: any) => {
    const index = this.reservations.findIndex(r => r.id === reservation.id);
    if (index !== -1) {
    this.reservations[index] = updatedReservation;
    }
    });
    } else {
    console.error('Campo "id" della prenotazione non valido.');
    }
    }

    deleteReservation(name: string) {
      console.error(name);
      if (!name) {
        console.error('Nome della prenotazione non valido.');
        return;
      }
      this.authService.deleteReservation(name, this.authToken).subscribe(() => {
        this.reservations = this.reservations.filter(r => r.name !== name);
      });
    }

  }



