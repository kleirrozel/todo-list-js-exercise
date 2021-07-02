function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,  // A new task is false by default

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }

  };
  return task; // defined as the whole content within the task variable - line 2-15
};

// DRIVER CODE BELOW
// Create a new task by making a new variable and then add it to the variable tasks inside the array
const task1 = newTask("Clean 🐰 Litter", "Take all the 💩 out of the litter box" );
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

task1.markCompleted(); // Since markCompleted is called before logState, when I run it, it will show has been completed
task1.logState(); // Clean Litter has been completed

// task1.logState(); // If logState is called before markCompleted, it will show not been completed
// task1.markCompleted(); // Clean Litter has not been completed

// console.log(tasks);
