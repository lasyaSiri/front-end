document.addEventListener('DOMContentLoaded', () => {
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.dashboard-section');

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Update active sidebar link
            sidebarLinks.forEach(l => l.parentElement.classList.remove('active'));
            link.parentElement.classList.add('active');

            // Show corresponding section
            const targetId = link.getAttribute('href').substring(1);
            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === targetId) {
                    section.classList.add('active');
                }
            });
        });
    });

    // Add animation to widgets
    const widgets = document.querySelectorAll('.widget');
    widgets.forEach((widget, index) => {
        widget.style.animationDelay = `${index * 0.1}s`;
        widget.style.animation = 'fadeInUp 0.5s ease forwards';
    });
});