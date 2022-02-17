
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";

const NewsPage = {
    async render(){
        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        <!-- Page Header Section Start Here -->
        <section class="page-header style-2">
            <div class="container">
                <div class="page-title text-center">
                    <h3 class="text-4xl" style="color:#FBE202">Tin Tức</h3>
                    <ul class="breadcrumb">
                        <li><a href="/" >Trang chủ</a></li>
                        <li >Tin Tức</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Page Header Section Ending Here -->

        <!-- ----------------------------HEADER------------------------------- -->
       

        <!-- Blog Page Section Start Here -->
        <div class="blog-section blog-page padding-tb">
            <div class="container">
                <div class="section-wrapper">
                    <div class="row justify-content-center">
                        <div class="col-lg-8 col-12">
                            <article>
                                <div class="row justify-content-center">
                                    <div class="col-sm-6 col-12">
                                        <div class="post-item">
                                            <div class="post-item-inner">
                                                <div class="post-thumb">
                                                    <a href="blog-single.html"><img src="./assets/img/blog-news1.png" alt="lab-blog"></a>
                                                </div>
                                                <div class="post-content">
                                                    <h5><a href="blog-single.html">Top 10 món ăn đơn giản mà ngon cho gia đình...</a></h5>
                                                    <div class="author-date">
                                                        <a href="#" class="date"><i class="icofont-calendar"></i> 18-01-2022</a>
                                                        <a href="#" class="admin"><i class="icofont-ui-user"></i>vintph16172</a>
                                                    </div>
                                                    <p>Top 10 món ăn đơn giản mà ngon cho gia đình. Top 10 món ăn đơn giản mà ngon cho gia đình...</p>
                                                    <div class="post-footer">
                                                        <a href="blog-single.html" class="text-btn">Đọc Ngay<i class="icofont-double-right"></i></a>
                                                        <a href="#" class="comments"><i class="icofont-comment"></i><span>2</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
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
                            </article>
                        </div>
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
                                        <h5>Thể Loại</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Đồ Ăn</span><span>06</span></a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Sức Khỏe</span><span>11</span></a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Đời Sống</span><span>07</span></a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Dinh Dưỡng</span><span>09</span></a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Thực Đơn</span><span>50</span></a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Khuyến Mãi</span><span>20</span></a>
                                        </li>
                                        <li>
                                            <a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Sự Kiện</span><span>93</span></a>
                                        </li>
                                        
                                    </ul>
                                </div>
            
                                <div class="widget widget-post">
                                    <div class="widget-header">
                                        <h5>Bài Viết Nổi Bật</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        <li class="d-flex flex-wrap justify-content-between">
                                            <div class="post-thumb">
                                                <a href="#"><img src="./assets/img/blog-news1.png" alt="product"></a>
                                            </div>
                                            <div class="post-content">
                                                <h6><a href="#">Top 10 món ăn đơn giản mà ngon cho gia đình</a></h6>
                                                <p>18-01-2022</p>
                                            </div>
                                        </li>
                                        <li class="d-flex flex-wrap justify-content-between">
                                            <div class="post-thumb">
                                                <a href="#"><img src="./assets/img/blog-news2.png" alt="product"></a>
                                            </div>
                                            <div class="post-content">
                                                <h6><a href="#">Top 10 món ăn đơn giản mà ngon cho gia đình</a></h6>
                                                <p>18-01-2022</p>
                                            </div>
                                        </li>
                                        <li class="d-flex flex-wrap justify-content-between">
                                            <div class="post-thumb">
                                                <a href="#"><img src="./assets/img/blog-news3.png" alt="product"></a>
                                            </div>
                                            <div class="post-content">
                                                <h6><a href="#">Top 10 món ăn đơn giản mà ngon cho gia đình</a></h6>
                                                <p>18-01-2022</p>
                                            </div>
                                        </li>
                                        <li class="d-flex flex-wrap justify-content-between">
                                            <div class="post-thumb">
                                                <a href="#"><img src="./assets/img/blog-news1.png" alt="product"></a>
                                            </div>
                                            <div class="post-content">
                                                <h6><a href="#">Top 10 món ăn đơn giản mà ngon cho gia đình</a></h6>
                                                <p>18-01-2022</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
            
                                <div class="widget widget-archive">
                                    <div class="widget-header">
                                        <h5>Thành Tựu FastFood</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 1</span><span>2022</span></a> </li>
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 2</span><span>2022</span></a></li>
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 3</span><span>2022</span></a></li>
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 4</span><span>2022</span></a></li>
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 5</span><span>2022</span></a></li>
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 6</span><span>2022</span></a></li>
                                        <li><a href="#" class="d-flex flex-wrap justify-content-between"><span><i class="icofont-double-right"></i>Tháng 7</span><span>2022</span></a></li>
                                    </ul>
                                </div>

                                <div class="widget widget-instagram">
                                    <div class="widget-header">
                                        <h5>FastFood instagram</h5>
                                    </div>
                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                        <li><a href="#"><img src="./assets/img/menu12.png" alt="product"></a></li>
                                    </ul>
                                </div>

                                <div class="widget widget-tags">
                                    <div class="widget-header">
                                        <h5>Tags Phổ Biến</h5>
                                    </div>
                                    <ul class="widget-wrapper">
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                        <li><a href="#">FastFood</a></li>
                                    </ul>
                                </div>

                                <div class="widget widget-banner">
                                    <div class="widget-header">
                                        <h5>Banner Quảng Cáo</h5>
                                    </div>
                                    <ul class="widget-wrapper d-flex flex-wrap justify-content-center">
                                        <li><a href="#"><img src="./assets/img/main-content-thongtin4.png" alt="product"></a></li>
                                    </ul>
                                </div>
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Blog Page Section Ending Here -->

        <!-- ------------------------------------MAIN------------------- -->
        

        
        ${FooterPage.render()}
        
        `;
    },
    afterRender(){
        Cart.afterRender()
        HeaderPage.afterRender()
    }

}
export default NewsPage;