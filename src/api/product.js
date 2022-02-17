import instance from "./config";

export const getAll = () => {
    const url = `/products`;
    return instance.get(url);
}
export const getAllProductCate = () => {
    const url = `/products/?_expand=categoryProduct`;
    return instance.get(url);
}
export const getAllByPrice = (min,max) => {
    const url = `/products/?price_gte=${min}&price_lte=${max}&_expand=categoryProduct`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/products/${id}?_expand=categoryProduct`;
    return instance.get(url);
}
export const remove = (id) => {
    const url = `/products/${id}`;
    return instance.delete(url)
}
export const update = (product) => {
    const url = `/products/${product.id}`;
    return instance.put(url, product)
}