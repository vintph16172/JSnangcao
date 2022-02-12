



import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import axios from "axios";
import Cart from "../component/cart";
import {  get } from "../api/product"

const DetailProductPage = {
    async render(id){
        const { data } = await get(id) ;
        console.log(data);
        return /*html*/`
        ${HeaderPage.render()}

        <!-- Page Header Section Start Here -->
        <section class="page-header style-2">
            <div class="container">
                <div class="page-title text-center">
                    <h3 style="color:#FBE202">Chi Tiết Sản Phẩm</h3>
                    <ul class="breadcrumb">
                        <li><a href="index.html" >Trang chủ</a></li>
                        <li >Chi Tiết Sản Phẩm</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Page Header Section Ending Here -->


        <!-- Popular Home Chef Section Start Here -->
		<div class="shop-page single padding-tb pb-0">
            <div class="container">
                <div class="section-wrapper">
                    <div class="row justify-content-center">
                        <div class="col-xl-8 col-12">
                            <article>
                                <div class="shop-single">
                                    <div class="row justify-content-center">
                                        <div class="col-md-6 col-12">
                                            <div class="swiper-container gallery-top">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src=".assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="swiper-container gallery-thumbs">
                                                <div class="swiper-wrapper">
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="swiper-slide">
                                                        <div class="shop-item">
                                                            <div class="shop-thumb">
                                                                <img src="./assets/img/menu1.png" alt="shop-single">
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6 col-12">
                                            <div class="shop-single-content">
                                                <div class="title">
                                                    <h5><a href="./assets/img/menu1.png">Bò Bít Tết</a></h5>
                                                    <div class="p-food-group">
                                                        <span>Danh Mục :</span>
                                                        <a href="#">Steak</a>
                                                        
                                                    </div>
                                                    <div class="rating">
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <span>(2 Customer Reviews)</span>
                                                    </div>
                                                </div>
                                                <div class="desc">
                                                    <p>Chất lượng là thành phần số 1 của chúng tôi. Một số loại pho mát ngon nhất thế giới được làm gần nhà! Tất cả Mozzarella thơm ngon của chúng tôi đều được làm bằng 100% sữa Canada. Chúng tôi tự hào hỗ trợ nông dân chăn nuôi bò sữa của Canada....</p>
                                                    <ul>
                                                        <li>Chất Lượng Đảm Bảo</li>
                                                        <li>Nguồn Nguyên Liệu Sạch, Tươi Mới</li>
                                                        <li>Sự Lựa Chọn Của Đầu Bếp</li>
                                                        
                                                        <li>Kiểm Duyệt Kỹ Lượng</li>
                                                    </ul>
                                                    <div class="quyality">
                                                        <p><span>FF</span> : FS511948218</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>
                        <div class="col-xl-4 col-md-5 col-12">
                            <aside>
                                <div class="popular-chef-widget">
                                    <div class="food-quyality">
                                        <div class="section-header">
                                            <p>Số Lượng: <span>28 trong Kho</span></p>
                                        </div>
                                        <div class="section-wrapper">
                                            <h5>$200.000 VNĐ</h5>
                                            <p>Số Lượng</p>
                                            <label>
                                                <input type="number" placeholder="1" >
                                            </label>
                                            <a href="#" class="food-btn style-2"><span>Đặt Hàng</span></a>
                                            <ul>
                                                <li><a href="#"><i class="icofont-heart-alt"></i>Wishlist</a></li>
                                                <li><a href="#"><i class="icofont-drag2"></i>So Sánh</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Popular Home Chef Section Ending Here -->
        
        <!-- Review Section Start Here -->
        <div class="review single padding-tb">
            <div class="container">
                <div class="section-wrapper">
                    <div class="related">
                        <ul class="tab-bar">
                            <li class="tablinks" id="defaultOpen" onclick="openCity(event, 'one')">
                                <span>Liên Quan</span>
                            </li>
                            <li class="tablinks" onclick="openCity(event, 'two')">
                                <span>Mô Tả</span>
                            </li>
                            <li class="tablinks" onclick="openCity(event, 'three')">
                                <span>Nguyên Liệu</span>
                            </li>
                            <li class="tablinks" onclick="openCity(event, 'four')">
                                <span>Reviews</span>
                            </li>
                        </ul>
                        <div id="one" class="tabcontent">
                            <div class="products">
                                <div class="section-wrapper">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col-xl-3 col-md-6 col-12">
                                            <div class="product-item">
                                                <a href="./detail-product.html">
                                                    <div class="product-thumb">
                                                        <img src="./assets/img/menu6.png" alt="food-product">
                                                        <span class="price">20%</span>
                                                    </div>
                                                    <div class="product-content">
                                                        <p>Gà Rán</p>
                                                        <h6>Gà Chiên Nước Mắm</h6>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-md-6 col-12">
                                            <div class="product-item">
                                                <a href="./detail-product.html">
                                                    <div class="product-thumb">
                                                        <img src="./assets/img/menu12.png" alt="food-product">
                                                        <span class="price">20%</span>
                                                    </div>
                                                    <div class="product-content">
                                                        <p>Burger</p>
                                                        <h6>Burger Hun Khói</h6>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-md-6 col-12">
                                            <div class="product-item">
                                                <a href="./detail-product.html">
                                                    <div class="product-thumb">
                                                        <img src="./assets/img/menu10.png" alt="food-product">
                                                        <span class="price">20%</span>
                                                    </div>
                                                    <div class="product-content">
                                                        <p>Pizza</p>
                                                        <h6>Pizza Cheese</h6>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="col-xl-3 col-md-6 col-12">
                                            <div class="product-item">
                                                <a href="./detail-product.html">
                                                    <div class="product-thumb">
                                                        <img src="./assets/img/menu9.png" alt="food-product">
                                                        <span class="price">20%</span>
                                                    </div>
                                                    <div class="product-content">
                                                        <p>Burger</p>
                                                        <h6>Burger Bò</h6>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                        </div>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>

                                        <!-- <div class="col-xl-3 col-md-6 col-12">
                                            <div class="p-food-item">
                                                <div class="p-food-inner">
                                                    <div class="food-quyality">
                                                        <div class="section-header">
                                                            <p>Số Lượng: <span>28 trong Kho</span></p>
                                                        </div>
                                                        <div class="section-wrapper">
                                                            <h5>200.000 VNĐ</h5>
                                                            <p>Cho Tất Cả 3 Sản Phẩm</p>
                                                            <a href="#" class="food-btn"><span>Quay Lại</span></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="two" class="tabcontent">
                            <div class="Description">
                                <h5>50 loại thực phẩm siêu tốt cho sức khỏe</h5>
                                <p>Dưới đây chúng tôi cung cấp thông tin chi tiết về 15 loại thực phẩm hàng đầu được coi là tốt cho sức khỏe nhất, theo các cuộc khảo sát và nguồn trên khắp Hoa Kỳ và Tây Âu. Có rất nhiều chế độ ăn kiêng thúc đẩy giảm cân, đôi khi theo cách không lành mạnh. Ví dụ, ăn kiêng theo mốt có khả năng nguy hiểm. Đồng thời, ở Mỹ, ước tính chúng ta ăn khoảng 100 mẫu bánh pizza mỗi ngày. Điều quan trọng nhất cần nhớ là một chế độ ăn uống cân bằng là bí quyết thực sự để ăn uống lành mạnh.</p>
                                <h5>Thông Tin</h5>
                                <p>Chất lượng là thành phần số 1 của chúng tôi. Một số loại pho mát ngon nhất thế giới được làm gần nhà! Tất cả Mozzarella thơm ngon của chúng tôi đều được làm bằng 100% sữa Canada. Chúng tôi tự hào hỗ trợ nông dân chăn nuôi bò sữa của Canada....</p>
                                
                            </div>
                        </div>

                        <div id="three" class="tabcontent">
                            <div class="spe-shop">
                                <div class="tec-spe">
                                    <ul>
                                        <li>
                                            <div class="left">Bò</div>
                                            <div class="right">200g </div>
                                            
                                        </li>
                                        <li>
                                            <div class="left">Khoai Tây</div>
                                            <div class="right">200g</div>
                                        </li>
                                        <li>
                                            <div class="left">Cà Chua</div>
                                            <div class="right">50g</div>
                                        </li>
                                        <li>
                                            <div class="left">Sốt Rượu Vang</div>
                                            <div class="right">5g</div>
                                        </li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div id="four" class="tabcontent">
                            <div class="section-wrapper">
                                <div class="review">
                                    <ul class="content">
                                        <li>
                                            <div class="post-thumb">
                                                <img src="assets/images/clients/01.jpg" alt="shop">
                                            </div>
                                            <div class="post-content">
                                                <div class="content-area">
                                                    <div class="entry-meta">
                                                        <div class="posted-on">
                                                            <a href="#">Britney Doe</a>
                                                            <p>Posted on December 25, 2017 at 6:57 am</p>
                                                        </div>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                        </div>
                                                    </div>
                                                    <div class="entry-content">
                                                        <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="post-thumb">
                                                <img src="assets/images/clients/03.jpg" alt="shop">
                                            </div>
                                            <div class="post-content">
                                                <div class="entry-meta">
                                                    <div class="posted-on">
                                                        <a href="#">Jonathan Doe</a>
                                                        <p>Posted on December 25, 2017 at 6:57 am</p>
                                                    </div>
                                                    <div class="rating">
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="post-thumb">
                                                <img src="assets/images/clients/02.jpg" alt="shop">
                                            </div>
                                            <div class="post-content">
                                                <div class="entry-meta">
                                                    <div class="posted-on">
                                                        <a href="#">Mack Zucky</a>
                                                        <p>Posted on December 25, 2017 at 6:57 am</p>
                                                    </div>
                                                    <div class="rating">
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="post-thumb">
                                                <img src="assets/images/clients/03.jpg" alt="shop">
                                            </div>
                                            <div class="post-content">
                                                <div class="entry-meta">
                                                    <div class="posted-on">
                                                        <a href="#">Jordi Albae</a>
                                                        <p>Posted on December 25, 2017 at 6:57 am</p>
                                                    </div>
                                                    <div class="rating">
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                        <i class="icofont-star"></i>
                                                    </div>
                                                </div>
                                                <div class="entry-content">
                                                    <p>Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div class="client-review">
                                        <div class="review-form">
                                            <div class="review-title">
                                                <h5>Bình Luận / Đánh Giá</h5>
                                            </div>
                                            <form action="action" class="row">
                                                <div class="col-md-4 col-12">
                                                    <input type="text" name="name" placeholder="Họ và Tên...">
                                                </div>
                                                <div class="col-md-4 col-12">
                                                    <input type="text" name="email" placeholder="Email...">
                                                </div>
                                                <div class="col-md-4 col-12">
                                                    <div class="ratings">
                                                        <span class="rating-title">Đánh Giá : </span>
                                                        <div class="rating">
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                            <i class="icofont-star"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-12">
                                                    <textarea rows="8" placeholder="Nội Dung..."></textarea>
                                                </div>
                                                <div class="col-12">
                                                    <button type="submit" class="food-btn style-2"><span>Gửi</span></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Review Section Ending Here -->


        <!-- ------------------------------------MAIN------------------- -->
        

        ${FooterPage.render()}

        `;
    },
    afterRender(){
        Cart.afterRender()
        HeaderPage.afterRender()
    }
    



}
export default DetailProductPage;