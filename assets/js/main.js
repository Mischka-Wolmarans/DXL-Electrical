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
    PROJECT FILTERS
    ===================================================== */

    const portfolioFilters = document.querySelectorAll("#portfolio-flters li");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    portfolioFilters.forEach(filter => {
        filter.addEventListener("click", () => {
            const selectedFilter = filter.getAttribute("data-filter");

            portfolioFilters.forEach(item => {
                item.classList.remove("filter-active");
            });

            filter.classList.add("filter-active");

            portfolioItems.forEach(item => {
                const shouldShow =
                    selectedFilter === "*" ||
                    item.matches(selectedFilter);

                item.classList.toggle("is-hidden", !shouldShow);
            });
        });
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

    /* =====================================================
    CURSOR SPARK TRAIL
    ===================================================== */

    const sparkCanvas = document.getElementById("sparkTrail");
        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (sparkCanvas && !reduceMotion) {

            const sparkCanvas = document.getElementById("sparkTrail");

            if (sparkCanvas) {
                const ctx = sparkCanvas.getContext("2d");
                const points = [];
                const sparks = [];

                const isTouch = window.matchMedia("(pointer: coarse)").matches;

                let lastTouchPoint = null;
                let lastPointer = null;
                let isEnergised = false;

                const interactiveSelector =
                    "a, button, .service-item, .portfolio-item, .cta-strip-btn, .btn-primary, .btn-outline";

                function resizeSparkCanvas() {
                    sparkCanvas.width = window.innerWidth * window.devicePixelRatio;
                    sparkCanvas.height = window.innerHeight * window.devicePixelRatio;

                    ctx.setTransform(
                        window.devicePixelRatio,
                        0,
                        0,
                        window.devicePixelRatio,
                        0,
                        0
                    );
                }

                function createSparks(x, y, speed = 1, boost = false) {
                    const sparkCount = boost ? 7 : isTouch ? 2 : 4;

                    for (let i = 0; i < sparkCount; i++) {
                        const angle = Math.random() * Math.PI * 2;
                        const velocity = (Math.random() * 2 + 1) * speed;

                        sparks.push({
                            x,
                            y,
                            vx: Math.cos(angle) * velocity,
                            vy: Math.sin(angle) * velocity,
                            age: 0,
                            life: Math.random() * 10 + 8,
                            size: Math.random() * 2 + 1
                        });
                    }
                }

                function addSparkPoint(x, y, target = null) {
                    const hoveringInteractive =
                        target && target.closest && target.closest(interactiveSelector);

                    let speed = 0;

                    if (lastPointer) {
                        const dx = x - lastPointer.x;
                        const dy = y - lastPointer.y;
                        speed = Math.sqrt(dx * dx + dy * dy);
                    }

                    isEnergised = speed > 7 || hoveringInteractive;

                    points.push({
                        x,
                        y,
                        age: 0,
                        life: isTouch ? 10 : isEnergised ? 20 : 10,
                        energy: isEnergised ? 1 : 0.35
                    });

                    if (points.length > (isTouch ? 16 : 26)) {
                        points.shift();
                    }

                    if (speed > 9 || hoveringInteractive) {
                        createSparks(
                            x,
                            y,
                            Math.min(Math.max(speed / 10, 1), 2.4),
                            hoveringInteractive
                        );
                    }

                    lastPointer = { x, y };
                }

                window.addEventListener("mousemove", e => {
                    addSparkPoint(e.clientX, e.clientY, e.target);
                });

                window.addEventListener(
                    "touchmove",
                    e => {
                        const touch = e.touches[0];
                        if (!touch) return;

                        lastTouchPoint = {
                            x: touch.clientX,
                            y: touch.clientY
                        };

                        addSparkPoint(touch.clientX, touch.clientY, e.target);
                    },
                    { passive: true }
                );

                window.addEventListener(
                    "scroll",
                    () => {
                        if (!isTouch || !lastTouchPoint) return;

                        addSparkPoint(lastTouchPoint.x, lastTouchPoint.y);
                    },
                    { passive: true }
                );

                window.addEventListener("touchend", () => {
                    lastTouchPoint = null;
                    lastPointer = null;
                    isEnergised = false;
                });

                function drawSparkTrail() {
                    ctx.clearRect(0, 0, sparkCanvas.width, sparkCanvas.height);

                    for (let i = 1; i < points.length; i++) {
                        const p1 = points[i - 1];
                        const p2 = points[i];

                        const opacity = Math.max(0, 1 - p2.age / p2.life);
                        const energy = p2.energy;

                        const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);

                        gradient.addColorStop(0, `rgba(255,255,255,${opacity * 0.05 * energy})`);
                        gradient.addColorStop(0.35, `rgba(182,219,0,${opacity * 0.6 * energy})`);
                        gradient.addColorStop(1, `rgba(0,160,255,${opacity * 0.28 * energy})`);

                        const lineWidth = isTouch ? 4 : isEnergised ? 8 : 3;
                        const glowWidth = isTouch ? 1.2 : isEnergised ? 2.4 : 1;

                        ctx.strokeStyle = gradient;
                        ctx.lineWidth = lineWidth * opacity * energy;
                        ctx.lineCap = "round";
                        ctx.lineJoin = "round";

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();

                        ctx.strokeStyle = `rgba(255,255,255,${opacity * 0.42 * energy})`;
                        ctx.lineWidth = glowWidth * opacity;

                        ctx.beginPath();
                        ctx.moveTo(p1.x, p1.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();

                        p2.age++;
                    }

                    while (points.length && points[0].age >= points[0].life) {
                        points.shift();
                    }

                    for (let i = sparks.length - 1; i >= 0; i--) {
                        const spark = sparks[i];
                        const opacity = Math.max(0, 1 - spark.age / spark.life);

                        spark.x += spark.vx;
                        spark.y += spark.vy;
                        spark.vx *= 0.93;
                        spark.vy *= 0.93;
                        spark.age++;

                        ctx.beginPath();
                        ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(182,219,0,${opacity})`;
                        ctx.fill();

                        ctx.beginPath();
                        ctx.arc(spark.x, spark.y, spark.size * 0.45, 0, Math.PI * 2);
                        ctx.fillStyle = `rgba(255,255,255,${opacity})`;
                        ctx.fill();

                        if (spark.age >= spark.life) {
                            sparks.splice(i, 1);
                        }
                    }

                    requestAnimationFrame(drawSparkTrail);
                }

                resizeSparkCanvas();
                window.addEventListener("resize", resizeSparkCanvas);
                drawSparkTrail();
            }

        }
});