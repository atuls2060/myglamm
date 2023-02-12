import popup from "./popup.js"
export default (data, data_div) => {
  let popup_div = document.getElementById("popup");
  let table = `
  <h2 class="data_heading">Products</h2>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Title</th>
      <th>Brand</th>
      <th>Price</th>
      <th>Discount</th>
      <th>Category</th>
      <th>description</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="products_div">
  </tbody>
  </table>
  `
  data_div.innerHTML = table;
  console.log("all data", data)

  const tbody = document.getElementById("products_div");

  data.forEach((elm) => {
    let row = document.createElement("tr")

    let id = document.createElement("td");
    id.textContent = elm.id;

    let title = document.createElement("td");
    title.textContent = elm.title;

    let brand = document.createElement("td");
    brand.textContent = elm.brand;


    let price = document.createElement("td");
    price.textContent = elm.price;


    let discount = document.createElement("td");
    discount.textContent = elm.discount;

    let category = document.createElement("td");
    category.textContent = elm.category;

    let description = document.createElement("td");
    description.textContent = elm.description;

    let edit = document.createElement("td");
    let edit_icon = document.createElement("i");
    edit_icon.className = "bx bx-edit";
    edit.append(edit_icon)
    edit.onclick = () => {
      popup_div.innerHTML = popup(elm);

      let edit_modal = new bootstrap.Modal(document.getElementById("edit_modal"), {});
      edit_modal.show();

    }

    let remove = document.createElement("td");
    let remove_icon = document.createElement("i");
    remove_icon.className = "bx bx-x";
    remove.append(remove_icon)


    row.append(id, title, brand, price, discount, category, description, edit, remove);
    tbody.append(row)
  })


}