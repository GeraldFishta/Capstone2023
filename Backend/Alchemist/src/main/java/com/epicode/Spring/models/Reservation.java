package com.epicode.Spring.models;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import lombok.AllArgsConstructor;
import lombok.Data;


@AllArgsConstructor
@Data
@Entity
public class Reservation {
	
	@Id
	private String name;
	
	@ManyToOne
	private Table table;
	
	private LocalDateTime reservationTime;
	
	private Integer people;

}
