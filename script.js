console.log("script.js loaded");

/* ---------------- HEADER DROPDOWNS ---------------- */

document.addEventListener("DOMContentLoaded", () => {

  const dessertBtn = document.getElementById("dessertBtn");
  const dessertMenu = document.getElementById("dessertMenu");

  const searchBtn = document.getElementById("searchBtn");
  const searchOptions = document.getElementById("searchOptions");

  if (dessertBtn && dessertMenu) {
    dessertBtn.addEventListener("click", (e) => {
      e.preventDefault();
      dessertMenu.style.display =
        dessertMenu.style.display === "block" ? "none" : "block";
      if (searchOptions) searchOptions.style.display = "none";
    });
  }

  if (searchBtn && searchOptions) {
    searchBtn.addEventListener("click", () => {
      searchOptions.style.display =
        searchOptions.style.display === "grid" ? "none" : "grid";
      if (dessertMenu) dessertMenu.style.display = "none";
    });
  }

  document.addEventListener("click", (e) => {
    if (dessertMenu && !e.target.closest(".dropdown")) {
      dessertMenu.style.display = "none";
    }
    if (searchOptions && !e.target.closest(".search-box")) {
      searchOptions.style.display = "none";
    }
  });

});


/* ---------------- LOGIN ---------------- */

let generatedOTP = "";

function openLogin() {
  const popup = document.getElementById("loginPopup");
  if (popup) popup.style.display = "block";
}

function generateOTP() {
  generatedOTP = Math.floor(100000 + Math.random() * 900000).toString();
  alert("Your OTP is: " + generatedOTP);
}

function submitOTP() {
  const otpInput = document.getElementById("otpInput");
  if (!otpInput) return;

  if (otpInput.value === generatedOTP) {
    document.getElementById("loginPopup").style.display = "none";
    localStorage.setItem("isLoggedIn", "true");
    updateAuthSection();
  } else {
    alert("Invalid OTP");
  }
}

function updateAuthSection() {
  const authSection = document.getElementById("authSection");
  if (!authSection) return;

  if (localStorage.getItem("isLoggedIn") === "true") {
    authSection.innerHTML = `
      <div class="user-icons">
        <img src="Images/user.png" class="user-icon">
        <span>❤️</span>
        <span>🔔</span>
      </div>
    `;
  }
}

window.addEventListener("load", updateAuthSection);


/* ---------------- SLIDER ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  if (slides.length > 0) {
    let index = 0;
    setInterval(() => {
      slides[index].classList.remove("active");
      index = (index + 1) % slides.length;
      slides[index].classList.add("active");
    }, 3000);
  }
});


/* ---------------- TESTIMONIAL ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const testimonials = document.querySelectorAll(".testimonial");
  if (testimonials.length > 0) {
    let current = 0;
    setInterval(() => {
      testimonials[current].classList.remove("active");
      current = (current + 1) % testimonials.length;
      testimonials[current].classList.add("active");
    }, 4000);
  }
});


/* ---------------- FAQ ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((q) => {
    q.addEventListener("click", () => {
      const answer = q.nextElementSibling;
      const icon = q.querySelector(".icon");

      document.querySelectorAll(".faq-answer").forEach(a => {
        if (a !== answer) a.style.display = "none";
      });

      document.querySelectorAll(".icon").forEach(i => {
        if (i !== icon) i.textContent = "+";
      });

      if (answer.style.display === "block") {
        answer.style.display = "none";
        icon.textContent = "+";
      } else {
        answer.style.display = "block";
        icon.textContent = "−";
      }
    });
  });
});


/* ---------------- ORDER ONLINE ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const deliveryBtn = document.getElementById("deliveryBtn");
  const pickupBtn = document.getElementById("pickupBtn");
  const addressLabel = document.getElementById("addressLabel");

  if (pickupBtn && deliveryBtn && addressLabel) {
    pickupBtn.classList.add("active");

    pickupBtn.addEventListener("click", () => {
      pickupBtn.classList.add("active");
      deliveryBtn.classList.remove("active");
      addressLabel.textContent = "Pick Up Branch Name *";
    });

    deliveryBtn.addEventListener("click", () => {
      deliveryBtn.classList.add("active");
      pickupBtn.classList.remove("active");
      addressLabel.textContent = "Delivery Address *";
    });
  }
});


/* ---------------- POPUP (ORDER + CONTACT) ---------------- */

document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("successPopup");

  function setupForm(id) {
    const form = document.getElementById(id);
    if (!form || !popup) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      popup.style.display = "flex";
      form.reset();
    });
  }

  setupForm("orderForm");
  setupForm("contactForm");
});

function closePopup() {
  const popup = document.getElementById("successPopup");
  if (popup) popup.style.display = "none";
}
