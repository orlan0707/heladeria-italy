let cart = [];  // Arreglo para almacenar los productos
let totalPrice = 0;  // Variable para el total del carrito

// Función para agregar productos al carrito
function addToCart(flavor, price) {
    // Agregar el sabor y el precio al carrito
    cart.push({ flavor, price });

    // Actualizar el contador en el encabezado
    document.getElementById('cart-count').textContent = cart.length;

    // Mostrar el producto agregado en el carrito
    updateCartDisplay();

    // Actualizar el precio total
    totalPrice += price;
    document.getElementById('total-price').textContent = `Total: $${totalPrice}`;
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = ''; // Limpiar la lista antes de mostrarla

    // Mostrar todos los productos en el carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.flavor} - $${item.price}`;
        cartList.appendChild(li);
    });
}
