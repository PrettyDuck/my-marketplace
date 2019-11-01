import axios from 'axios';
export const getProductsReq = async () => {
    const res = await axios.get('/api/products');
    return res.data;
}
export const getSingleProductReq = async id => {
    const res = await axios.get(`/api/products/${id}`, {
        params: {
            id: id,
        }
    });
    return res.data;
}
export const addProductReq = async formData => {
    const fd = new FormData();
    fd.append('name', formData.name);
    fd.append('location', formData.location);
    fd.append('description', formData.description);
    fd.append('category', formData.category);
    fd.append('productImage', formData.productImage);
    fd.append('price', formData.price);
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    }
    const res = await axios.post('/api/products', fd, config);
    return res.data;
}
export const deleteProductReq = async formData => {
    await axios.delete(`/api/products/${formData.id}`,{data: { productImage: formData.productImage }}); // data - for deleting image from storage
}