/* =========================
   WORK SCROLL ANIMATION
========================= */

const workSection = document.querySelector('.work');

if (workSection) {

    const workObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    workSection.classList.add('show');

                    workObserver.unobserve(workSection);
                }

            });

        },
        {
            threshold: 0.25
        }
    );

    workObserver.observe(workSection);
}