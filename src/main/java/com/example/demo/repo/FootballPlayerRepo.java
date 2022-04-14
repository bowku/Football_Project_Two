package com.example.demo.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.domain.FootballPlayer;

@Repository
public interface FootballPlayerRepo extends JpaRepository<FootballPlayer, Integer> {

	List<FootballPlayer> findByNameIgnoreCase(String name);

	List<FootballPlayer> findByShirtNumber(Integer shirtNumber);

	List<FootballPlayer> findByTeam(Integer team);

}
