`use strict`

import * as DOM from './dom.js';

const deleteId = (id) => {
  axios.delete(`http://localhost:8080/remove/${id}`)
    .then((response) => {
      get();
      DOM.output.innerHTML = `<b><u>Player has been deleted</u></b><br>`;
      console.log(response.data);
    }).catch((err) => {
      get();
      DOM.output.innerHTML="<b><u>ID doesn't exist</u></b> <br><br>";
      console.log(err);
    });
}
DOM.buttonDeleteId.onclick = () => deleteId(DOM.deleteId.value);

const writeItem = item => {
  const child = document.createElement(`li`);
  child.id = item.id;
  child.innerHTML = `<b>ID: ${item.id}</b> <br> Name: ${item.name}<br> Shirt Number: ${item.shirtNumber}<br> Team: ${item.team} <br><hr>`;
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

get();

