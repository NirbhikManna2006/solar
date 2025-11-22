// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Function to show hidden works
function showMoreWorks() {
    const hiddenItems = document.querySelectorAll('.hidden-work');
    hiddenItems.forEach(item => {
        item.style.display = 'block';
    });
    document.getElementById('seeMoreBtn').style.display = 'none';
}

// Function to Open Lightbox
function openLightbox(element) {
    var modal = document.getElementById("lightboxModal");
    var modalImg = document.getElementById("lightboxImage");
    var captionText = document.getElementById("caption");
    
    modal.style.display = "block";
    modalImg.src = element.src; 
    captionText.innerHTML = element.alt;
}

// Function to Close Lightbox
function closeLightbox() {
    var modal = document.getElementById("lightboxModal");
    modal.style.display = "none";
}

console.log("Sunwave Tech website loaded successfully.");