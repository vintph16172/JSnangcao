import Cart from "./cart";
import { reRender } from "../../utils/reRender"
const HeaderPage = {
    render() {

        return /*html*/`
        
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
					<a href="index.html"><img src="./assets/img/logo.png" alt="logo"></a>
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
                            <li class="active"><a href="index.html">Trang Chủ</a></li>
                            <li><a href="about.html">Thông Tin</a>
                                
                            </li>
                            <li><a href="shop-page.html">Sản Phẩm</a>
                                
                            </li>   
                            <li><a href="reserv.html">Đặt Bàn</a></li>
                            <li><a href="blog-2.html">Tin Tức</a>
                                
                            </li>
                            
                            <li><a href="contact-us.html">Liên Hệ</a></li>
                        </ul>
					</div>
				</div>
			</nav>
		</div>
		<!-- Mobile Menu Ending Here -->


		<!-- desktop menu start here -->
		<header class="header-section">
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
                                <a href="index.html"><img src="./assets/img/logo.png" alt="logo" class="img-logo"></a>
                            </div>
                            <div class="main-area">
                                <div class="main-menu">
                                    <ul>
                                        <li class="active"><a href="index.html">Trang Chủ</a></li>
                                        <li><a href="about.html">Thông Tin</a>
                                            
                                        </li>
                                        <li><a href="shop-page.html">Sản Phẩm</a>
                                            
                                        </li>   
                                        <li><a href="reserv.html">Đặt Bàn</a></li>
                                        <li><a href="blog-2.html">Tin Tức</a>
                                            
                                        </li>
                                        
                                        <li><a href="contact-us.html">Liên Hệ</a></li>
                                    </ul>
                                </div>
                                <div class="cart-search">
                                    <ul>
                                        <li class="search"><i class="icofont-search-2"></i></li>
                                        <li class="cart-area">
                                            <div class="cart-icon">
                                                <i class="icofont-cart-alt"></i>
                                            </div>
                                            <div class="count-item">04</div>
                                            <div class="cart-content">
                                                <div class="cart-title">
                                                    <div class="add-item">4 Sản Phẩm</div>
                                                    <div class="list-close"><a href="#">Đóng</a></div>
                                                </div>
                                                <div class="cart-scr scrollbar">
                                                    <div class="cart-con-item">
                                                        <div class="cart-item">
                                                            <div class="cart-inner">
                                                                <div class="cart-top">
                                                                    <div class="thumb">
                                                                        <a href="#"><img src="assets/images/product/01.jpg" alt=""></a>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="#">Split Remedy Split End Shampoo</a>
                                                                    </div>
                                                                    <div class="remove-btn">
                                                                        <a href="#"><i class="icofont-close"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="cart-bottom">
                                                                    <div class="sing-price">Tk. 140</div>
                                                                    <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                        <div class="dec qtybutton">-</div>
                                                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1">
                                                                        <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                    <div class="total-price">Tk. 280.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="cart-item">
                                                            <div class="cart-inner">
                                                                <div class="cart-top">
                                                                    <div class="thumb">
                                                                        <a href="#"><img src="assets/images/product/02.jpg" alt=""></a>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="#">Split Remedy Split End Shampoo</a>
                                                                    </div>
                                                                    <div class="remove-btn">
                                                                        <a href="#"><i class="icofont-close"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="cart-bottom">
                                                                    <div class="sing-price">Tk. 140</div>
                                                                    <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                        <div class="dec qtybutton">-</div>
                                                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1">
                                                                        <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                    <div class="total-price">Tk. 280.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="cart-item">
                                                            <div class="cart-inner">
                                                                <div class="cart-top">
                                                                    <div class="thumb">
                                                                        <a href="#"><img src="assets/images/product/03.jpg" alt=""></a>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="#">Split Remedy Split End Shampoo</a>
                                                                    </div>
                                                                    <div class="remove-btn">
                                                                        <a href="#"><i class="icofont-close"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="cart-bottom">
                                                                    <div class="sing-price">Tk. 140</div>
                                                                    <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                        <div class="dec qtybutton">-</div>
                                                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1">
                                                                        <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                    <div class="total-price">Tk. 280.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="cart-item">
                                                            <div class="cart-inner">
                                                                <div class="cart-top">
                                                                    <div class="thumb">
                                                                        <a href="#"><img src="assets/images/product/04.jpg" alt=""></a>
                                                                    </div>
                                                                    <div class="content">
                                                                        <a href="#">Split Remedy Split End Shampoo</a>
                                                                    </div>
                                                                    <div class="remove-btn">
                                                                        <a href="#"><i class="icofont-close"></i></a>
                                                                    </div>
                                                                </div>
                                                                <div class="cart-bottom">
                                                                    <div class="sing-price">Tk. 140</div>
                                                                    <div class="cart-plus-minus"><div class="dec qtybutton">-</div>
                                                                        <div class="dec qtybutton">-</div>
                                                                        <input class="cart-plus-minus-box" type="text" name="qtybutton" value="1">
                                                                        <div class="inc qtybutton">+</div>
                                                                    <div class="inc qtybutton">+</div></div>
                                                                    <div class="total-price">Tk. 280.00</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="cart-scr-bottom">
                                                    <ul>
                                                        <li>
                                                            <div class="title">Tổng Cộng</div>
                                                            <div class="price">Tk. 1045.00</div>
                                                        </li>
                                                        <li>
                                                            <div class="title">Shipping</div>
                                                            <div class="price">Tk. 40.00</div>
                                                        </li>
                                                        <li>
                                                            <div class="title">Tổng Giỏ Hàng</div>
                                                            <div class="price">Tk. 1085.00</div>
                                                        </li>
                                                    </ul>
                                                    <a href="./cart-page.html" class="food-btn"><span>Thanh Toán</span></a>
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
        var CartPlusMinus = $('.cart-plus-minus');
        CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
        CartPlusMinus.append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                // Don't allow decrementing below zero
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });







    }



}




export default HeaderPage;