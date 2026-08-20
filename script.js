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

const DISCORD_USERNAME = "army.fastboy";

const discordButton =
    document.getElementById("discordCopyButton");

const discordText =
    document.getElementById("discordText");


if (discordButton && discordText) {

    discordButton.addEventListener("click", async () => {

        try {

            // Modern clipboard API
            if (navigator.clipboard) {

                await navigator.clipboard.writeText(
                    DISCORD_USERNAME
                );

            } else {

                // Fallback
                const textarea =
                    document.createElement("textarea");

                textarea.value =
                    DISCORD_USERNAME;

                textarea.style.position = "fixed";
                textarea.style.opacity = "0";

                document.body.appendChild(textarea);

                textarea.focus();
                textarea.select();

                document.execCommand("copy");

                textarea.remove();

            }


            // SUCCESS FEEDBACK

            discordText.textContent = "Copied!";

            discordButton.classList.add("copied");


            setTimeout(() => {

                discordText.textContent =
                    "Copy Discord";

                discordButton.classList.remove("copied");

            }, 1500);


        } catch (error) {

            console.error(
                "Discord copy failed:",
                error
            );

            discordText.textContent =
                "Copy failed";

            setTimeout(() => {

                discordText.textContent =
                    "Copy Discord";

            }, 1500);

        }

    });

}
