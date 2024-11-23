document.addEventListener('DOMContentLoaded', function() {
  // Select the button element
  const button = document.querySelector('#myButton');

  if (button) {
    button.addEventListener('click', function() {
      // Show an alert when the button is clicked
      alert('You clicked me!');
    });
  }
});