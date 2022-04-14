`use strict`

import * as DOM from './dom.js';

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

const post = () => {
  axios.post(`http://localhost:8080/create`, {
    name: DOM.inputName.value,
    shirtNumber: DOM.inputShirtNumber.value,
    team: DOM.inputTeam.value
  })
    .then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonCreate.onclick = () => post();


const getById = (id) => {
  axios.get(`http://localhost:8080/get/${id}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      writeItem(response.data);
    }).catch((err) => {
      console.log(err);
    });
}

DOM.buttonReadId.onclick = () => getById(DOM.readId.value);


const put = (id) => {
  axios.put(`http://localhost:8080/replace/${id}`, {
    id: DOM.updateId.value,
    name: DOM.updateName.value,
    shirtNumber: DOM.updateShirtNumber.value,
    team: DOM.updateTeam.value
  })
    .then((response) => {
      DOM.output.innerHTML = ``;
      writeItem(response.data);
    }).catch((err) => {
      console.log(err);
    });
}
DOM.buttonUpdate.onclick = () => put(DOM.updateId.value);


const deleteId = (id) => {
  axios.delete(`http://localhost:8080/remove/${id}`)
    .then((response) => {
      DOM.output.innerHTML = ``;
      writeItem(response.data);
    }).catch((err) => {
      console.log(err);
    });
}
DOM.buttonDeleteId.onclick = () => deleteId(DOM.deleteId.value);