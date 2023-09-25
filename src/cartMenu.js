function openCart() {
    document.getElementById("cart").classList.remove("right-[-360px]");
    document.getElementById("cart").classList.add("right-[0px]");
}

function closeCart() {
  document.getElementById("cart").classList.remove("right-[0px]");
  document.getElementById("cart").classList.add("right-[-360px]");
}

export function startingCart() {
  const butonCloseCart = document.getElementById("cart-close");
  const buttonOpenCart = document.getElementById("cart-open");
  butonCloseCart.addEventListener("click", closeCart);
  buttonOpenCart.addEventListener("click", openCart);
}