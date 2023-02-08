let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".sidebarBtn");
sidebarBtn.onclick = function () {
  sidebar.classList.toggle("active");
  if (sidebar.classList.contains("active")) {
    sidebarBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else
    sidebarBtn.classList.replace("bx-menu-alt-right", "bx-menu");
}


let product_data = [];
//get Products
const getProduct = async () => {
  try {
    const data = await fetch("https://the-gadget-factory-backend.herokuapp.com/products")

    product_data = data;

  } catch (error) {
    console.log("error", error);
  }
}
getProduct();


let users_data = [];
//get Users
const getUsers = async () => {
  try {
    const res = await fetch("https://the-gadget-factory-backend.herokuapp.com/users")

    const data = await res.json();
    users_data = data;

  } catch (error) {
    console.log("error", error);
  }
}
getUsers();



import orders from "../components/orders.js"
import products from "../components/products.js"
import users from "../components/users.js"
import add_product from "../components/add_product.js"
import dashboard from "../components/dashboard.js";

let order_data = [{
  id: 1,
  product_id: 1,
  quantity: 2,
  price: 120,
  total_price: 240,
  shipping_address: "3rd Steat Model Town",
  delivered: false
},
{
  id: 1,
  product_id: 1,
  quantity: 2,
  price: 120,
  total_price: 240,
  shipping_address: "3rd Steat Model Town",
  delivered: false
}
  ,
{
  id: 1,
  product_id: 1,
  quantity: 2,
  price: 120,
  total_price: 240,
  shipping_address: "3rd Steat Model Town",
  delivered: false
},
{
  id: 1,
  product_id: 1,
  quantity: 2,
  price: 120,
  total_price: 240,
  shipping_address: "3rd Steat Model Town",
  delivered: false
}];


const data_div = document.getElementById("data_div");
dashboard(order_data, data_div);

document.getElementById("dashboard").onclick = () => {
  data_div.innerHTML = null;
  orders(order_data, data_div);
}

document.getElementById("orders").onclick = () => {
  data_div.innerHTML = null;
  orders(order_data, data_div);
}

document.getElementById("products").onclick = () => {
  data_div.innerHTML = null;
  products(product_data, data_div);
}
document.getElementById("users").onclick = () => {
  data_div.innerHTML = null;
  users(users_data, data_div);
}

document.getElementById("add_product").onclick = () => {
  data_div.innerHTML = null;
  data_div.innerHTML = add_product();

  product_form = document.getElementById("add_product_form");
  console.log(product_form)

  //add product click
  product_form.onsubmit = (e) => {
    e.preventDefault();
    alert("clicked")
    addProduct();


  }
}



//add product
let product_form;
const addProduct = async () => {
  let title = product_form.title.value;
  let brand = product_form.brand.value;
  let price = product_form.price.value;
  let discount = product_form.discount.value;
  let description = product_form.description.value;
  let category = product_form.category.value;
  let image = product_form.image.value;
  let rating = product_form.rating.value;
  let rating_count = product_form.rating_count.value;

  price = parseInt(price);
  discount = parseInt(discount);
  rating = parseFloat(rating);
  rating_count = parseInt(rating_count);

  const productData = {
    title,
    brand,
    price,
    discount,
    description,
    category,
    image,
    images: [],
    rating,
    rating_count,
    review: [],
  }

  console.log(productData)

  try {
    const res = await fetch("https://the-gadget-factory-backend.herokuapp.com/products", {
      method: "POST",
      body: JSON.stringify(productData),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json();
    console.log("add product", data);
    alert("Product added")

  } catch (error) {
    console.log("error", error);
  }

}

