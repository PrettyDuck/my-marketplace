import React,{useEffect} from 'react'
import {connect} from 'react-redux'
import {getSingleProductRequest} from '../../store/actions/ProductAction'

const Product = (props) => 
{
    const {match ,getSingleProductRequest,products:{currentProduct} } = props;
    useEffect(()=>{
        getSingleProductRequest(match.params.id);
    },[getSingleProductRequest]);
    return (
        <div>
            <h1>Product</h1>
            {currentProduct !== null ? currentProduct.name : null}
        </div>
    )
}
const mapStateToProps = state => ({
    products: state.products
});
export default connect(mapStateToProps,{getSingleProductRequest}) (Product)
