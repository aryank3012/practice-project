let btn = document.querySelector("#addOn");
let task = document.querySelector("#task");
let list = document.querySelector("#taskList");
let removeBtn = document.querySelector("#remove");
let clearBtn = document.querySelector("#clear");

btn.addEventListener("click", () => {
    if (task.value === "") {
        alert("Add the TASK")
    } else {
        const li = document.createElement("li");
        const text = document.createTextNode(task.value);

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";

        li.appendChild(checkBox);

        list.appendChild(li);

        li.appendChild(text);
    }
});

removeBtn.addEventListener("click", () => {
    task.value = "";
})

clearBtn.addEventListener("click", () => {
    list.innerHTML = "";
})