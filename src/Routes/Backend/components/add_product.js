export default (product) => {
  return `
   ${product ? "" : "<h2 class='data_heading'>Add Product</h2>"}
   <form id="add_product_form">
     <div>
       <label for="title">Title</label>
       <input id="title" type="text" placeholder="title" value="${product ? product.title:""}" required>
     </div>
     <div>
       <label for="brand">Brand</label>
       <input id="brand" type="text" placeholder="brand" value="${product ? product.brand:"default"}" required>
     </div>
     <div>
       <label for="price">Price</label>
       <input id="price" type="number" placeholder="price" value="${product ? product.price:""}" required>
     </div>
     <div>
       <label for="discount">Discount</label>
       <input id="discount" type="number" placeholder="discount" value="${product ? product.discount:""}" required>
     </div>
     <div>
       <label for="category">Category</label>
       <input id="category" type="text" placeholder="category" value="${product ? product.category:""}" required>
     </div>
     <div>
       <label for="image">Image</label>
       <input id="image" type="text" placeholder="image url" required
         value="${product ? product.image:""}">
     </div>
     <div>
       <label for="rating">Rating</label>
       <input id="rating" type="text" placeholder="rating" value="${product ? product.rating:""}" required>
     </div>
     <div>
       <label for="rating_count">Rating Count</label>
       <input id="rating_count" type="number" placeholder="count" value="${product ? product.rating_count:""}" required>
     </div>
     <div id="description_div">
       <label for="description">Description</label>
       <textarea rows="5" id="description" type="text" placeholder="description" required>${product ? product.description:""}
       </textarea>
     </div>
       <input type="submit" value="${product ? "Update" : "Add Product"}">
    </form>
   `;
}

