let cart = [];

// Função para adicionar produtos ao carrinho
function addToCart(productId, productPrice) {
  console.log(`Adicionando produto ${productId} ao carrinho com preço ${productPrice}`);

  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ id: productId, price: productPrice, quantity: 1 });
  }

  console.log('Carrinho:', cart);
  updateCartUI();
}

// Função para atualizar a interface do carrinho
function updateCartUI() {
  const cartItems = document.getElementById('cartItems');
  const totalPriceElement = document.getElementById('totalPrice');
  const cartButton = document.getElementById('cartButton');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `Produto ${item.id} - R$${item.price.toFixed(2)} x ${item.quantity}`;
    cartItems.appendChild(listItem);
    total += item.price * item.quantity;
  });

  totalPriceElement.textContent = total.toFixed(2);
  cartButton.textContent = `Carrinho (${cart.length})`;
}

// Função para finalizar a compra
function checkout() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio!');
    return;
  }

  let checkoutMessage = 'Obrigado pela sua compra!\n\nItens:\n';
  cart.forEach(item => {
    checkoutMessage += `Produto ${item.id} - R$${item.price.toFixed(2)} x ${item.quantity}\n`;
  });
  checkoutMessage += `\nTotal: R$${document.getElementById('totalPrice').textContent}`;

  alert(checkoutMessage);
  cart = [];
  updateCartUI();
}
