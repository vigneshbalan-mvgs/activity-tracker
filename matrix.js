// matrix.js

import { activityData, fetchActivityData } from './storage.js';

// Function to initialize the activity matrix
function initializeActivityMatrix() {
    fetchActivityData(); // Fetch stored activity data from localStorage
    const container = document.getElementById('activity-matrix');
    container.innerHTML = ''; // Clear previous content
    const today = new Date();
    const startDate = new Date(today.getTime() - (180 * 24 * 60 * 60 * 1000)); // 6 months
    let currentDate = new Date(startDate);

    while (currentDate <= today) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day', 'cursor-pointer'); // Add class and cursor pointer
        dayElement.setAttribute('data-date', currentDate.toISOString().split('T')[0]);

        // Check if there's activity for this date
        const activity = activityData.find(item => item.date === currentDate.toISOString().split('T')[0]);
        if (activity) {
            if (activity.action === 'Completed task') {
                dayElement.classList.add('active');
            } else if (activity.action === 'New task') {
                dayElement.classList.add('Newtask');
            }
        } else {
            dayElement.classList.add('inactive');
        }

        // Add click event listener to show popup with activity details
        dayElement.addEventListener('click', function() {
            // Call function to handle date selection and activity display
            selectDateAndDisplayActivity(this.getAttribute('data-date'));
        });

        container.appendChild(dayElement);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Function to handle date selection and display activity
function selectDateAndDisplayActivity(selectedDate) {
    // Update date input value with selected date
    document.getElementById('date-input').value = selectedDate;

    // Display activities done on selected date
    displayActivities(selectedDate);
}

// Function to display activities done on selected date
function displayActivities(selectedDate) {
    const displayArea = document.getElementById('activities-display');
    displayArea.innerHTML = ''; // Clear previous content

    const activities = activityData.filter(item => item.date === selectedDate);
    if (activities.length > 0) {
        const ul = document.createElement('ul');
        ul.classList.add('text-white', 'text-lg');
        activities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = `${activity.date}: ${activity.action}`;
            ul.appendChild(li);
        });
        displayArea.appendChild(ul);
    } else {
        displayArea.textContent = 'No activities for this date.';
    }
}

export { initializeActivityMatrix, selectDateAndDisplayActivity };
