`use strict`

import * as DOM from './dom.js';

const deleteId = (id) => {
  axios.delete(`http://localhost:8080/remove/${id}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      DOM.output.innerHTML = "<b><u>Player has been deleted</u></b>";
      console.log(response.data);
    }).catch((err) => {
      console.log(err);
    });
}
DOM.buttonDeleteId.onclick = () => deleteId(DOM.deleteId.value);

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

