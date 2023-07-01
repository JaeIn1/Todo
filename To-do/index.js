const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));
console.log(savedTodoList);

const createTodo = (data) => {
  let todoContents = todoInput.value;
  if (data) {
    todoContents = data.contents;
  }
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });
  if (data?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";

  saveItemsFn();
};

const inputText = () => {
  if (window.event.keyCode === 13 && todoInput.value !== "") {
    createTodo();
  }
};

const deleteTodo = () => {
  const deleteArr = document.querySelectorAll("li");
  for (let i = 0; i <= deleteArr.length; i++) {
    deleteArr[i]?.remove();
  }
  saveItemsFn();
};

const saveItemsFn = () => {
  const saveItems = [];
  for (let i = 0; i < todoList.children.length; i++) {
    const todoObj = {
      contents: todoList.children[i].querySelector("span").textContent,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  if (saveItems.length === 0) {
    localStorage.removeItem("saved-items");
  } else {
    const data = JSON.stringify(saveItems);
    localStorage.setItem("saved-items", data);
  }
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}
