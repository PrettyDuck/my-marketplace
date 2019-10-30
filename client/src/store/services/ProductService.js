import axios from 'axios';
export const getProductsReq = async () => {
    const res = await axios.get('/api/products');
    return res.data;
}
export const getSingleProductReq = async id => {
    const res = await axios.get(`/api/products/${id}`,{
        params:{
            id: id,
        }
    });
    return res.data;
}
export const addProductReq = async formData => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const res = await axios.post('/api/products', formData, config);
    return res.data;
}