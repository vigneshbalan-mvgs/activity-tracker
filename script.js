// Function to update top bar with current date and time
function updateTopBar() {
    const now = new Date();
    document.getElementById('current-date').innerText = now.toDateString();
    document.getElementById('current-time').innerText = now.toLocaleTimeString();
}

// Function to generate activity matrix
function generateActivityMatrix() {
    const container = document.getElementById('activity-matrix');
    container.innerHTML = ''; // Clear previous content
    const today = new Date();
    const startDate = new Date(today.getTime() - (180 * 24 * 60 * 60 * 1000)); // 6 months
    let currentDate = new Date(startDate);

    while (currentDate <= today) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('h-3', 'rounded-md', 'transition', 'duration-300', 'ease-in-out');

        // Check if there's activity for this date
        const activity = getActivityForDate(currentDate.toISOString().split('T')[0]);
        if (activity) {
            const brightness = Math.min(500 + activity.length * 100, 900);
            dayElement.classList.add(`bg-green-${brightness}`);
        } else {
            dayElement.classList.add('bg-gray-300');
        }

        container.appendChild(dayElement);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Function to add activity based on user input
function addActivity() {
    const dateInput = document.getElementById('date-input').value;
    if (dateInput) {
        const activity = { date: dateInput, action: 'Completed task' };
        addActivityToLocalStorage(activity);
        generateActivityMatrix();
    } else {
        alert('Please select a date');
    }
}

// Retrieve activities from local storage
function getActivitiesFromLocalStorage() {
    const activitiesString = localStorage.getItem('activities');
    return activitiesString ? JSON.parse(activitiesString) : [];
}

// Add activity to local storage
function addActivityToLocalStorage(activity) {
    const activities = getActivitiesFromLocalStorage();
    activities.push(activity);
    localStorage.setItem('activities', JSON.stringify(activities));
}

// Get activities for a specific date from local storage
function getActivityForDate(date) {
    const activities = getActivitiesFromLocalStorage();
    return activities.find(activity => activity.date === date);
}

// Initial call to generate the activity matrix
generateActivityMatrix();
updateTopBar();
setInterval(updateTopBar, 1000); // Update the time every second
