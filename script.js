// Function to format and display current time and date
function updateClock() {
    const now = new Date();
  
    // Format time with leading zeros
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
  
    // Get day of the week and full date
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
  
    const dayName = weekdays[now.getDay()];
    const monthName = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
  
    // Update DOM elements
    document.getElementById('time').textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById('date').textContent = `${dayName}, ${monthName} ${day}, ${year}`;
  }
  
  // Call updateClock every second
  setInterval(updateClock, 1000);
  
  // Initial call to display immediately on load
  updateClock();
  