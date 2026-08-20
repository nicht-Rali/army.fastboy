// ===============================
// SMOOTH SCROLL
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
// SIMPLE SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .lab-item, .featured-project, .process"
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
