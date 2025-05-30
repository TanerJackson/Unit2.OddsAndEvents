// state

const state = {
  numberInput: "",
  numberBank: [],
  oddNumbers: [],
  evenNumbers: [],
};

//functions

function addNumber(num) {
  state.numberBank.push(num);
  render();
}

function sortOne() {
  const num = state.numberBank.shift();
  if (num % 2 === 0) {
    state.evenNumbers.push(num);
  } else {
    state.oddNumbers.push(num);
  }
  render();
}

function sortAll() {
  while (state.numberBank.length > 0) {
    sortOne();
  }
}

//make form with js

function createInputForm() {
  const form = document.createElement("form");

  const input = document.createElement("input");
  input.type = "number";
  input.value = state.numberInput;
  input.placeholder = "Put Number Here";

  input.addEventListener("input", (e) => {
    state.numberInput = e.target.value;
  });

  const addButton = document.createElement("button");
  addButton.type = "submit";
  addButton.textContent = "Add number";

  form.appendChild(input);
  form.appendChild(addButton);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const num = parseInt(state.numberInput, 10);
    if (!isNaN(num)) {
      addNumber(num);
      state.numberInput = "";
    }
  });

  return form;
}
function createSortButtons() {
  const container = document.createElement("div");

  const sortOneBtn = document.createElement("button");
  sortOneBtn.textContent = "Sort 1";
  sortOneBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortOne();
  });

  const sortAllBtn = document.createElement("button");
  sortAllBtn.textContent = "Sort All";
  sortAllBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sortAll();
  });

  container.appendChild(sortOneBtn);
  container.appendChild(sortAllBtn);

  return container;
}

function createNumberList(title, numbers) {
  const container = document.createElement("div");

  const h2 = document.createElement("h2");
  h2.textContent = title;
  container.appendChild(h2); // ← Corrected line

  const list = document.createElement("ul");
  numbers.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    list.appendChild(li);
  });

  container.appendChild(list);
  return container;
}

//render

function render() {
  document.body.innerHTML = "";
  document.body.appendChild(createInputForm());
  document.body.appendChild(createSortButtons());
  document.body.appendChild(createNumberList("Number Bank", state.numberBank));
  document.body.appendChild(
    createNumberList("Even Numbers", state.evenNumbers)
  );
  document.body.appendChild(createNumberList("Odd Numbers", state.oddNumbers));
}

render();
