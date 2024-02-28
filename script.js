
document.getElementById("mobile-menu-toggle").addEventListener("click", function (){
    document.getElementById("mobile-menu").classList.toggle("hidden");
});


document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll functionality
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle menu functionality
    document.getElementById('menu-toggle').addEventListener('click', function () {
        document.querySelector('.hidden').classList.toggle('hidden');
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll functionality (same as before)

    // Toggle menu functionality (same as before)

    // Up arrow functionality
    const upArrowButton = document.getElementById('up-arrow');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            upArrowButton.classList.remove('hidden');
        } else {
            upArrowButton.classList.add('hidden');
        }
    });

    upArrowButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});