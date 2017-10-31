const numbersContainer = document.getElementById('container');
const inputFile = document.getElementById('calculator');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');

numbersContainer.addEventListener('click', (event)=>{
  if(event.srcElement.nodeName === "BUTTON"){
    inputFile.value += `${event.srcElement.innerHTML} `; 
  }
})

// looked up fetch post request
add.addEventListener('click', (event)=>{
  fetch(`/add?value=${inputFile.value}`)
    .then((response)=>{
      return response.json();
    })
    .then((response)=>{
      inputFile.value = response.answer;
    })
    .catch((err)=>{
      throw err;
    })
});

subtract.addEventListener('click', (event)=>{
  fetch(`/subtract?value=${inputFile.value}`)
    .then((response)=>{
      return response.json();
    })
    .then((response)=>{
      console.log(response)
      inputFile.value = response.answer;
    })
    .catch((err)=>{
      throw err;
    })
});