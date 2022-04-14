package com.example.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.domain.FootballPlayer;
import com.example.demo.repo.FootballPlayerRepo;

public class FootballPlayerService implements serviceIF<FootballPlayer> {

	private FootballPlayerRepo repo;

	@Autowired
	public FootballPlayerService(FootballPlayerRepo repo) {
		super();
		this.repo = repo;
	}

	public FootballPlayer create(FootballPlayer fp) {
		FootballPlayer created = this.repo.save(fp);
		return created;
	}

	public List<FootballPlayer> getAll() {
		return this.repo.findAll();
	}

	public FootballPlayer getOne(Integer id) {
		Optional<FootballPlayer> found = this.repo.findById(id);
		return found.get();
	}

	public FootballPlayer update(Integer id, FootballPlayer newFootballPlayer) {
		FootballPlayer existing = this.repo.findById(id).get();
		existing.setName(newFootballPlayer.getName());
		existing.setShirtNumber(newFootballPlayer.getShirtNumber());
		existing.setTeam(newFootballPlayer.getTeam());
		FootballPlayer updated = this.repo.save(existing);
		return updated;
	}

	public void remove(@PathVariable Integer id) {
		this.repo.deleteById(id);
	}

	public List<FootballPlayer> getFootballPlayerByName(String name) {
		List<FootballPlayer> found = this.repo.findByNameIgnoreCase(name);
		return found;
	}

	public List<FootballPlayer> getFootballPlayerByShirtNumber(Integer shirtNumber) {
		List<FootballPlayer> found = this.repo.findByShirtNumber(shirtNumber);
		return found;
	}

	public List<FootballPlayer> getFootballPlayerByTeam(String team) {
		List<FootballPlayer> found = this.repo.findByTeamIgnoreCase(team);
		return found;
	}

}
