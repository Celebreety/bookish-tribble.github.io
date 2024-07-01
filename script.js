const currentDay = document.querySelector('[data-testid="currentDay"]');
const currentTimeUTC = document.querySelector('[data-testid="currentTimeUTC"]');

function updateDateTime() {
  const date = new Date();
  const day = date.toLocaleDateString('en-US', {weekday: 'long'});
  const time = date.toLocaleTimeString('en-US', {timeZone: 'UTC'});
  currentDay.textContent = day;
  currentTimeUTC.textContent = time;
}

updateDateTime();
 // Update every second
setInterval(updateDateTime, 1000);
