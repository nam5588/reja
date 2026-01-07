console.log("Frontend Ishga tushdi");

function itemTemplate(item) {
  return `<li class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
                    <span class="item-text">
                    ${item.reja}
                    </span>
                    <div>
                        <button data-id="${item._id}" class="edit-me btn btn-secondary btn-sm mr-1"> O'zgartirish</button>
                        <button data-id="${item._id}" class="delete-me btn btn-danger btn-sm">O'chirish</button>
                    </div>
                </li>`;
}

let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function (e) {
  e.preventDefault();
  axios
    .post("/create-item", { reja: createField.value })
    .then((response) => {
      document
        .getElementById("item-list")
        .insertAdjacentHTML("beforeend", itemTemplate(response.data));
      createField.value = "";
      createField.focus();
      console.log(response.data);
    })
    .catch((err) => {
      console.log("Iltimos qayta harakat qiling:", err);
    });
});

document.addEventListener("click", (e) => {
  //delete operation
  if (e.target.classList.contains("delete-me")) {
    let itemName =
      e.target.parentElement.parentElement.querySelector(
        ".item-text"
      ).innerText;
    if (confirm(`Aniq ${itemName}ni o'chirmoqchimisiz?`)) {
      axios
        .post("/delete-item", { id: e.target.getAttribute("data-id") })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.remove();
          createField.focus();
        })
        .catch((err) => {
          console.log("Iltimos qayta harakat qiling:", err);
        });
    }
  }

  //edit operation
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt(
      "O'zgarish kiriting",
      e.target.parentElement.parentElement.querySelector(".item-text").innerText
    );
    if (userInput) {
      axios
        .post("/edit-item", {
          id: e.target.getAttribute("data-id"),
          new_input: userInput,
        })
        .then((response) => {
          console.log(response.data);
          e.target.parentElement.parentElement.querySelector(
            ".item-text"
          ).innerText = userInput;
          createField.focus();
        })
        .catch((err) => {
          console.log("Iltimos qayta harakat qiling:", err);
        });
    }
  }
});

document.getElementById("clean-all").addEventListener("click", () => {
  if (confirm("Aniq barchasini o'chirmoqchimisiz?")) {
    axios
      .post("/delete-all", { delete_all: true })
      .then((response) => {
        alert(response.data.state);
        document.location.reload();
      })
      .catch((err) => {
        console.log("Iltimos qayta harakat qiling:", err);
      });
  }
});
