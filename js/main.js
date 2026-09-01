/* =========================================================
   SHARED SITE INTERACTIONS
========================================================= */

/* Create a few floating hearts on every page. */
const effectsLayer = document.getElementById("effects-layer");

const heartSymbols = [
    "❤️",
    "💗",
    "💕",
    "💖",
    "✨",
    "🌸"
];

function createFloatingHeart() {
    if (!effectsLayer) {
        return;
    }

    const heart = document.createElement("span");

    heart.className = "float-heart";

    heart.textContent =
        heartSymbols[
            Math.floor(Math.random() * heartSymbols.length)
        ];

    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize =
        `${16 + Math.random() * 24}px`;

    heart.style.animationDuration =
        `${4.5 + Math.random() * 3}s`;

    effectsLayer.appendChild(heart);

    window.setTimeout(() => {
        heart.remove();
    }, 8000);
}

/* Keep the background effect subtle. */
window.setInterval(createFloatingHeart, 2200);

/* Small initial effect. */
for (let i = 0; i < 5; i += 1) {
    window.setTimeout(
        createFloatingHeart,
        i * 250
    );
}

/* Add a stronger heart burst for important moments. */
window.createHeartBurst = function createHeartBurst(count = 40) {
    for (let i = 0; i < count; i += 1) {
        window.setTimeout(
            createFloatingHeart,
            i * 35
        );
    }
};

/* Flip compliment cards. */
document
    .querySelectorAll(".flip-card")
    .forEach((card) => {
        card.addEventListener("click", () => {
            card.classList.toggle("flipped");
        });
    });

/* Fade the current page before navigating to another HTML file. */
document
    .querySelectorAll("[data-page-link]")
    .forEach((link) => {
        link.addEventListener("click", (event) => {
            const destination =
                link.getAttribute("href");

            if (!destination) {
                return;
            }

            event.preventDefault();

            document.body.classList.add(
                "page-leaving"
            );

            window.setTimeout(() => {
                window.location.href =
                    destination;
            }, 280);
        });
    });
