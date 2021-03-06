

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
                            <h3>M???c ti??u c???a ch??ng t??i!</h3>
                        </div>
                        <div class="section-wrapper">
                            <p class="about-text">V???i m???c ti??u x??y d???ng v?? ph??t tri???n m???t th????ng hi???u Fast Food ch???t l?????ng, uy t??n, ?????m b???o, cho Qu?? kh??ch h??ng, Qu?? ?????i t??c,
                                ng?????i ti??u d??ng l?? ti??u ch?? th??nh c??ng c???a ch??ng t??i ???? v?? ??ang
                                t???ng b?????c kh???ng ?????nh th????ng hi???u c???a m??nh ?????i v???i ng?????i ti??u
                                d??ng Vi???t.
                            </p>
                            <p class="about-text">Trong th???i gian t???i, ch??ng t??i cam k???t s??? ti???p t???c n??ng cao ch???t l?????ng d???ch v??? v?? s???n ph???m c??c v??n s??n nh???a cao c???p ????? ????p ???ng y??u c???u ng??y c??ng cao c???a Qu?? kh??ch h??ng v?? Qu?? ?????i t??c. Ch??ng t??i mong mu???n ti???p t???c nh???n ???????c s??? quan t??m, ???ng h??? nhi???t t??nh v?? t??ch c???c c???a Qu?? kh??ch h??ng, Qu?? ?????i t??c ????? c?? th??? c??ng nhau ph??t tri???n b???n l??u v?? v???ng m???nh</p>
                            <p class="about-text">From founder c???a Fast Food !</p>
                            <a href="#" class="food-btn style-2"><span>?????t Ngay</span></a>
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
            <span style="color:#FBE202" >?????t B??n Ngay!</span>
            <h2>?????t ch??? Ch???n b??n c???a b???n</h2>
            
            
        </div>
        <div class="section-wrapper">
            <div class="row justify-content-center align-items-center">
                <div class="col-lg-6 col-12">
                    <div class="bg-table"></div>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="contact-form">
                        <form action="/">
                            <input type="text" name="name" placeholder="H??? v?? T??n...">
                            <input type="email" name="email" placeholder="Email c???a ban...">
                            <input type="text" name="number" placeholder="S??? ??i???n tho???i...">
                            <div class="res-tab time-zone">
                                <select>
                                    <option value="1">Gi???</option>
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
                                    <option value="1">K??ch c?? B??n</option>
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
                            <textarea name="message" rows="6" placeholder="Ghi ch??..."></textarea>
                            <button type="submit" class="food-btn style-2"><span>?????t B??n</span></button>
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
            <span>?????u b???p c???a ch??ng t??i!</span>
            <h2>G???p g??? ?????u b???p c???a ch??ng t??i</h2>
            
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
                                                    <span>Theo d??i</span>
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
                                                    <span>Theo d??i</span>
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
                                            <a href="homechef-single.html"><h5 class="member-name">????? Mixi</h5></a>
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
                                                    <span>Theo d??i</span>
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
                                            <a href="homechef-single.html"><h5 class="member-name">S??n T??ng MTP</h5></a>
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
            <span>C??c ????nh gi?? v??? ch??ng t??i!</span>
            <h2>M???i ng?????i n??i g?? v??? ch??ng t??i</h2>
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
