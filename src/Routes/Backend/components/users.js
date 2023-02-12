export default (data, data_div) => {
  let table = `
  <h2 class="data_heading">Customers</h2>
  <table>
  <thead>
    <tr>
      <th>ID</th>
      <th>Name</th>
      <th>Email</th>
      <th>Edit</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody id="users_div">
  </tbody>
  </table>
  `
  data_div.innerHTML = table;
  console.log("all users",data)

  const tbody = document.getElementById("users_div");

  data.forEach((elm) => {
    let row = document.createElement("tr")

    let id = document.createElement("td");
    id.textContent = elm.id;

    let name = document.createElement("td");
    name.textContent = elm.name;

    let email = document.createElement("td");
    email.textContent = elm.email;

    let edit = document.createElement("td");
    let edit_icon = document.createElement("i");
    edit_icon.className = "bx bx-edit";
    edit.append(edit_icon)

    let remove = document.createElement("td");
    let remove_icon = document.createElement("i");
    remove_icon.className = "bx bx-x";
    remove.append(remove_icon)


    row.append(id,name,email,edit,remove);
    tbody.append(row)
  })


}