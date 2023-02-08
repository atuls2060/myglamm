export default (data, data_div) => {
  let table = `
  <h2 class="data_heading">Pending Orders</h2>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Product ID</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total Price</th>
      <th>Shipping Address</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="orders_div">
  </tbody>
  </table>
  `
  data_div.innerHTML = table;
  console.log("all order", data)

  const tbody = document.getElementById("orders_div");

  data.forEach((elm) => {
    let row = document.createElement("tr")

    let id = document.createElement("td");
    id.textContent = elm.id;

    let product_id = document.createElement("td");
    product_id.textContent = elm.product_id;

    let quantity = document.createElement("td");
    quantity.textContent = elm.quantity;


    let price = document.createElement("td");
    price.textContent = "₹ " + elm.price;


    let total_price = document.createElement("td");
    total_price.textContent = "₹ " + elm.total_price;

    let shipping_address = document.createElement("td");
    shipping_address.textContent = elm.shipping_address;


    let edit = document.createElement("td");
    let edit_icon = document.createElement("i");
    edit_icon.className = "bx bx-edit";
    edit.append(edit_icon)

    let remove = document.createElement("td");
    let remove_icon = document.createElement("i");
    remove_icon.className = "bx bx-x";
    remove.append(remove_icon)


    row.append(id, product_id, quantity, price, total_price, shipping_address, edit, remove);
    tbody.append(row)
  })


}