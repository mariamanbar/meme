function switchSection(sectionId, clickedElement) {
    
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.classList.remove('active-link');
    });

    document.getElementById(sectionId).classList.add('active');

    if (clickedElement) {
        clickedElement.classList.add('active-link');
    }
}

window.onload = () => {
    const firstLink = document.querySelector('nav a');
    switchSection('manifesto', firstLink);
};