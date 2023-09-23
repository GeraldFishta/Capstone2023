package com.epicode.Spring.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.epicode.Spring.models.Reservation;
import com.epicode.Spring.repositories.ReservationRepository;




@Service
public class ReservationService {
	
	@Autowired ReservationRepository reservationRepo;

	
	public void setReservationRepo(ReservationRepository reservationRepo) {
		this.reservationRepo = reservationRepo;
	}
	
	public Reservation GetReservation (String id) {
		
		Reservation r = reservationRepo.findById(id).get();
		
		return r;
	}
	
	public List<Reservation> GetAllReservations() {
		
		return (List<Reservation>) reservationRepo.findAll();
		
	}
	
	public Reservation deleteReservation(String id) {
		
		Reservation r = reservationRepo.findById(id).get();
		reservationRepo.delete(r);
		return r;
		
	}
	
	public Reservation setReservation(Reservation r) {
		
		return reservationRepo.save(r);
		
	}

 
}
