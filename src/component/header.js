import Cart from "./cart";
import { reRender } from "../../utils/reRender"
import { decreaseQty, increaseQty, removeItemInCart } from "../../utils/cart";
import toastr from 'toastr';
import "toastr/build/toastr.min.css";
const HeaderPage = {
    render() {
        let cart = [];
        let totalProduct = 0
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'));
            console.log(cart);
            cart.forEach((product) => {
                totalProduct += product.price * product.quantity
            })
            console.log(totalProduct);
        }
        return /*html*/`
        
        <div id="header">
                <!-- preloader start here -->
        
        <!-- preloader ending here -->

        <!-- search area -->
        <div class="search-area">
        <div class="search-input">
            <div class="search-close">
                <span></span>
                <span></span>
            </div>
            <form>
                <input type="text" name="text" placeholder="Tìm Kiếm.......">
                <button class="search-btn"><span class="serch-icon"><i class="icofont-search-2"></i></span></button>
            </form>
        </div>
    </div>
    <!-- search area -->

   <!-- Mobile Menu Start Here -->
    <div class="mobile-menu">
        <nav class="mobile-header">
            <div class="header-logo">
                <a href="/"><img src="../../assets/img/logo.png" alt="logo"></a>
            </div>
            <div class="header-bar">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
        <nav class="mobile-menu">
            <div class="mobile-menu-area">
                <div class="mobile-menu-area-inner">
                    <ul>
                        <li class="active"><a href="/">Trang Chủ</a></li>
                        <li><a href="about.html">Thông Tin</a>
                            
                        </li>
                        <li><a href="/product">Sản Phẩm</a>
                            
                        </li>   
                        <li><a href="reserv.html">Đặt Bàn</a></li>
                        <li><a href="blog-2.html">Tin Tức</a>
                            
                        </li>
                        
                        <li><a href="/contact">Liên Hệ</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <!-- Mobile Menu Ending Here -->


    <!-- desktop menu start here -->
    <header id="cart" class="header-section">
        <div class="header-area">
            <div class="header-top">
                <div class="container">
                    <div class="top">
                        <ul class="left">
                            <li>
                                <i class="far fa-clock"></i>
                                Mở cửa các ngày trong tuần 
                            </li>
                            <li>
                                <i class="fas fa-map-marker-alt"></i>
                                Ba Đình - Hà Nội
                            </li>
                            <li>
                                <i class="fas fa-headset"></i>
                                Support@fastfood.com
                            </li>
                        </ul>
                        <ul class="right">
                            <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                            <li><a href="#"><i class="fab fa-vimeo-v"></i></a></li>
                            <li><a href="#"><i class="fas fa-futbol"></i></a></li>
                            <li><a href="#"><i class="fab fa-behance"></i></a></li>
                            <li><a href="#"><i class="fas fa-wifi"></i></a></li>
                            <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <div class="container">
                    <div class="primary-menu">
                        <div class="logo">
                            <a href="/"><img src="../../assets/img/logo.png" alt="logo" class="img-logo"></a>
                        </div>
                        <div class="main-area">
                            <div class="main-menu">
                                <ul>
                                    <li class="active"><a href="/">Trang Chủ</a></li>
                                    <li><a href="about.html">Thông Tin</a>
                                        
                                    </li>
                                    <li><a href="/product">Sản Phẩm</a>
                                        
                                    </li>   
                                    <li><a href="reserv.html">Đặt Bàn</a></li>
                                    <li><a href="blog-2.html">Tin Tức</a>
                                        
                                    </li>
                                    
                                    <li><a href="contact-us.html">Liên Hệ</a></li>
                                </ul>
                            </div>
                            <div class="cart-search">
                                <ul>
                                    <li class="mt-3">${localStorage.getItem("user") ? `<a href="/admin/dashbroad">${JSON.parse(localStorage.getItem("user")).username}</a>` : '<a href="/signin">Đăng Nhập</a>'}</li>
                                    
                                    <li class="" >
                                        <svg id='logout' xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </li>
                                    <li class="search"><i class="icofont-search-2"></i></li>
                                    <li  class="cart-area">
                                        <div class="cart-icon">
                                            <i class="icofont-cart-alt"></i>
                                        </div>
                                        <div class="count-item">${localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0}</div>
                                        <div class="cart-content">
                                            <div class="cart-title">
                                                <div class="add-item">${localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")).length : 0} Sản Phẩm</div>
                                                <div class="list-close">Đóng</div>
                                            </div>
                                            <div class="cart-scr scrollbar">
                                                <div class="cart-con-item">
                                                    ${cart.length > 0 ? cart.map(item => /*html*/`
                                                        <div class="cart-item">
                                                            <div class="cart-inner">
                                                                <div class="cart-top">
                                                                    <div class="thumb">
                                                                        <a href="/products/${item.id}"><img src="${item.image}" alt=""></a>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="/products/${item.id}">${item.name}</a>
                                                                        <a class="block text-center text-gray-500 " href="/categoryProducts/${item.categoryProduct.id}">${item.categoryProduct.name}</a>
                                                                    </div>
                                                                    <div class="remove-btn">
                                                                        
                                                                        <button data-id="${item.id}" class="btn btn-remove"><i class="icofont-close"></i></button>
                                                                    </div>
                                                                </div>
                                                                <div class="cart-bottom">
                                                                    <div class="sing-price">${item.price} VNĐ</div>
                                                                    <div class="cart-plus-minus">
                                                                            <div class="dec qtybutton">
                                                                                <button data-id="${item.id}" class="btn btn-decrease">-</button>
                                                                            </div>
                                                                            
                                                                            <input class="cart-plus-minus-box" type="text" name="qtybutton" value="${item.quantity}">
                                                                            
                                                                            <div class="inc qtybutton">
                                                                                <button data-id="${item.id}" class="btn btn-increase">+</button>
                                                                            </div>
                                                                    
                                                                    </div>
                                                                    <div class="total-price">${item.price * item.quantity } VNĐ</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    
                                                    
                                                    
                                                    `).join("") : `
                                                        <tr class="flex justify-center">
                                                            <td class="text-center" colspan="4">Không Có Sản Phẩm Nào!</td>
                                                        </tr>
                                                    `}
                                                    
                                                    
                                                    
                                                    
                                                </div>
                                            </div>
                                            <div class="cart-scr-bottom">
                                                <ul>
                                                    <li>
                                                        <div class="title">Tổng Cộng</div>
                                                        <div class="price">${totalProduct}</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">Shipping</div>
                                                        <div class="price">${3000}</div>
                                                    </li>
                                                    <li>
                                                        <div class="title">Tổng Giỏ Hàng</div>
                                                        <div class="price">${totalProduct + 3000}</div>
                                                    </li>
                                                </ul>
                                                <a href="/cart" class="food-btn"><span>Thanh Toán</span></a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- desktop menu ending here -->

    <!-- ----------------------------HEADER------------------------------- -->
        
        </div>
        ${Cart.render()}
        `
    },
    afterRender() {
        // const account = document.querySelector("#account");
        // const divLogout = document.querySelector("#div-logout");

        // if(localStorage.getItem("user")){
        //     account.innerHTML= JSON.parse(localStorage.getItem("user")).username;
        //     account.href = "/profile";
        //     const btnLogout = document.querySelector("#logout");
        //     btnLogout.addEventListener('click', function(){
        //         localStorage.removeItem('user');
        //         reRender(HeaderPage , "#header")
        //     })

        // }

        // var CartPlusMinus = $('.cart-plus-minus');
        // CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
        // CartPlusMinus.append('<div class="inc qtybutton">+</div>');
        // $(".qtybutton").on("click", function () {
        //     var $button = $(this);
        //     var oldValue = $button.parent().find("input").val();
        //     if ($button.text() === "+") {
        //         var newVal = parseFloat(oldValue) + 1;
        //     } else {
        //         // Don't allow decrementing below zero
        //         if (oldValue > 0) {
        //             var newVal = parseFloat(oldValue) - 1;
        //         } else {
        //             newVal = 1;
        //         }
        //     }
        //     $button.parent().find("input").val(newVal);
        // });

        document.querySelectorAll(".btn").forEach(btn => {
            const id = btn.dataset.id;
            btn.addEventListener('click', function(){
                console.log(id);
                if(btn.classList.contains('btn-increase')){
                    increaseQty(id, () => reRender(HeaderPage, "#cart"));
                } else if(btn.classList.contains('btn-decrease')){
                    decreaseQty(id, () => reRender(HeaderPage, "#cart"));
                } else {
                    removeItemInCart(id, () => {
                        reRender(HeaderPage, "#cart");
                        toastr.success("Bạn đã xóa thành công")
                    })
                }
            })
        }) 

        const btnLogout = document.querySelector("#logout");
        btnLogout.addEventListener('click', function () {
            localStorage.removeItem('user');
            reRender(HeaderPage, "#header")
        })







    }



}




export default HeaderPage;