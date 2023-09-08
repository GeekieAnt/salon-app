package com.liveproject.salonapi.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.liveproject.salonapi.entity.Slot;

public interface SlotRepository extends JpaRepository<Slot, Long> {

}
