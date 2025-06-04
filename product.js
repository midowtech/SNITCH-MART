function addProduct() {
  let product = {
    name: document.getElementById("pname").value,
    price: document.getElementById("price").value,
    image: document.getElementById("image").value,
    category: document.getElementById("category").value
  };

  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(product);
  localStorage.setItem("products", JSON.stringify(products));
  alert("Product Added!");
}
