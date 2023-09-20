package com.epicode.Spring.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.epicode.Spring.models.Reservation;
import com.epicode.Spring.services.ReservationService;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin(origins= "*") 
public class ReservationController {
	
	@Autowired ReservationService reservationSvc;
	

	@GetMapping
	public ResponseEntity<List<Reservation>> getAllreservations(){
		return new ResponseEntity<List<Reservation>>(reservationSvc.GetAllReservations(), HttpStatus.OK);		
	}
	
	
	@GetMapping("/{name}")
	public ResponseEntity<Reservation> getSingleReservation( @PathVariable String name ){
		return new ResponseEntity<Reservation> (reservationSvc.GetReservation(name), HttpStatus.OK);
	}
	
	@PostMapping("/newReservation")
	public ResponseEntity<Reservation> createReservation( @RequestBody Reservation r ){
		reservationSvc.setReservation(r);
		return new ResponseEntity<Reservation>( r, HttpStatus.OK);
	}
	
	@DeleteMapping("/{name}")
	public ResponseEntity<Reservation> deleteReservation ( @PathVariable String name ) {
		return new ResponseEntity<Reservation>(reservationSvc.deleteReservation(name),HttpStatus.OK);
	}
}
