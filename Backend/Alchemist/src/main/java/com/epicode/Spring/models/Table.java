package com.epicode.Spring.models;

import com.epicode.Spring.enumerated.Table_availability;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;



@AllArgsConstructor
@Data
@Entity ( name = "Table")
public class Table {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column( nullable = false)
	private Long id;
	
	@Column(nullable = false)
	private Table_availability table_availability;
	
	public Table() {
		super();
		this.table_availability = Table_availability.AVAILABLE;
	}

}

