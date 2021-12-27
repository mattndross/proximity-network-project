import './ModalDeleteUserProduct.css'

const ModalDeleteUserProduct = ({ id }) => {
    return (
        <div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content">
                    <div class="modal-header" style={{ borderBottom: "unset" }}>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body modal-delete-body">
                        <h3>Delete products</h3>
                        <p>The products will be permanently deleted.</p>
                    </div>
                    <div class="modal-footer modal-delete-footer">
                        <button type="button" class="btn-delete-cancel" data-bs-dismiss="modal">Cancel</button>
                        <span>|</span>
                        <button type="button" class="btn-delete">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalDeleteUserProduct;