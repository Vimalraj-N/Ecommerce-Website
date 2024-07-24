
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

/*cart page */
document.addEventListener('DOMContentLoaded', () => {
    const cartItems = document.querySelectorAll('.cart-item');
    const totalElement = document.querySelector('.total h3');
    
    const updateTotal = () => {
        let total = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector('.product-details p').textContent.replace('$', ''));
            const quantity = parseInt(item.querySelector('.quantity').value);
            total += price * quantity;
        });
        totalElement.textContent = `Total: ${total.toFixed(2)} Rs`;
    };

    cartItems.forEach(item => {
        const quantityInput = item.querySelector('.quantity');
        const removeButton = item.querySelector('.remove');
        
        quantityInput.addEventListener('change', updateTotal);
        
        removeButton.addEventListener('click', () => {
            item.remove();
            updateTotal();
        });
    });

    updateTotal();
});
