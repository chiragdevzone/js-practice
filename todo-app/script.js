const item = document.querySelector("#item");
const toDobox = document.querySelector("#to-do-box");

item.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    addToDo(this.value);
    this.value = "";
  }
});

const addToDo = (task) => {
  const item = document.createElement("li");
  item.innerHTML = `
        ${task}
        <i class="fa-solid fa-x"></i>
    `;
  toDobox.appendChild(item);

  item.addEventListener("click", function () {
    item.classList.toggle("done");
  });

  item.querySelector('i').addEventListener("click",function(){
    item.remove();
  })
};
