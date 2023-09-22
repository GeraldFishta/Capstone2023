package com.epicode.Spring.models;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.CrossOrigin;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@CrossOrigin(origins= "*") 
public class Reservation {
	
	@Id
	private String name;
	
	private LocalDateTime reservationTime;
	
	private Integer people;
	
	private String allergies;

}
