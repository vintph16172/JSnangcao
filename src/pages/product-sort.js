import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import {  getAll,getAllProductCate,getAllByPrice } from "../api/product"
import {getAllCateProduct} from "../api/cateProduct"

const ProductSortPage = {
    async render(value){
        console.log(value);
        const { data } = await getAllProductCate();
       
        
        console.log(data);
        const  data2  = await getAllCateProduct();   
        const  dataSort =  data.filter(function(x){ return x.price >= value.min && x.price <= value.max});
        console.log(dataSort);
        
        console.log(data2);
        const arrPrice = [
            {min: 50000,max: 100000,price_quantity: 0},
            {min: 100000,max: 200000,price_quantity: 0},
            {min: 200000,max: 300000,price_quantity: 0},
            {min: 300000,max: 500000,price_quantity: 0},
            {min: 500000,max: 1000000,price_quantity: 0}
        ]
        
        data.map((v)=>{
            arrPrice.map((i)=>{
                if((i.min <= v.price) && (v.price <= i.max)){
                    i.price_quantity = i.price_quantity + 1
                } 
            })
            
        })
        console.log(arrPrice);
        

        const data3 = data.sort(function(a, b) {
            return  a.view - b.view;
        });
        const arrHotProduct = []
        for (let y = 1; y <= 4; y++) {
            arrHotProduct.push(data3[data3.length - y])
        }
        console.log(arrHotProduct)


        return /*html*/`
        ${HeaderPage.render()}


        <!-- Page Header Section Start Here -->
        <section class="page-header style-2">
            <div class="container">
                <div class="page-title text-center">
                    <h3 class="text-4xl" style="color:#FBE202">Sản Phẩm</h3>
                    <ul class="breadcrumb">
                        <li><a href="/" >Trang chủ</a></li>
                        <li >Sản Phẩm</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Page Header Section Ending Here -->

        <!-- Blog Page Section Start Here -->
        <div class="blog-section blog-page padding-tb">
            <div class="container">
                <div class="section-wrapper">
                    <div class="row justify-content-center">
                        <div class="col-lg-4 col-md-7 col-12">
                            <aside>
                                <div class="widget widget-search">
                                    <div class="search-wrapper">
                                        <input type="text" name="s" placeholder="Tìm Kiếm...">
                                        <button type="submit"><i class="icofont-search-2"></i></button>
                                    </div>
                                </div>

                                <div class="widget widget-category">
                                    <div class="widget-header">
                                        <h5>Danh Mục</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        ${data2.data.map((category_sort)=>/*html*/`
                                            <li>
                                                <a href="/categoryProducts/${category_sort.id}?_embed=products" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>${category_sort.name}</span><span>${category_sort.id}</span></a>
                                            </li>
                                        `).join("")}
                                        
                                    </ul>
                                </div>
                                <div class="widget widget-category">
                                    <div class="widget-header">
                                        <h5>Giá</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        ${arrPrice.map((price_sort)=>/*html*/`
                                            <li>
                                                <a href="/product/sort/${price_sort.min}&${price_sort.max}" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>${price_sort.min} - ${price_sort.max}</span><span>${price_sort.price_quantity}</span></a>
                                            </li>
                                        
                                        `).join("")}

                                    </ul>
                                </div>
            
                                <div class="widget widget-post">
                                    <div class="widget-header">
                                        <h5>Sản Phẩm Bán Chạy</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        ${arrHotProduct.map((hotProduct)=>/*html*/`
                                            <li class="d-flex flex-wrap justify-content-between">
                                                <div class="post-thumb">
                                                    <a href="/products/detail/${hotProduct.id}"><img src="${hotProduct.image}" alt="product"></a>
                                                </div>
                                                <div class="post-content ">
                                                    <h6><a href="/products/detail/${hotProduct.id}">${hotProduct.name}</a></h6>
                                                    <p>${hotProduct.price} VNĐ</p>
                                                </div>
                                            </li>
                                        
                                        
                                        `).join("")}
                                        
                                    </ul>
                                </div>
            
                                

                                <div class="widget widget-instagram">
                                    <div class="widget-header">
                                        <h5>FoodFood instagram</h5>
                                    </div>
                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                        <li><a href="#"><img src="../assets/img/menu1.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu2.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu3.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu4.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu5.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu6.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu7.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu8.png" alt="product"></a></li>
                                        <li><a href="#"><img src="../assets/img/menu9.png" alt="product"></a></li>
                                    </ul>
                                </div>

                                <div class="widget widget-tags">
                                    <div class="widget-header">
                                        <h5>Tags Phổ Biến</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        <li><a href="#">burger</a></li>
                                        <li><a href="#">pizza</a></li>
                                        <li><a href="#">gà rán</a></li>
                                        <li><a href="#">salad</a></li>
                                        <li><a href="#">đồ uống</a></li>
                                        <li><a href="#">3docean</a></li>
                                        <li><a href="#">envato</a></li>
                                        <li><a href="#">themeforest</a></li>
                                        <li><a href="#">codecanyon</a></li>
                                    </ul>
                                </div>

                                <div class="widget widget-banner">
                                    <div class="widget-header">
                                        <h5>Quảng Cáo</h5>
                                    </div>
                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                        <li><a href="#"><img src="./assets/img/main-content-thongtin2.png" alt="product"></a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                        <div class="col-lg-8 col-12">
                            <article>
                                <div class="row justify-content-center">
                                    <div class="section-wrapper">
                                        <div class="shop-title d-flex flex-wrap justify-content-between">
                                            <p>Hiển thị 01 - 12 trong 139 Sản Phẩm</p>
                                            <div class="product-view-mode">
                                                <a class="active" data-target="flex"><i class="icofont-ghost"></i></a>
                                                <a data-target="list"><i class="icofont-listing-box"></i></a>
                                            </div>
                                        </div>
                    
                                        <div class="shop-product-wrap flex row">

                                            ${dataSort.map((product)=>/*html*/`
                                            <div class="col-xl-3 col-md-6 col-12">
                                                <div class="product-item">
                                                    <div class="product-thumb">
                                                        <img src="${product.image}" alt="food-product">
                                                        <span class="price">${product.sale}%</span>
                                                        <div class="product-action-link">
                                                            <a href="assets/images/product/01.jpg" data-rel="lightcase"><i class="icofont-eye"></i></a>
                                                            <a href="#"><i class="icofont-heart-alt"></i></a>
                                                            <a href="/products/detail/${product.id}"><i class="icofont-cart-alt"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="product-content">
                                                        <div class="product-title">
                                                            <span class="cat-name">${product.categoryProduct.name}</span>
                                                            <h6><a href="products/${product.id}">${product.name}</a></h6>
                                                            <div class="rating">
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                            </div>
                                                            <button class="order-btn">${product.price} VNĐ</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="product-list-item">
                                                    <div class="product-thumb">
                                                        <img src="${product.image}" alt="food-product">
                                                        <div class="product-action-link">
                                                            <a href="assets/images/product/01.jpg" data-rel="lightcase"><i class="icofont-eye"></i></a>
                                                            <a href="#"><i class="icofont-heart-alt"></i></a>
                                                            <a href="/products/detail/${product.id}"><i class="icofont-cart-alt"></i></a>
                                                        </div>
                                                    </div>
                                                    <div class="product-content">
                                                        <div class="product-title">
                                                            <span class="cat-name">${product.category}</span>
                                                            <h6><a href="/products/detail/${product.id}">${product.name}</a></h6>
                                                            <span class="price">${product.price} VNĐ</span>
                                                            <div class="rating">
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                                <i class="icofont-star"></i>
                                                            </div>
                                                            <p>${product.desc}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>



                                            
                                            
                                            `).join("")}

                                            

                                           
                                            
                                        </div>
                                        
                                        <div class="paginations">
                                            <ul class="d-flex flex-wrap justify-content-center">
                                                <li>
                                                    <a href="#">1</a>
                                                </li>
                                                <li class="d-none d-sm-block">
                                                    <a href="#">2</a>
                                                </li>
                                                <li class="d-none d-sm-block">
                                                    <a href="#">3</a>
                                                </li>
                                                <li>
                                                    <a class="dot">...</a>
                                                </li>
                                                <li class="d-none d-sm-block">
                                                    <a href="#">9</a>
                                                </li>
                                                <li class="d-none d-sm-block">
                                                    <a href="#">10</a>
                                                </li>
                                                <li>
                                                    <a href="#">11</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                   
                                    
                                </div>
                                
                            </article>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Page Section Ending Here -->
        


        

        ${FooterPage.render()}

        `;
    },
    afterRender(){
        Cart.afterRender()
        HeaderPage.afterRender()
        $(function() {
            $('.product-view-mode').on('click', 'a', function (e) {
                e.preventDefault();
                var shopProductWrap = $('.shop-product-wrap');
                var viewMode = $(this).data('target');
                $('.product-view-mode a').removeClass('active');
                $(this).addClass('active');
                shopProductWrap.removeClass('flex list').addClass(viewMode);
            });
        });
    }
    



}
export default ProductSortPage;