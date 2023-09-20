package com.epicode.Spring.repositories;

import org.springframework.data.repository.CrudRepository;

import com.epicode.Spring.models.Reservation;


public interface ReservationRepository extends CrudRepository<Reservation, String> {

}
