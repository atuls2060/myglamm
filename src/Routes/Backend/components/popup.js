import add_prodcut from "./add_product.js"
export default (product) =>{
    return `
    <div id="edit_modal" class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title">Edit Product</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            ${add_prodcut(product)}
        </div>
        </div>
    </div>
    </div>
    `
}