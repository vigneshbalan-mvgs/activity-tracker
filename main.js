// main.js

import { initializeActivityMatrix, selectDateAndDisplayActivity } from './matrix.js';
import { saveActivityData } from './storage.js';

// Function to add activity based on user input (using date input directly)
function addActivity() {
    const dateInput = document.getElementById('date-input').value;
    if (dateInput) {
        activityData.push({ date: dateInput, action: 'Completed task' }); // Example: Always add as 'Completed task'
        saveActivityData(); // Save activity data to localStorage
        initializeActivityMatrix(); // Reinitialize the activity matrix after adding activity
    } else {
        alert('Please select a date');
    }
}

// Function to add activity based on user input (using activity selection panel)
function addActivityWithSelection() {
    const dateInput = document.getElementById('date-input').value;
    const activitySelect = document.getElementById('activity-select');
    const selectedActivity = activitySelect.value;

    if (dateInput && selectedActivity) {
        activityData.push({ date: dateInput, action: selectedActivity });
        saveActivityData(); // Save activity data to localStorage
        initializeActivityMatrix(); // Reinitialize the activity matrix after adding activity
    } else {
        alert('Please select a date and activity');
    }
}

// Function to update top bar with current date and time
function updateTopBar() {
    const now = new Date();
    document.getElementById('current-date').innerText = now.toDateString();
    document.getElementById('current-time').innerText = now.toLocaleTimeString();
}

// Initial call to update top bar
updateTopBar();
setInterval(updateTopBar, 1000); // Update the time every second

// Event listeners for buttons
document.getElementById('add-activity-btn').addEventListener('click', addActivity);
document.getElementById('add-activity-select-btn').addEventListener('click', addActivityWithSelection);

// Initial call to initialize activity matrix
initializeActivityMatrix();
