// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetSection = document.querySelector(link.getAttribute("href"));
    if (targetSection) {
      window.scroll({
        top: targetSection.offsetTop - 50,
        behavior: "smooth"
      });
    }
  });
});

// Handling contact form submission
const contactForm = document.querySelector("#contact form");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  // You can add code here to handle the form submission (e.g., sending an email)
  // For this example, we will just show an alert
  alert("Thank you for your message! We'll get back to you soon.");
  contactForm.reset();
});

function openInstagramProfile() {
    const instagramUrl = "https://www.instagram.com/tsaikrishna3703"; // Replace with your Instagram URL
    window.open(instagramUrl, "_blank");
  }

  function openLinkedInProfile() {
    const linkedinUrl = "https://www.linkedin.com/in/t-v-n-s-sai-krishna-gupta-3036a524a/"; // Replace with your LinkedIn URL
    const form = document.createElement("form");
    form.action = linkedinUrl;
    form.method = "get";
    form.target = "_blank";
    document.body.appendChild(form);
    form.submit();
  }