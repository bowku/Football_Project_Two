package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.domain.FootballPlayer;
import com.example.demo.service.FootballPlayerService;

@RestController
@CrossOrigin
public class FootballPlayerController {

	private FootballPlayerService service;

	@Autowired
	public FootballPlayerController(FootballPlayerService service) {
		super();
		this.service = service;
	}

	@PostMapping("/create")
	public ResponseEntity<FootballPlayer> createFootballPlayer(@RequestBody FootballPlayer fp) {
		FootballPlayer created = this.service.create(fp);
		ResponseEntity<FootballPlayer> response = new ResponseEntity<FootballPlayer>(created, HttpStatus.CREATED);
		return response;
	}

	@GetMapping("/getAll")
	public ResponseEntity<List<FootballPlayer>> getallFootballPlayer() {
		return ResponseEntity.ok(this.service.getAll());
	}

	@GetMapping("/get/{id}")
	public FootballPlayer getFootballPlayerByID(@PathVariable Integer id) {
		return this.service.getOne(id);
	}

	@PutMapping("/replace/{id}")
	public ResponseEntity<FootballPlayer> replaceFootballPlayer(@PathVariable Integer id,
			@RequestBody FootballPlayer newFootballPlayer) {
		FootballPlayer body = this.service.update(id, newFootballPlayer);
		ResponseEntity<FootballPlayer> response = new ResponseEntity<FootballPlayer>(body, HttpStatus.ACCEPTED);
		return response;
	}

	@DeleteMapping("/remove/{id}")
	public ResponseEntity<?> removeFootballPlayer(@PathVariable Integer id) {
		this.service.remove(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}

	@GetMapping("/getByName/{name}")
	public ResponseEntity<List<FootballPlayer>> getFootballPlayerByName(@PathVariable String name) {
		List<FootballPlayer> found = this.service.getFootballPlayerByName(name);
		return ResponseEntity.ok(found);
	}

	@GetMapping("/getByAge/{shirtNumber}")
	public ResponseEntity<List<FootballPlayer>> getFootballPlayerByShirtNumber(@PathVariable Integer shirtNumber) {
		List<FootballPlayer> found = this.service.getFootballPlayerByShirtNumber(shirtNumber);
		return ResponseEntity.ok(found);
	}

	@GetMapping("/getByName/{team}")
	public ResponseEntity<List<FootballPlayer>> getFootballPlayerByTeam(@PathVariable String team) {
		List<FootballPlayer> found = this.service.getFootballPlayerByTeam(team);
		return ResponseEntity.ok(found);
	}

}
