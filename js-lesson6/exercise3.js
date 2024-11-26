const input = document.querySelector("input");

const list = document.querySelector("ul");

const add = document.querySelector("#add");
add.addEventListener("click", () => {
    let inputValue = input.value;
    input.value = '';

    let listEntry = document.createElement("li");
    let div0 = document.createElement("div");
    div0.className = "list-entry";
    listEntry.appendChild(div0)
    let div1 = document.createElement("div");
    div1.className = "div1";
    let div2 = document.createElement("div");
    div0.appendChild(div1)
    div0.appendChild(div2)

    let listContent = document.createElement("span");
    listContent.textContent = inputValue;
    div1.appendChild(listContent);

    let listDelete = document.createElement("button");
    listDelete.textContent = "Delete";
    listDelete.addEventListener("click", () => {
        list.removeChild(listEntry);
        input.focus();
    })
    div2.appendChild(listDelete);

    list.appendChild(listEntry);
    input.focus();
})