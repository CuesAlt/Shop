document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.dataset.product;
        alert(`${product} has been added to your cart.`);
    });
});
