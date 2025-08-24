document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Regular expression for email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Validation checks
    if (name === "") {
        alert("Please enter your name.");
        return;
    }

    if (email === "" || !emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    if (message === "") {
        alert("Please write a message.");
        return;
    }

    // Success message
    alert(`Thank you, ${name}! Your inquiry has been sent.`);
    document.getElementById("contactForm").reset();
});
const categoryData = {
  interior: {
    title: "Interior Paints",
    description: "Transform your living spaces with vibrant, eco-friendly interior paints available in matte, satin, and gloss finishes.",
    image: "interior paint.jpg"
  },
  exterior: {
    title: "Exterior Paints",
    description: "Protect your walls with long-lasting, weather-resistant exterior paints designed to withstand harsh conditions.",
    image: "Exterior paint.jpg"
  },
  wood: {
    title: "Wood Coatings",
    description: "Premium wood coatings that enhance natural grain and provide lasting protection against wear and tear.",
    image: "Wood coating.jpg"
  },
  metal: {
    title: "Metal Paints",
    description: "Durable metal paints that prevent rust and add a sleek finish to all your metal surfaces.",
    image: "Metal paint.jpg"
  }
};

function showCategory(type) {
  const details = categoryData[type];
  document.getElementById('category-title').textContent = details.title;
  document.getElementById('category-description').textContent = details.description;
  document.getElementById('category-image').src = details.image;
  document.getElementById('category-details').style.display = 'block';
  document.getElementById('category-details').scrollIntoView({behavior: 'smooth'});
}

function hideCategory() {
  document.getElementById('category-details').style.display = 'none';
}
