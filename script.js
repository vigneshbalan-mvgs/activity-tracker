
// Sample activity data (you would replace this with data from your todo list app)
const activityData = [
    { date: '2024-03-10', action: 'Completed task' },
    { date: '2024-03-12', action: 'new task' },
    { date: '2024-03-21', action: 'Completed task' },
    { date: '2024-03-22', action: 'Added new task' },
    { date: '2024-03-12', action: 'Added new task' },
    { date: '2024-03-22', action: 'Added new task' },
    { date: '2024-03-22', action: 'Added new task' },
    { date: '2024-03-22', action: 'Added new task' },
    // Add more activity items as needed
];

// Function to generate activity matrix
function generateActivityMatrix() {
    const container = document.getElementById('activity-matrix');
    const today = new Date();
    const startDate = new Date(today.getTime() - (365 * 24 * 60 * 60 * 1000)); // One year ago
    let currentDate = new Date(startDate);

    while (currentDate <= today) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('day');
        
        // Check if there's activity for this date
        const activity = activityData.find(item => item.date === currentDate.toISOString().split('T')[0]);
        if (activity) {
            if (activity.action === 'Completed task') {
                dayElement.classList.add('active');
            } else if (activity.action === 'new task') {
                dayElement.classList.add('Newtask');
            } else {
                dayElement.classList.add('inactive');
            }
        } else {
            dayElement.classList.add('inactive');
        }

        container.appendChild(dayElement);
        currentDate.setDate(currentDate.getDate() + 1);
    }
}

// Call the function to generate the activity matrix
generateActivityMatrix();
