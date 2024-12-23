// storage.js

// Sample activity data (initially empty)
let activityData = [];

// Function to fetch activity data from localStorage or initialize if not present
function fetchActivityData() {
    const storedData = localStorage.getItem('activityData');
    if (storedData) {
        activityData = JSON.parse(storedData);
    } else {
        activityData = []; // Initialize empty if no data found
    }
}

// Function to save activity data to localStorage
function saveActivityData() {
    localStorage.setItem('activityData', JSON.stringify(activityData));
}

export { activityData, fetchActivityData, saveActivityData };
