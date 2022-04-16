`use strict`

import * as DOM from './dom.js';

const post = () => {
    axios.post(`http://localhost:8080/create`, {
      name: DOM.inputName.value,
      shirtNumber: DOM.inputShirtNumber.value,
      team: DOM.inputTeam.value
    })
      .then((response) => {
        DOM.output.innerHTML = ``;
        let data = response.data;
        let str = `Player Name: ${data.name}, Shirt Number: ${data.shirtNumber}, 
              Current Team: ${data.team}`
        DOM.output.innerHTML = "<u><b>Player created</u></b> <br> " +str ;
        console.log(response);
      }).catch((err) => {
        console.log(err);
      });
  }

  
  DOM.buttonCreate.onclick = () => post();

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