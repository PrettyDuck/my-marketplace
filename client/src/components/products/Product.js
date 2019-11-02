import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import { getSingleProductRequest, deleteProductRequest } from '../../store/actions/ProductAction'

const Product = (props) => {
    const { match, getSingleProductRequest, deleteProductRequest, products: { currentProduct }, auth: { user } } = props;
    useEffect(() => {
        getSingleProductRequest(match.params.id);
    }, [getSingleProductRequest, match.params.id]);
    const deleteItem = e => {
        e.preventDefault();
        deleteProductRequest({
            id: currentProduct._id,
            productImage: currentProduct.productImage
        }); // second param for deleting img from storage
    }
    const updateItem = e => {
        e.preventDefault();
        props.history.push('/update');
    }

    return (

        <Fragment>
            {currentProduct !== null ?
                (
                    <div>
                        <h1>Product</h1>
                        {currentProduct.name}
                        {currentProduct.user === user._id ? (
                            <div>
                                <button onClick={deleteItem}>Delete current item</button>
                                <button onClick={updateItem}>Update current item</button>
                            </div>) : (
                                <h4>Have a nice day</h4>)}
                    </div>
                ) : null}

        </Fragment>
    )
}
const mapStateToProps = state => ({
    products: state.products,
    auth: state.auth,
});
export default connect(mapStateToProps, { getSingleProductRequest, deleteProductRequest })(Product)
