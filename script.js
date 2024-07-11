document.getElementById('menuToggle').addEventListener('click', function() {
  var navLinks = document.getElementById('navLinks');
  if (navLinks.style.display === 'flex') {
      navLinks.style.display = 'none';
  } else {
      navLinks.style.display = 'flex';
      navLinks.style.flexDirection = 'column';
  }
});

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
/*  function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
*/

/* Image slide index.html */
document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll(".unique-image");
  let currentIndex = 0;

  function showNextImage() {
      images[currentIndex].classList.remove("active");
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].classList.add("active");
  }

  // Initially show the first image
  images[currentIndex].classList.add("active");

  // Change image every 5 seconds (5000 milliseconds)
  setInterval(showNextImage, 5000);
});

/* Contact Form Regex Area */

const fullNameInput = document.getElementById('fullNameInput');
const phoneInput = document.getElementById('phoneInput');
const emailInput = document.getElementById('emailInput');

const nameRegex = /^[a-zA-Z]+$/;
const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
const emailRegex = /^([a-zA-Z0-9_\.-]+)@([a-zA-Z0-9_\.-]+)\.([a-zA-Z]{2,5})$/;

const validateFirstName = () => {
  if (!nameRegex.test(fullNameInput.value)) {
    fullNameInput.classList.add('error');
    fullNameInput.nextElementSibling.textContent = 'Invalid full name format';
  } else {
    fullNameInput.classList.remove('error');
    fullNameInput.nextElementSibling.textContent = '';
  }
};

const validatePhone = () => {
  if (!phoneRegex.test(phoneInput.value)) {
    phoneInput.classList.add('error');
    phoneInput.nextElementSibling.textContent = 'Invalid phone number format';
  } else {
    phoneInput.classList.remove('error');
    phoneInput.nextElementSibling.textContent = '';
  }
};

const validateEmail = () => {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.classList.add('error');
    emailInput.nextElementSibling.textContent = 'Invalid email format';
  } else {
    emailInput.classList.remove('error');
    emailInput.nextElementSibling.textContent = '';
  }
};

fullNameInput.addEventListener('blur', validateFullName);
phoneInput.addEventListener('blur', validatePhone);
emailInput.addEventListener('blur', validateEmail);

/* This updates the chart information every 24 hours */

setTimeout(updateData, 86400000);

updateData();