// Smooth scrolling

const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (event) {

        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// Scroll icon animation

const scrollIcon = document.querySelector('.scroll-icon');

if (scrollIcon) {

    setInterval(() => {

        scrollIcon.style.transform = 'translateY(3px)';

        setTimeout(() => {
            scrollIcon.style.transform = 'translateY(0)';
        }, 300);

    }, 1500);
}


// Floating cards hover effect

const cards = document.querySelectorAll(
    '.code-card, .responsive-card, .version-card'
);

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.classList.add('active');
    });

    card.addEventListener('mouseleave', () => {
        card.classList.remove('active');
    });

});




// Skill progress animation

const bars = document.querySelectorAll('.bar span');

const skillObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const width = entry.target.dataset.width;

                entry.target.style.width = width;

                skillObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.4
    }
);


bars.forEach(bar => {
    skillObserver.observe(bar);
});


// Contact form

const form = document.querySelector('.contact-form');

if (form) {

    form.addEventListener('submit', function (event) {

        event.preventDefault();

        const button = form.querySelector('.send-btn');

        button.textContent = 'Message Sent ✓';

        button.style.background = '#4f8cff';

        form.reset();

        setTimeout(() => {
            button.textContent = 'Send Message';
            button.style.background = '#171717';
        }, 2500);

    });

}