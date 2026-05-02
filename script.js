let currentIndex = 0;

function moveSlider(direction) {
    const slider = document.getElementById('worksSlider');
    const cards = document.querySelectorAll('.project-card');
    
    if (!slider) return;

    currentIndex += direction;

    if (currentIndex >= cards.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = cards.length - 1;

    // Use 100% since we removed the gap in the HTML window
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}