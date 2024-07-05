let today = new Date();
let options = {
  day: '2-digit',
  month: 'long',
  year: 'numeric',
  timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
};
let date = today.toLocaleDateString('en-US', options);
document.getElementById("date").textContent = date;

