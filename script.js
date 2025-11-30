const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 5,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 1
        }
    }

});

// ====== NAVBAR TOGGLE ======
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// ====== SMOOTH SCROLL ======
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        navLinks.classList.remove("active");
    });
});

// ====== SCROLL ANIMATION (FADE-IN EFFECT) ======
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".program-container, .trainer-card, .gallery-grid img, .contact-container").forEach(el => {
    observer.observe(el);
});

// ====== INTERACTIVE SCHEDULE FILTER ======
const filterButtons = document.querySelectorAll(".filter-btn");
const classCards = document.querySelectorAll(".class-card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Remove 'active' class from all buttons
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const day = button.getAttribute("data-day");

        classCards.forEach(card => {
            if (day === "all" || card.getAttribute("data-day") === day) {
                card.style.display = "block";
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            } else {
                card.style.opacity = "0";
                setTimeout(() => {
                    card.style.display = "none";
                }, 300);
            }
        });
    });
});

// ====== CONTACT FORM SUBMIT (Demo Only) ======
const contactForm = document.querySelector("form");
contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for contacting IronFit! We’ll reach out soon.");
    contactForm.reset();
});
