let cart = [];

function addToCart(productId, productPrice) {
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: productId, price: productPrice, quantity: 1 });
  }
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `Product ${item.id} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(listItem);
    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = total;
  document.getElementById('cartButton').textContent = `Cart (${cart.length})`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Your cart is empty!');
    return;
  }

  let checkoutMessage = 'Thank you for your purchase!\n\nItems:\n';
  cart.forEach(item => {
    checkoutMessage += `Product ${item.id} - $${item.price} x ${item.quantity}\n`;
  });
  checkoutMessage += `\nTotal: $${document.getElementById('totalPrice').textContent}`;

  alert(checkoutMessage);
  cart = [];
  updateCartUI();
}
