package com.epicode.Spring.repositories;

import org.springframework.data.repository.CrudRepository;

import jakarta.persistence.Table;



public interface TableRepository extends CrudRepository<Table, Long> {

}
