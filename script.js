
const imagePaths = {
    
    dish1: "assets\bir.jpg",
    dish2: "images/dish2.jpg",
    dish3: "images/dish3.jpg",
    catering: "images/catering.jpg",
    onlineOrdering: "images/online-ordering.jpg",
    dineIn: "images/dine-in.jpg",
    aboutUs: "images/about-us.jpg",
    
};

function setImageSource(selector, imageKey) {
    const imageElement = document.querySelector(selector);
    if (imageElement && imagePaths[imageKey]) {
        imageElement.src = imagePaths[imageKey];
        imageElement.alt = imageKey;
    } else {
        console.error(`Image element or path not found for selector: ${selector}, key: ${imageKey}`);
    }
}



const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm_password').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        fetch('/signup', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Signup successful!");
            window.location.href = "signin.html";
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Signup failed. Please try again.");
        });
    });
}

// Sign In Form
const signinForm = document.getElementById('signin-form');

if (signinForm) {
    signinForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        fetch('/signin', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Signin successful!");
            localStorage.setItem('token', data.token); 
            window.location.href = "index.html";
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Signin failed. Please try again.");
        });
    });
}

// Contact Form
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        fetch('/contact', { // Replace with your server endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert("Message sent successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Failed to send message. Please try again.");
        });
    });
}