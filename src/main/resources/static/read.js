`use strict`

import * as DOM from './dom.js';

const getById = (id) => {
  axios.get(`http://localhost:8080/get/${id}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      writeItem(response.data);
      console.log(response.data);
    }).catch((err) => {
      get();
      DOM.output.innerHTML = "<b><u>ID doesn't exist</u></b> <br><br>";
      console.log(err);
    });
}

DOM.buttonReadId.onclick = () => getById(DOM.readId.value);

const getByName = (name) => {
  DOM.output.innerHTML = ``;
  axios.get(`http://localhost:8080/getByName/${name}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      if (!Array.isArray(response.data)) {
        writeItem(response.data);
      } else {
        for (let item of response.data) {
          writeItem(item);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonReadName.onclick = () => getByName(DOM.readName.value);

const getByShirtNumber = (shirtNumber) => {
  axios.get(`http://localhost:8080/getByShirtNumber/${shirtNumber}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      if (!Array.isArray(response.data)) {
        writeItem(response.data);
      } else {
        for (let item of response.data) {
          writeItem(item);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonReadShirtNumber.onclick = () => getByShirtNumber(DOM.readShirtNumber.value);

const getByTeam = (team) => {
  axios.get(`http://localhost:8080/getByTeam/${team}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      if (!Array.isArray(response.data)) {
        let data = response.data;
        let str = `Player Name: ${data.name}<br>Shirt Number: ${data.shirtNumber}<br>
                Current Team: ${data.team}`
        console.log(str);
        writeItem(str);
      } else {
        for (let item of response.data) {
          writeItem(item);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonReadTeam.onclick = () => getByTeam(DOM.readTeam.value);

const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item.id;
  child.innerHTML = `<b>ID: ${item.id}</b> <br> Name: ${item.name}<br> Shirt Number: ${item.shirtNumber}<br> Team: ${item.team} <br><br>`;
  DOM.output.appendChild(child);
}


const get = () => {
  DOM.output.innerHTML = ``;
  axios.get(`http://localhost:8080/getAll`)
    .then((response) => {
      if (!Array.isArray(response.data)) {
        writeItem(response.data);
      } else {
        for (let item of response.data) {
          writeItem(item);
        }
      }
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonReadAll.onclick = () => get();

get();