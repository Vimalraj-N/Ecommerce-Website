
/* side bar */
document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.menubar');
    const sidebar = document.querySelector('.sidebar');
    const closeBtn = document.querySelector('.close-btn');

    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });
});


/*wishlist*/
document.addEventListener('DOMContentLoaded', () => {
    const wishlistItems = document.querySelectorAll('.wishlist-item');
    
    wishlistItems.forEach(item => {
        const removeButton = item.querySelector('.remove');
        
        removeButton.addEventListener('click', () => {
            item.remove();
        });
    });
});
