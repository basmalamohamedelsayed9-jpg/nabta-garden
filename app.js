/* =========================================================
   PRODUCT FILTER
========================================================= */

const categoryButtons = document.querySelectorAll(".category-btn");
const productCards = document.querySelectorAll(".product-card");


function filterProducts(filter) {

    productCards.forEach(card => {

        if (filter === "all" || card.classList.contains(filter)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        categoryButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        // Get selected category
        const filter = button.dataset.filter;

        filterProducts(filter);

    });

});


// Show all products when page loads
filterProducts("all");
/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("header nav");
const navLinks = document.querySelector(".nav-links");
const menuIcon = menuBtn?.querySelector("i");

if (menuBtn && nav && navLinks && menuIcon) {

    menuBtn.addEventListener("click", (event) => {

        event.stopPropagation();

        const isOpen = nav.classList.toggle("nav-open");

        navLinks.classList.toggle("show", isOpen);

        menuBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        if (isOpen) {

            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");

        } else {

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        }

    });


    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            nav.classList.remove("nav-open");
            navLinks.classList.remove("show");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        });

    });


    document.addEventListener("click", (event) => {

        if (
            !nav.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            nav.classList.remove("nav-open");
            navLinks.classList.remove("show");

            menuBtn.setAttribute(
                "aria-expanded",
                "false"
            );

            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");

        }

    });

}
/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm = document.getElementById("contactForm");
const contactSubmit = document.getElementById("contactSubmit");
const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const company = document.getElementById("company").value.trim();
        const country = document.getElementById("country").value.trim();
        const message = document.getElementById("message").value.trim();


        /* Basic validation */

        if (!name || !email || !country || !message) {

            formMessage.textContent =
                "Please fill in all required fields.";

            formMessage.className =
                "form-message error";

            return;

        }


        /* Button loading state */

        contactSubmit.disabled = true;

        contactSubmit.querySelector("span").textContent =
            "Sending...";


        const templateParams = {

            to_email: "nabtagardenherbs@gmail.com",

            from_name: name,

            from_email: email,

            company: company,

            country: country,

            message: message

        };


        emailjs.send(
            "service_iedvuan",
            "template_de0iwn7",
            templateParams
        )

        .then(function () {

            formMessage.textContent =
                "Thank you! Your inquiry has been sent successfully.";

            formMessage.className =
                "form-message success";


            contactForm.reset();


            contactSubmit.disabled = false;

            contactSubmit.querySelector("span").textContent =
                "Send Inquiry";

        })

        .catch(function (error) {

            console.error("EmailJS Error:", error);

            formMessage.textContent =
                "Something went wrong. Please try again or contact us on WhatsApp.";

            formMessage.className =
                "form-message error";


            contactSubmit.disabled = false;

            contactSubmit.querySelector("span").textContent =
                "Send Inquiry";

        });

    });

}
// function sendEmail() {
//     const Data = {
//         to_email: 'nabtagardenherbs@gmail.com',
//         from_name: document.querySelector("#name").value,
//         from_email: document.getElementById("email").value,
//         subject: "contact",
//         message: `
//         name:${document.getElementById("name").value}
//         email:${document.getElementById("email").value}
//         company:${document.getElementById("company").value}
//         country:${document.getElementById("country").value}
//         message:${document.getElementById("message").value}
//                         `
//     };
//     emailjs.send("service_iedvuan", "template_de0iwn7", Data)
//         .then((response) => {
//             alert("success");
//             document.getElementById("form").reset();
//         })
//         .catch((error) => {
//             console.log(error);
//             alert("contact error")
//         })
// }
// document.getElementById("btn").addEventListener("click", (e) => {
//     e.preventDefault();
//     sendEmail();

// })
// ;

// const menuBtn = document.querySelector(".menu-btn");
// const navLinks = document.querySelector(".nav-links");
// const links = document.querySelectorAll(".nav-links a");

// menuBtn.addEventListener("click", () => {

//     navLinks.classList.toggle("show");

//     menuBtn.classList.toggle("fa-bars");
//     menuBtn.classList.toggle("fa-xmark");

// });

// links.forEach(link => {

//     link.addEventListener("click", () => {

//         navLinks.classList.remove("show");

//         menuBtn.classList.remove("fa-xmark");
//         menuBtn.classList.add("fa-bars");

//     });

// });

// document.addEventListener("click", (e) => {

//     if (
//         !navLinks.contains(e.target) &&
//         !menuBtn.contains(e.target)
//     ) {

//         navLinks.classList.remove("show");

//         menuBtn.classList.remove("fa-xmark");
//         menuBtn.classList.add("fa-bars");

//     }

// });

















