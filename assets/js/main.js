/**
 * =====================================================
 * DXL Electrical
 * Main JavaScript
 * =====================================================
 */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const body = document.body;
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const navLinks = document.querySelectorAll("#navbar .scrollto");
    const year = document.getElementById("year");


    /* =====================================================
   MOBILE NAVIGATION
===================================================== */

if (navToggle) {

    navToggle.addEventListener("click", () => {

        body.classList.toggle("mobile-nav-active");

        const expanded = body.classList.contains("mobile-nav-active");

        navToggle.setAttribute("aria-expanded", expanded);

        navToggle.classList.toggle("bi-list");
        navToggle.classList.toggle("bi-x");

    });

}


    /* =====================================================
       CLOSE MOBILE MENU AFTER CLICK
    ===================================================== */

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            if (!body.classList.contains("mobile-nav-active"))
                return;

            body.classList.remove("mobile-nav-active");

            navToggle.setAttribute("aria-expanded", "false");

            navToggle.classList.remove("bi-x");
            navToggle.classList.add("bi-list");

        });

    });


    /* =====================================================
       ESC KEY CLOSES MOBILE MENU
    ===================================================== */

    document.addEventListener("keydown", e => {

        if (e.key !== "Escape") return;

        body.classList.remove("mobile-nav-active");

        navToggle.setAttribute("aria-expanded", "false");

        navToggle.classList.remove("bi-x");
        navToggle.classList.add("bi-list");

    });


    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    document.querySelectorAll('a.scrollto').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.hash);

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth",
                block: "start"

            });

        });

    });


    /* =====================================================
       ACTIVE NAVIGATION
    ===================================================== */

    const sections = document.querySelectorAll("section[id]");

    function updateActiveNav() {

        const scrollPosition = window.scrollY + 180;

        sections.forEach(section => {

            const id = section.getAttribute("id");

            const link = document.querySelector(`#navbar a[href="#${id}"]`);

            if (!link) return;

            if (
                scrollPosition >= section.offsetTop &&
                scrollPosition < section.offsetTop + section.offsetHeight
            ) {

                link.classList.add("active");

            } else {

                link.classList.remove("active");

            }

        });

    }

    window.addEventListener("scroll", updateActiveNav);
    updateActiveNav();


    /* =====================================================
       FOOTER YEAR
    ===================================================== */

    if (year) {

        year.textContent = new Date().getFullYear();

    }

    /* =====================================================
   SERVICES MODAL
===================================================== */

const serviceData = {

    installations: {

        icon: "bi-lightning-charge",

        title: "Electrical Installations",

        description:
        "Whether you're building a new home, renovating your kitchen or adding extra plug points, we provide safe, compliant electrical installations completed to the highest standard.",

        examples: [

            "New plug points",

            "Lighting installations",

            "Ceiling fans",

            "Outdoor lighting",

            "Stove installations",

            "Garage wiring"

        ]

    },

    faultfinding: {

        icon: "bi-soundwave",

        title: "Fault Finding & Diagnostics",

        description:
        "Electrical faults can be frustrating and dangerous. We quickly identify the source of the problem and carry out reliable repairs.",

        examples: [

            "Power tripping",

            "Lights flickering",

            "Burning smells",

            "Faulty plug points",

            "Power failures"

        ]

    },

    dbboards: {

        icon: "bi-grid-3x3-gap",

        title: "DB Boards & Upgrades",

        description:
        "We install, repair and upgrade distribution boards to keep your electrical system safe and compliant.",

        examples: [

            "DB upgrades",

            "Earth leakage",

            "Circuit breakers",

            "Safety inspections"

        ]

    },

    rewiring: {

        icon: "bi-plug",

        title: "Wiring & Rewiring",

        description:
        "Old or damaged wiring can become a safety risk. We replace and install wiring for homes and businesses.",

        examples: [

            "House rewiring",

            "Office rewiring",

            "Extension wiring",

            "Cable replacement"

        ]

    },

    maintenance: {

        icon: "bi-building",

        title: "Industrial & Commercial Maintenance",

        description:
        "Keeping businesses operating safely with planned electrical maintenance and repairs.",

        examples: [

            "Routine maintenance",

            "Factory repairs",

            "Retail maintenance",

            "Preventative servicing"

        ]

    },

    motorcontrol: {

        icon: "bi-cpu",

        title: "Motor Control & Starters",

        description:
        "Installation and maintenance of motor control systems for industrial applications.",

        examples: [

            "Motor starters",

            "Control panels",

            "Industrial motors",

            "Pump systems"

        ]

    },

    cables: {

        icon: "bi-bezier2",

        title: "Cable Installations & Terminations",

        description:
        "Professional cable installations completed safely for commercial and industrial environments.",

        examples: [

            "Cable routing",

            "Cable joints",

            "Terminations",

            "Underground cables"

        ]

    },

    emergency: {

        icon: "bi-broadcast",

        title: "Emergency Repairs",

        description:
        "Fast response for urgent electrical problems to restore power safely and minimise downtime.",

        examples: [

            "Power outages",

            "Storm damage",

            "Electrical faults",

            "Emergency call-outs"

        ]

    }

};

const modal = document.getElementById("serviceModal");

const modalTitle = document.getElementById("modalTitle");

const modalDescription = document.getElementById("modalDescription");

const modalExamples = document.getElementById("modalExamples");

const modalIcon = document.getElementById("modalIcon");

document.querySelectorAll(".service-item").forEach(button => {

    button.addEventListener("click", () => {

        const service = serviceData[button.dataset.service];

        modalTitle.textContent = service.title;

        modalDescription.textContent = service.description;

        modalIcon.className = "bi " + service.icon;

        modalExamples.innerHTML = "";

        service.examples.forEach(item => {

            modalExamples.innerHTML += `<li>${item}</li>`;

        });

        modal.classList.add("active");

        document.body.style.overflow = "hidden";

    });

});

document.querySelector(".service-modal-close").addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});

document.querySelector(".service-modal-overlay").addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});


    /* =====================================================
       AOS
    ===================================================== */

    if (typeof AOS !== "undefined") {

        AOS.init({

            duration: 700,
            once: true,
            easing: "ease-out"

        });

    }

});