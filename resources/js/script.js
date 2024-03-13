document.addEventListener('DOMContentLoaded', function () {
    // Get the toggle button, menu, and menu icon
    var toggleButton = document.getElementById('navbarToggle');
    var menu = document.querySelector('.navbar ul');
    var menuIcon = document.getElementById('menuIcon');

    // Hide menu icon initially if the window is larger than 768px
    if (window.innerWidth > 768) {
        menuIcon.style.display = 'none';
    }

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', function () {
        // Toggle the 'active' class on the menu
        menu.classList.toggle('active');

        // Toggle between the hamburger and close icons
        if (menu.classList.contains('active')) {
            menuIcon.classList.remove('fa-list');
            menuIcon.classList.add('bi-x');
        } else {
            menuIcon.classList.remove('bi-x');
            menuIcon.classList.add('fa-list');
        }
    });

    // Add a resize event listener to handle menu icon visibility
    window.addEventListener('resize', function () {
        if (window.innerWidth > 768) {
            // If the window is larger than 768px, hide the menu icon
            menuIcon.style.display = 'none';

            // If the menu is active, remove the 'active' class and update the icon to close
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                menuIcon.classList.remove('bi-x');
                menuIcon.classList.add('fa-list');
            }
        } else {
            // If the window is 768px or smaller, show the menu icon
            menuIcon.style.display = 'block';
        }
    });
});