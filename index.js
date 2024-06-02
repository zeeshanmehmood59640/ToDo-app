const addBTaskBtn = document.getElementById('addBtn');
const taskText = document.getElementById("textTask");
const taskArea = document.getElementById("tasks");
const dayImage=document.getElementById("day")
const nightImage=document.getElementById("night")
const body=document.querySelector("body")
const nav=document.querySelector("nav")
const h1=document.querySelector("h1")
const addbtn=document.getElementById("addBtn")
const footer=document.querySelector(".footer")

dayImage.addEventListener('click',()=>{
    dayImage.classList.add("d-none");
    nightImage.classList.remove("d-none")
    body.style.backgroundColor="#011a2c"
    nav.style.backgroundColor="#7b7bd1"
    h1.style.color="white"
    footer.style.backgroundColor="#2b2b67"
})
nightImage.addEventListener('click',()=>{
    dayImage.classList.remove("d-none");
    nightImage.classList.add("d-none")
    body.style.backgroundColor="#fff"
    nav.style.backgroundColor="azure"
    h1.style.color="#011a2c"
    footer.style.backgroundColor="#011a2c"
})

nightImage.addEventListener('click',()=>{
    dayImage.classList.remove("d-none");
    nightImage.classList.add("d-none")
})
let counter = 0;

addBTaskBtn.addEventListener('click', () => {
    if (taskText.value.trim() !== "") {
        const taskHTML = `
        <div class="row my-3 task p-2 task${counter}">
            <p class="col-9">${taskText.value}</p>
            <a class="col-1 edit" data-task-id="${counter}">Edit</a>
            <a class="col-2 delete" data-task-id="${counter}">Delete</a>
        </div>
        `;
        taskArea.innerHTML += taskHTML;
        taskText.value = "";
        counter++;
    }
});

taskArea.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.classList.contains('delete')) {
        const taskId = e.target.getAttribute('data-task-id');
        const taskToDelete = document.querySelector(`.task${taskId}`);
        if (taskToDelete) {
            taskToDelete.remove();
        }
    } else if (e.target.classList.contains('edit')) {
        const taskId = e.target.getAttribute('data-task-id');
        const taskToEdit = document.querySelector(`.task${taskId} p`);
        if (taskToEdit) {
            const newTaskText = prompt("Edit your task:", taskToEdit.textContent);
            if (newTaskText !== null) {
                taskToEdit.textContent = newTaskText;
            }
        }
    }
});
