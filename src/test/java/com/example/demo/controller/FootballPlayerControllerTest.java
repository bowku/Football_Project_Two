package com.example.demo.controller;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.Sql.ExecutionPhase;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.ResultMatcher;

import com.example.demo.domain.FootballPlayer;
import com.fasterxml.jackson.databind.ObjectMapper;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
@AutoConfigureMockMvc
@Sql(scripts = { "classpath:footballplayer-schema.sql",
		"classpath:footballplayer-data.sql" }, executionPhase = ExecutionPhase.BEFORE_TEST_METHOD)
@ActiveProfiles("test")
public class FootballPlayerControllerTest {

	@Autowired
	private MockMvc mvc;

	@Autowired
	private ObjectMapper mapper;

	@Test
	void testCreate() throws Exception {
		FootballPlayer testFootballPlayer = new FootballPlayer(null, "Michael", 6, "Liverpool");
		String testFootballPlayerAsJSON = this.mapper.writeValueAsString(testFootballPlayer);
		RequestBuilder req = post("/create").contentType(MediaType.APPLICATION_JSON).content(testFootballPlayerAsJSON);
		FootballPlayer testCreatedFootballPlayer = new FootballPlayer(3, "Michael", 6, "Liverpool");
		String testCreatedFootballPlayerAsJSON = this.mapper.writeValueAsString(testCreatedFootballPlayer);

		ResultMatcher checkStatus = status().isCreated();
		ResultMatcher checkBody = content().json(testCreatedFootballPlayerAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);

	}

	@Test
	void testGetAll() throws Exception {
		RequestBuilder req = get("/getAll");

		List<FootballPlayer> testFootballPlayers = List.of(new FootballPlayer(1, "Mohamed", 11, "Liverpool"),
				new FootballPlayer(2, "Mane", 10, "Liverpool"));
		String testFootballPlayersAsJSON = this.mapper.writeValueAsString(testFootballPlayers);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testFootballPlayersAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void TestByID() throws Exception {
		RequestBuilder req = get("/get/1");
		FootballPlayer testPlayerOne = new FootballPlayer(1, "Mohamed", 11, "Liverpool");
		String testPlayerOneAsJSON = this.mapper.writeValueAsString(testPlayerOne);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testPlayerOneAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void TestRemove() throws Exception {

		RequestBuilder req = delete("/remove/1");

		ResultMatcher checkStatus = status().isNoContent();

		this.mvc.perform(req).andExpect(checkStatus);
	}

	@Test
	void testUpdate() throws Exception {

		FootballPlayer testPlayerUpdate = new FootballPlayer(null, "Michael", 6, "Liverpool");
		String testPlayerUpdateAsJSON = this.mapper.writeValueAsString(testPlayerUpdate);
		RequestBuilder req = put("/replace/1").contentType(MediaType.APPLICATION_JSON).content(testPlayerUpdateAsJSON);
		FootballPlayer CreatedPlayerUpdated = new FootballPlayer(1, "Michael", 6, "Liverpool");
		String CreatedPlayerUpdatedAsJSON = this.mapper.writeValueAsString(CreatedPlayerUpdated);

		ResultMatcher checkStatus = status().isAccepted();
		ResultMatcher checkBody = content().json(CreatedPlayerUpdatedAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);

	}

	@Test
	void testByName() throws Exception {

		RequestBuilder req = get("/getByName/Mohamed");
		List<FootballPlayer> testPlayerName = List.of(new FootballPlayer(1, "Mohamed", 11, "Liverpool"));
		String testPlayerNameAsJSON = this.mapper.writeValueAsString(testPlayerName);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testPlayerNameAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void testByTeam() throws Exception {

		RequestBuilder req = get("/getByTeam/Liverpool");
		List<FootballPlayer> testTeamName = List.of(new FootballPlayer(1, "Mohamed", 11, "Liverpool"),
				new FootballPlayer(2, "Mane", 10, "Liverpool"));
		String testTeamNameAsJSON = this.mapper.writeValueAsString(testTeamName);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testTeamNameAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void testByShirtNumber() throws Exception {
		RequestBuilder req = get("/getByShirtNumber/11");
		List<FootballPlayer> testShirtNumber = List.of(new FootballPlayer(1, "Mohamed", 11, "Liverpool"));
		String testShirtNumberAsJSON = this.mapper.writeValueAsString(testShirtNumber);

		ResultMatcher checkStatus = status().isOk();
		ResultMatcher checkBody = content().json(testShirtNumberAsJSON);

		this.mvc.perform(req).andExpect(checkStatus).andExpect(checkBody);
	}

	@Test
	void testToString() {
		FootballPlayer footballplayer = new FootballPlayer(1, "Firmino", 9, "Liverpool");
		footballplayer.toString();
	}
}
