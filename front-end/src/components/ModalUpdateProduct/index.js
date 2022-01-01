import './ModalUpdateProduct.css'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import ProfileUserService from '../../services/profileUser.service'
import toast, { Toaster } from 'react-hot-toast';

const ModalUpdateProduct = ({ product, setAction, action }) => {


    const validationSchema = Yup.object().shape({
        type: Yup.string().required('Product name is required'),
        brand: Yup.string().required('Brand is required'),
        unit: Yup.string().required('Unit is required'),
        price: Yup.number().positive('Please enter a valid amount').required('Please enter an amount'),
        producer: Yup.string().required('Producer is required'),
        origin: Yup.string().required('Origin is required'),
        description: Yup.string().required('Description is required'),
        category: Yup.string().required('Description is required'),
        // product_image: Yup.string().required('Image is required'),
    });

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(validationSchema)
    });

    // Metodo onSubmit
    const onSubmit = (data) => {

        const toasId = toast.custom(<div>
            <button class="btn btn-primary button-loading-user" style={{ backgroundColor: "#408e0a", opacity: "1", fontWeight: "700" }} type="button" disabled>
                <span class="spinner-border spinner-border-sm" style={{ color: "white", fontSize: "26px" }} role="status" aria-hidden="true"></span>
                Loading...
            </button>
        </div>)
        setTimeout(() => {


            ProfileUserService.updateProduct(product.id, data).then(
                (response) => {
                    toast.remove(toasId)

                    toast.success("Product updated successfully!", {
                        style: {
                            backgroundColor: "#408e0a",
                            color: "white",
                            padding: "20px",
                            fontSize: "20px"
                        },
                    })
                    setAction(!action)

                }
            ).catch((e) => {
                console.log("EEROROR => ", e)
                toast.remove(toasId)
                toast.error("Update error!!!", {
                    style: {
                        padding: "20px",
                        fontSize: "20px"
                    }
                })
            })

        }, 1000)
        console.log(product.id)
        console.log(JSON.stringify(data, null, 2));
    };
    return (
        <div className="modal fade" id={`productUpdate-${product.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title modal-update-product-h5" id="exampleModalLabel">Update product</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body modal-update-product-body">
                        <div className='container pt-3'>
                            <div className="row">
                                <h2>UPDATE YOUR PRODUCT DATA</h2>
                                <p className='parrafo-modal-update'>All fields marked with <span> * </span>are required</p>
                            </div>

                            <form className="form-update-product" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputProductName1" className="form-label">Product name<span>* </span></label>
                                    <input type="text" defaultValue={product["product_type"]} name="type" className={`form-control input-update-product  ${errors.type ? 'is-invalid' : ''}`} aria-label="Product name" {...register('type')} />
                                    <div className="invalid-feedback">{errors.type?.message}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputProductName1" className="form-label">Category<span>* </span></label>
                                    <input type="text" defaultValue={product["category"]} name="category" className={`form-control input-update-product  ${errors.category ? 'is-invalid' : ''}`} aria-label="Product name" {...register('category')} />
                                    <div className="invalid-feedback">{errors.category?.message}</div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputBrand1" className="form-label">Brand<span>* </span></label>
                                    <input type="text" defaultValue={product["brand"]} name="brand" className={`form-control input-update-product  
                                    ${errors.brand ? 'is-invalid' : ''}`} id="inputBrand" aria-describedby="emailHelp"  {...register('brand')} />
                                    <div className="invalid-feedback">{errors.brand?.message}</div>
                                </div>
                                <div className=" row mb-3">
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputUnit1" className="form-label ">Unit<span>* </span></label>
                                        <input type="text" defaultValue={product["unit"]} name="unit" className={`form-control input-update-product  ${errors.unit ? 'is-invalid' : ''}`} id="inputUnit"  {...register('unit')} />
                                        <div className="invalid-feedback">{errors.unit?.message}</div>
                                    </div>
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputPrice1" className="form-label">Price<span>* </span></label>
                                        <input name="price" defaultValue={product["price"]} className={`form-control input-update-product  ${errors.price ? 'is-invalid' : ''}`} style={{ width: "95%" }} id="inputPrice" {...register('price')} />
                                        <div className="invalid-feedback">{errors.price?.message}</div>
                                    </div>
                                </div>
                                <div className=" row mb-3">
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputProducer1" className="form-label">Producer/Manufacturer<span>* </span></label>
                                        <input type="text" defaultValue={product["producer"]} name="producer" className={`form-control input-update-product ${errors.producer ? 'is-invalid' : ''}`} id="inputProducer"  {...register('producer')} />
                                        <div className="invalid-feedback">{errors.producer?.message}</div>
                                    </div>
                                    <div className="col-6" style={{ paddingRight: "0" }}>
                                        <label htmlFor="exampleInputOrigin1" className="form-label">Origin<span>* </span></label>
                                        <input type="text" defaultValue={product["origin"]} name="origin" className={`form-control input-update-product  ${errors.origin ? 'is-invalid' : ''}`} style={{ width: "95%" }} id="inputOrigin"  {...register('origin')} />
                                        <div className="invalid-feedback">{errors.origin?.message}</div>
                                    </div>
                                    <div className="mb-3" style={{ paddingRight: "0" }}>
                                        <label htmlFor="message-text" className="col-form-label">Description<span>* </span></label>
                                        <textarea name="description" defaultValue={product["product_description"]} className={`form-control input-update-product  ${errors.description ? 'is-invalid' : ''}`} id="message-text" {...register('description')}></textarea>
                                        <div className="invalid-feedback">{errors.description?.message}</div>
                                    </div>
                                    <div className="mb-3 d-flex flex-column">
                                        <label htmlFor="image" className="col-form-label">Image<span>* </span></label>
                                        <div className="icon-product-modal text-center">
                                            <i className="bi bi-camera"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center" style={{ marginBottom: "30px" }}>
                                        <button className="btn btn-outline-success btn-modal-update" type="submit">Update </button>

                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ModalUpdateProduct;