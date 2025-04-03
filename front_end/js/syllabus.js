document.addEventListener('DOMContentLoaded', () => {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach((item, index) => {
        // Add staggered animation delay
        item.style.animationDelay = `${index * 0.2}s`;

        const header = item.querySelector('.accordion-header');
        header.addEventListener('click', () => {
            // Close other items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
});