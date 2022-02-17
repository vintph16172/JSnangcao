

import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";

const AboutPage = {
    async render() {
        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        

        <div class="content">
        <!-- Page Header Section Start Here -->
        	<!-- About Section Start here -->
		<section class="about padding-tb">
        <div class="container">
            <div class="row align-items-center flex-row-reverse">
                <div class="col-lg-6 col-12">
                    
                    <div id="demo1" class="carousel slide" data-ride="carousel">

                        <!-- Indicators -->
                        <ul class="carousel-indicators">
                          <li data-target="#demo1" data-slide-to="0" class="active"></li>
                          <li data-target="#demo1" data-slide-to="1"></li>
                          <li data-target="#demo1" data-slide-to="2"></li>
                        </ul>
                      
                        <!-- The slideshow -->
                        <div class="carousel-inner">
                          <div class="carousel-item active">
                            <div class="about-thumb">
                                <img src="./assets/img/gioithieu1.png" alt="about-food" class="banner2-img">
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="about-thumb">
                                <img src="./assets/img/gioithieu2.jpg" alt="about-food" class="banner2-img">
                            </div>
                          </div>
                          <div class="carousel-item">
                            <div class="about-thumb">
                                <img src="./assets/img/gioithieu3.png" alt="about-food" class="banner2-img">
                            </div>
                          </div>
                        </div>
                      
                        <!-- Left and right controls -->
                        <a class="carousel-control-prev" href="#demo1" data-slide="prev">
                          <span class="carousel-control-prev-icon"></span>
                        </a>
                        <a class="carousel-control-next" href="#demo1" data-slide="next">
                          <span class="carousel-control-next-icon"></span>
                        </a>
                      
                      </div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="about-content">
                        <div class="section-header">
                            <span>Welcome FastFood</span>
                            <h3>Mục tiêu của chúng tôi!</h3>
                        </div>
                        <div class="section-wrapper">
                            <p class="about-text">Với mục tiêu xây dựng và phát triển một thương hiệu Fast Food chất lượng, uy tín, đảm bảo, cho Quý khách hàng, Quý đối tác,
                                người tiêu dùng là tiêu chí thành công của chúng tôi đã và đang
                                từng bước khẳng định thương hiệu của mình đối với người tiêu
                                dùng Việt.
                            </p>
                            <p class="about-text">Trong thời gian tới, chúng tôi cam kết sẽ tiếp tục nâng cao chất lượng dịch vụ và sản phẩm các ván sàn nhựa cao cấp để đáp ứng yêu cầu ngày càng cao của Quý khách hàng và Quý đối tác. Chúng tôi mong muốn tiếp tục nhận được sự quan tâm, ủng hộ nhiệt tình và tích cực của Quý khách hàng, Quý đối tác để có thể cùng nhau phát triển bền lâu và vững mạnh</p>
                            <p class="about-text">From founder của Fast Food !</p>
                            <a href="#" class="food-btn style-2"><span>Đặt Ngay</span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- About Section Ending here -->


   <!-- Booking Table Section Start Here -->
   <section class="booking-table bg_size p-rel padding-tb" style="background-image: url(assets/css/bg-image/contact-bg.jpg);">
    <div class="overlay"></div>
    <div class="container">
        <div class="section-header">
            <img src="./assets/img/logo.png" alt="sc-img" class="header-img">
            <span style="color:#FBE202" >Đặt Bàn Ngay!</span>
            <h2>Đặt chỗ Chọn bàn của bạn</h2>
            
            
        </div>
        <div class="section-wrapper">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="bg-table"></div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="contact-form">
                        <form action="/">
                            <input type="text" name="name" placeholder="Họ và Tên...">
                            <input type="email" name="email" placeholder="Email của ban...">
                            <input type="text" name="number" placeholder="Số điện thoại...">
                            <div class="res-tab time-zone">
                                <select>
                                    <option value="1">Giờ</option>
                                    <option value="2">10:00 AM</option>
                                    <option value="3">11:00 AM</option>
                                    <option value="4">12:00 AM</option>
                                    <option value="5">01:00 AM</option>
                                    <option value="6">02:00 AM</option>
                                    <option value="7">03:00 AM</option>
                                    <option value="8">04:00 AM</option>
                                    <option value="9">05:00 AM</option>
                                </select>
                            </div>
                            <div class="res-tab table-zone">
                                <select>
                                    <option value="1">Kích cõ Bàn</option>
                                    <option value="2">2N - 3N</option>
                                    <option value="3">2.5N - 3.5N</option>
                                    <option value="4">3N - 4N</option>
                                    <option value="5">3.5N - 4.5N</option>
                                    <option value="6">4N - 5N</option>
                                    <option value="7">4.5N - 5.5N</option>
                                    <option value="8">5N - 6N</option>
                                    <option value="9">5.5N - 6.5N</option>
                                </select>
                            </div>
                            <input type="date" name="time" data-provide="datepicker">
                            <textarea name="message" rows="6" placeholder="Ghi chú..."></textarea>
                            <button type="submit" class="food-btn style-2"><span>Đặt Bàn</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
<!-- Booking Table Section Ending Here -->


<!-- Team Member Section Start here -->
<div class="team-section style-2 padding-tb">
    <div class="container">
        <div class="section-header">
            
            <img src="./assets/img/logo.png" alt="sc-img" class="header-img">
            <span>Đầu bếp của chúng tôi!</span>
            <h2>Gặp gỡ đầu bếp của chúng tôi</h2>
            
        </div>
        <div class="row">
            <div class="col-12">
                <div class="team-bottom">
                    <div class="team-bottom-area">
                        <div class="row justify-content-center align-items-center">
                            <div class="col-xl-4 col-md-6 col-12">
                                <div class="team-item style-2">
                                    <div class="team-item-inner">
                                        <div class="team-thumb">
                                            <div class="t-thumb">
                                                <img src="./assets/img/review1.png" alt="team-membar" class="chef-img">
                                            </div>
                                            <div class="self-intregration">
                                                <div class="intregration-head">
                                                    <span>Theo dõi</span>
                                                </div>
                                                <div class="intregration-icon">
                                                    <ul>
                                                        <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" class="pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                                                        <li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a href="#" class="globe"><i class="fas fa-globe"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="team-content">
                                            <a href="homechef-single.html"><h5 class="member-name">Benjamin Tran</h5></a>
                                            <span class="member-dagi">Founder & CEO</span>
                                            <p class="member-details">Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin</p>
                                            <ul class="icon-style-list codex">
                                                <li><i class="icofont-phone"></i><span>+880 9234 567 890</span></li>
                                                <li><i class="icofont-envelope"></i><span>zinnatzara@gmail.com</span></li>
                                                <li>
                                                    <i class="fas fa-share-alt-square"></i>
                                                    <ul class="d-flex flex-wrap justify-content-start codex">
                                                        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a class="basketball" href="#"><i class="fas fa-basketball-ball"></i></a></li>
                                                        <li><a class="vimeo" href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                                        <li><a class="behance" href="#"><i class="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-12">
                                <div class="team-item style-2">
                                    <div class="team-item-inner">
                                        <div class="team-thumb">
                                            <div class="t-thumb">
                                                <img src="./assets/img/review2.png" alt="team-membar" class="chef-img">
                                            </div>
                                            <div class="self-intregration">
                                                <div class="intregration-head">
                                                    <span>Theo dõi</span>
                                                </div>
                                                <div class="intregration-icon">
                                                    <ul>
                                                        <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" class="pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                                                        <li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a href="#" class="globe"><i class="fas fa-globe"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="team-content">
                                            <a href="homechef-single.html"><h5 class="member-name">Độ Mixi</h5></a>
                                            <span class="member-dagi">Founder & CEO</span>
                                            <p class="member-details">Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin</p>
                                            <ul class="icon-style-list codex">
                                                <li><i class="icofont-phone"></i><span>+880 9234 567 890</span></li>
                                                <li><i class="icofont-envelope"></i><span>tomholland@gmail.com</span></li>
                                                <li>
                                                    <i class="fas fa-share-alt-square"></i>
                                                    <ul class="d-flex flex-wrap justify-content-start codex">
                                                        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a class="basketball" href="#"><i class="fas fa-basketball-ball"></i></a></li>
                                                        <li><a class="vimeo" href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                                        <li><a class="behance" href="#"><i class="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6 col-12">
                                <div class="team-item style-2">
                                    <div class="team-item-inner">
                                        <div class="team-thumb">
                                            <div class="t-thumb">
                                                <img src="./assets/img/review3.png" alt="team-membar" class="chef-img">
                                            </div>
                                            <div class="self-intregration">
                                                <div class="intregration-head">
                                                    <span>Theo dõi</span>
                                                </div>
                                                <div class="intregration-icon">
                                                    <ul>
                                                        <li><a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a></li>
                                                        <li><a href="#" class="pinterest"><i class="fab fa-pinterest-p"></i></a></li>
                                                        <li><a href="#" class="twitter"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a href="#" class="globe"><i class="fas fa-globe"></i></a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="team-content">
                                            <a href="homechef-single.html"><h5 class="member-name">Sơn Tùng MTP</h5></a>
                                            <span class="member-dagi">Founder & CEO</span>
                                            <p class="member-details">Proce Aran Manu Proucs Rahe Conen Cuve Manu Produ Rahe Cuvaes Mana The Conen Testin Motin</p>
                                            <ul class="icon-style-list codex">
                                                <li><i class="icofont-phone"></i><span>+880 9234 567 890</span></li>
                                                <li><i class="icofont-envelope"></i><span>zarinawahab@gmail.com</span></li>
                                                <li>
                                                    <i class="fas fa-share-alt-square"></i>
                                                    <ul class="d-flex flex-wrap justify-content-start codex">
                                                        <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
                                                        <li><a class="instagram" href="#"><i class="fab fa-instagram"></i></a></li>
                                                        <li><a class="basketball" href="#"><i class="fas fa-basketball-ball"></i></a></li>
                                                        <li><a class="vimeo" href="#"><i class="fab fa-vimeo-v"></i></a></li>
                                                        <li><a class="behance" href="#"><i class="fab fa-behance"></i></a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Team Member Section Ending here -->


<!-- clients area start -->
<section class="clients-area padding-tb bg_size p-rel" style="background-image: url(assets/images/clients/clients_bg.jpg);">
    <div class="overlay"></div>
    <div class="container">
        <div class="section-header text-center">
            
            <img src="./assets/img/logo.png" alt="sc-img" class="header-img">
            <span>Các đánh giá về chúng tôi!</span>
            <h2>Mọi người nói gì về chúng tôi</h2>
        </div>
        <div class="section-wrapper">
            <div class="clients-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="clients-item text-center">
                            <div class="clients-thumb">
                                <img src="./assets/img/review1.png" alt="clients-image">
                            </div>
                            <div class="clients-text">
                                <p>
                                    <span><i class="fas fa-quote-left"></i></span>
                                    Proactivel expedite cost ectve andoportunties through aeconomical are creative a souncreative theme Enthusiastical maintain creative effective anifunctionalities Conveniently are creative anarecaptiualize Conveniently are creative theme for business anarecaptiualize
                                    <span><i class="fas fa-quote-right"></i></span>
                                </p>
                                <div class="rating">
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fas fa-star-half-alt"></i></span>
                                </div>
                                <h6>Zinnat Zaara</h6>
                                <span>Senior Ui / ux Desiner</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="clients-item text-center">
                            <div class="clients-thumb">
                                <img src="./assets/img/review2.png" alt="clients-image">
                            </div>
                            <div class="clients-text">
                                
                                <p>
                                    <span><i class="fas fa-quote-left"></i></span>
                                    Proactivel expedite cost ectve andoportunties through aeconomical are creative a souncreative theme
                                    Enthusiastical maintain creative effective anifunctionalities Conveniently are creative anarecaptiualize
                                    Conveniently are creative theme for business anarecaptiualize
                                    <span><i class="fas fa-quote-right"></i></span>
                                </p>
                                <div class="rating">
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fas fa-star-half-alt"></i></span>
                                </div>
                                <h6>Mannan Khan</h6>
                                <span>Head Of Idia</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="clients-item text-center">
                            <div class="clients-thumb">
                                <img src="./assets/img/review3.png" alt="clients-image">
                            </div>
                            <div class="clients-text">
                                
                                <p>
                                    <span><i class="fas fa-quote-left"></i></span>
                                    Proactivel expedite cost ectve andoportunties through aeconomical are creative a souncreative theme
                                    Enthusiastical maintain creative effective anifunctionalities Conveniently are creative anarecaptiualize
                                    Conveniently are creative theme for business anarecaptiualize
                                    <span><i class="fas fa-quote-right"></i></span>
                                </p>
                                <div class="rating">
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fa fa-star"></i></span>
                                    <span><i class="fas fa-star-half-alt"></i></span>
                                </div>
                                <h6>Subrina Kabir</h6>
                                <span>Lead Desiner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clients-pagination"></div>
        </div>
    </div>
</section>
<!-- clients area ends -->



<!-- ------------------------------------MAIN------------------- -->
        
        ${FooterPage.render()}
        
        `;
    },
    afterRender() {
        Cart.afterRender()
        HeaderPage.afterRender()
    }

}
export default AboutPage;
