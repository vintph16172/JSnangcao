import instance from "./config";

export const getAll = () => {
    const url = `/carts/?_expand=coupon`;
    return instance.get(url);
}
export const get = (id) => {
    const url = `/carts/${id}?_expand=coupon`;
    return instance.get(url);
}
export const addCart = (post) => {
    const url = `/carts`;
    return instance.post(url, post)
}
export const remove = (id) => {
    const url = `/carts/${id}`;
    return instance.delete(url)
}
export const update = (post) => {
    const url = `/carts/${post.id}`;
    return instance.put(url, post)
}