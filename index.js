const inputBox = document.getElementById("addtask");
const listContainer = document.getElementById("task-list");

function addTask() {
    if (inputBox.value.trim() === "") {
        alert("You must write something");
    } else {
        let li = document.createElement("li");

        let checkboxIcon = document.createElement("i");
        checkboxIcon.className = "fa-regular fa-circle-check";
        li.appendChild(checkboxIcon);

        li.innerHTML += " " + inputBox.value;

        let deleteIcon = document.createElement("span");
        let i=document.createElement("i");
        deleteIcon.appendChild(i);
        i.className = "fa-solid fa-trash-arrow-up";
        li.appendChild(deleteIcon);

        listContainer.appendChild(li);

    }

    inputBox.value = "";
    saveData()
}
listContainer.addEventListener("click",(e)=>{
    if(e.target.tagName=="LI"){
        e.target.classList.toggle("task-item");
        e.target.classList.toggle("icon-check");
        saveData()
    }
    if(e.target.tagName=="I"){
        let rem=e.target.parentElement;
        rem.parentElement.remove();
        saveData()
    }

})
function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}
function showData(){
    listContainer.innerHTML=localStorage.getItem("data");
}
showData();