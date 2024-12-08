document.getElementById("ticket-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevents the default form submission behavior

  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let date = document.getElementById("date").value;
  let passengers = document.getElementById("passengers").value;

  if (from && to && date && passengers) {
      alert(`Ticket booked from ${from} to ${to} on ${date} for ${passengers} passengers.`);
  } else {
      alert("Please fill in all fields!");
  }
});
