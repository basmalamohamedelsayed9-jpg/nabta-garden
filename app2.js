// // =========================================================
// MOBILE MENU
// =========================================================

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

if (menuBtn && navigation) {

    const navLinks = document.querySelectorAll(".nav-links a");


    menuBtn.addEventListener("click", () => {

        navigation.classList.toggle("show");

        menuBtn.classList.toggle("fa-bars");
        menuBtn.classList.toggle("fa-xmark");

    });


    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("show");

            menuBtn.classList.remove("fa-xmark");
            menuBtn.classList.add("fa-bars");

        });

    });


    // Close menu when clicking outside

    document.addEventListener("click", (event) => {

        if (
            !navigation.contains(event.target) &&
            !menuBtn.contains(event.target)
        ) {

            navigation.classList.remove("show");

            menuBtn.classList.remove("fa-xmark");
            menuBtn.classList.add("fa-bars");

        }

    });

}


// =========================================================
// CERTIFICATE MODAL
// =========================================================

const certificateModal =
    document.getElementById("certificateModal");

const modalImage =
    document.getElementById("modalImage");

const modalClose =
    document.getElementById("modalClose");

const certificateButtons =
    document.querySelectorAll(".certificate-btn");


certificateButtons.forEach(button => {

    button.addEventListener("click", function (event) {

        event.preventDefault();

        if (!certificateModal || !modalImage) {
            return;
        }

        modalImage.src = this.href;

        certificateModal.classList.add("show");

        certificateModal.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow = "hidden";

    });

});


// =========================================================
// CLOSE MODAL
// =========================================================

function closeCertificateModal() {

    if (!certificateModal) {
        return;
    }

    certificateModal.classList.remove("show");

    certificateModal.setAttribute(
        "aria-hidden",
        "true"
    );

    if (modalImage) {
        modalImage.src = "";
    }

    document.body.style.overflow = "";

}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeCertificateModal
    );

}


// Close when clicking outside image

if (certificateModal) {

    certificateModal.addEventListener("click", function (event) {

        if (event.target === certificateModal) {

            closeCertificateModal();

        }

    });

}


// =========================================================
// CLOSE WITH ESCAPE
// =========================================================

document.addEventListener("keydown", function (event) {

    if (
        event.key === "Escape" &&
        certificateModal &&
        certificateModal.classList.contains("show")
    ) {

        closeCertificateModal();

    }

});