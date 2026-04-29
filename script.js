const taskInput = document.getElementById("task-input")
const taskList = document.getElementById("task-list")

function addTask(){
    if (taskInput.value === ""){
        alert("Task is empty");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.append(li)
        taskInput.value = "";
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.append(span);   
    }
    saveData()
}


taskList.addEventListener("click", function(e){
    if (e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData()
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }
},false)

function saveData(){
    localStorage.setItem("tasks", taskList.innerHTML); 
}

function showData(){
    taskList.innerHTML = localStorage.getItem("tasks");
}

showData();