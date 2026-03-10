function switchSection(sectionId, clickedElement) {
    // 1. Hide all sections
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // 2. Remove 'active-link' styling from all nav items
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active-link');
    });

    // 3. Show the selected section
    document.getElementById(sectionId).classList.add('active');

    // 4. Highlight the clicked navigation link
    if (clickedElement) {
        clickedElement.classList.add('active-link');
    }
}

// Initialize the page by clicking the first link automatically
window.onload = () => {
    const firstLink = document.querySelector('nav a');
    switchSection('manifesto', firstLink);
};