`use strict`

import * as DOM from './dom.js';

const put = (id) => {
    axios.put(`http://localhost:8080/replace/${id}`, {
      id: DOM.updateId.value,
      name: DOM.updateName.value,
      shirtNumber: DOM.updateShirtNumber.value,
      team: DOM.updateTeam.value
    })
      .then((response) => {
        DOM.output.innerHTML = ``;
        let data = response.data;
        let str = `Player Name: ${data.name}<br>Shirt Number: ${data.shirtNumber}<br>
              Current Team: ${data.team}`
        DOM.output.innerHTML = "<b><u>Player Updated</u></b> <br>" +str;
        console.log(response.data);
      }).catch((err) => {
        console.log(err);
      });
  }
  DOM.buttonUpdate.onclick = () => put(DOM.updateId.value);

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
  