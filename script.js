function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
      document.querySelector('.icon i').classList.remove('fa-bars');
      document.querySelector('.icon i').classList.add('fa-times');
  } else {
      x.className = "topnav";
      document.querySelector('.icon i').classList.remove('fa-times');
      document.querySelector('.icon i').classList.add('fa-bars');
  }
}


/* Image slide index.html */

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".unique-image");
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, idx) => {
            if (idx === index) {
                image.style.display = "block";
            } else {
                image.style.display = "none";
            }
        });
    }

    function changeImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    setInterval(changeImage, 5000); // Change image every 5 seconds (5000 milliseconds)
});



/* curriculum.html areas */

document.addEventListener("DOMContentLoaded", function() {
    const imageList1 = [
        'images/classroombfc.jpg',
        'images/derrickmitchellpave.jpg',
        'images/accoutability2024.jpg'
    ];
    const imageList2 = [
        'images/accountabilitypathway.jpg',
        'images/reneeteaches.jpg',
        'images/classmates.jpg'
    ];
    
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    
    const imageElement1 = document.querySelectorAll(".session-bottom-image")[0];
    const imageElement2 = document.querySelectorAll(".session-bottom-image")[1];
    
    function changeImage1() {
        currentIndex1 = (currentIndex1 + 1) % imageList1.length;
        imageElement1.src = imageList1[currentIndex1];
    }
    
    function changeImage2() {
        currentIndex2 = (currentIndex2 + 1) % imageList2.length;
        imageElement2.src = imageList2[currentIndex2];
    }
    
    setInterval(changeImage1, 8000);
    setInterval(changeImage2, 6000);
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