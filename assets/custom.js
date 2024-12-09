
document.addEventListener('DOMContentLoaded', function() {
  
    if (document.body.classList.contains('template-product')) {
        const reviewsTab = document.querySelector('.reviews-tab');
        const targetElement = document.getElementById('judgeme_product_reviews');
        
        if (reviewsTab && targetElement) {
            reviewsTab.addEventListener('click', function() {
                const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                const offsetPosition = elementPosition - 100; 
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth' 
                });
            });
        } else {
            console.warn('Either .reviews-tab or #judgeme_product_reviews element is missing.');
        }
    }
});