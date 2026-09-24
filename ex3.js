let tasks = ["work", "Eat", "Study"];

//function to add a new task to the tasks array
let addTask = (task) => {
    tasks.push(task);

    //displays a message showing that the task was added
    console.log(task + " has been added to my Tasks");
    //returns number of tasks
    return tasks.length;
}

//function to display all tasks in the array
let listAllTasks=() => {
    //goes through each task 1 by 1
    tasks.forEach((element) => {
        console.log(element);
    });
}

//function to delete a task one by one
let deleteTask = (task) => {
    //finds position of the task
    let index = tasks.indexOf(task);

    //removes one task from the array at that position
    tasks.splice(index, 1);
    //shows a message showing the task is removed
    console.log(task + " has been removed from my Tasks");
    //returns new number of tasks
    return tasks.length;
}

//adds sleep to the list
addTask("Sleep");
//displays all tasks
listAllTasks();
//deletes eat from the task
deleteTask("Eat");
