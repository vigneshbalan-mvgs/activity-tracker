// Sample activity data (initially empty)
let activityData = [];

// Function to save activity data to local storage
function saveActivitiesToLocalStorage() {
    localStorage.setItem('activityData', JSON.stringify(activityData));
}

// Function to load activity data from local storage
function loadActivitiesFromLocalStorage() {
    const storedData = localStorage.getItem('activityData');
    if (storedData) {
        activityData = JSON.parse(storedData);
    }
}

// Initial loading of activity data from local storage
loadActivitiesFromLocalStorage();
