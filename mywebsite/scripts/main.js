// Array to store goals
const goals = [];

// Function to display goals
function displayGoals() {
    const container = document.getElementById('goalList');
    container.innerHTML = '';
    goals.forEach((goal, index) => {
        container.innerHTML += `<li>${goal.completed ? '✅' : '❌'} ${goal.name}
        <button onclick="toggleComplete(${index})">Toggle</button></li>`;
    });
}

// Function to toggle completion
function toggleComplete(index) {
    goals[index].completed = !goals[index].completed;
    localStorage.setItem('goals', JSON.stringify(goals));
    displayGoals();
}

// Add goal button
document.getElementById('addGoalBtn')?.addEventListener('click', () => {
    const input = document.getElementById('newGoal');
    if(input.value !== '') {
        goals.push({ name: input.value, completed: false });
        localStorage.setItem('goals', JSON.stringify(goals));
        displayGoals();
        input.value = '';
    }
});

// Load saved goals
const storedGoals = JSON.parse(localStorage.getItem('goals'));
if(storedGoals) {
    storedGoals.forEach(goal => goals.push(goal));
}
displayGoals();
