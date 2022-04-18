`use strict`

import * as DOM from './dom.js';

const getById = (id) => {
  axios.get(`http://localhost:8080/get/${id}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      let data = response.data;
      let str = `Player Name: ${data.name}<br>Shirt Number: ${data.shirtNumber}<br>
              Current Team: ${data.team}`
      DOM.output.innerHTML = str;
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonReadId.onclick = () => getById(DOM.readId.value);

const getByName = (name) => {
  DOM.output.innerHTML = ``;
  axios.get(`http://localhost:8080/getByName/${name}`)
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

DOM.buttonReadName.onclick = () => getByName(DOM.readName.value);

const getByShirtNumber = (shirtNumber) => {
  DOM.output.innerHTML = ``;
  axios.get(`http://localhost:8080/getByShirtNumber/${shirtNumber}`)
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

DOM.buttonReadShirtNumber.onclick = () => getByShirtNumber(DOM.readShirtNumber.value);

const getByTeam = (team) => {
  DOM.output.innerHTML = ``;
  axios.get(`http://localhost:8080/getByTeam/${team}`)
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

DOM.buttonReadTeam.onclick = () => getByTeam(DOM.readTeam.value);

const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item._id;
  child.innerHTML = `${JSON.stringify(item)}`;
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