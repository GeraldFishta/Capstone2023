package com.epicode.Spring.models;

import java.time.LocalDateTime;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Reservation {
	
	@Id
	private String name;
	
	private LocalDateTime reservationTime;
	
	private Integer people;

}
