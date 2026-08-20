// ===============================
// SMOOTH SCROLL.
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const target = document.querySelector(
            this.getAttribute("href")
        );

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".section, .skill-card, .lab-item, .featured-project, .process, .system, .project-row, .case-grid"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);

revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});

// ===============================
// DISCORD COPY
// ===============================

const DISCORD_USERNAME = "DEIN_DISCORD_USERNAME";

const discordCopyButton =
    document.getElementById("discordCopyButton");

const discordText =
    document.getElementById("discordText");


discordCopyButton.addEventListener("click", async () => {

    try {

        await navigator.clipboard.writeText(
            DISCORD_USERNAME
        );

        discordText.textContent = "Copied!";

        setTimeout(() => {

            discordText.textContent = "Copy Discord";

        }, 1500);

    } catch (error) {

        console.error(
            "Could not copy Discord:",
            error
        );

    }

});
