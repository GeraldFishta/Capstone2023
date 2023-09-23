import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth-service.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  reservations: any[] = [];
  authToken = this.authService.getAuthToken();
  editingReservation: any = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.authService.getAllReservations().subscribe((data: any) => {
      this.reservations = data;
      // Inizializza la variabile 'editing' per ogni prenotazione
      this.reservations.forEach(reservation => (reservation.editing = false));
    });
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

  editReservation(reservation: any) {
    // Esci dalla modalità di modifica per tutte le altre prenotazioni
    this.reservations.forEach(r => (r.editing = false));

    // Imposta la modalità di modifica solo per la prenotazione selezionata
    reservation.editing = true;

    // Copia la prenotazione in modo che le modifiche siano isolate
    this.editingReservation = { ...reservation };
  }

  saveReservation(reservation: any) {
    // Invia le modifiche al server tramite il tuo servizio AuthService
    this.authService.updateReservation(reservation.name, this.editingReservation, this.authToken).subscribe((updatedReservation: any) => {
      // Aggiorna la prenotazione nell'elenco delle prenotazioni
      const index = this.reservations.findIndex(r => r.name === reservation.name);
      if (index !== -1) {
        this.reservations[index] = updatedReservation;
      }
      // Esci dalla modalità di modifica
      this.editingReservation = null;
    });
  }

  cancelEdit() {
    // Esci dalla modalità di modifica senza salvare le modifiche
    this.editingReservation = null;
    if (this.reservations && this.reservations.length > 0) {
      this.reservations.forEach(r => (r.editing = false));
    }
  }
}
