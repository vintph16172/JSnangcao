

import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";

const ContactPage = {
    async render() {
        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        

        <div class="content">
        <!-- Page Header Section Start Here -->
        <section class="page-header style-2">
            <div class="container">
                <div class="page-title text-center">
                    <h3 class="text-4xl" style="color:#FBE202">Liên Hệ</h3>
                    <ul class="breadcrumb">
                        <li><a href="/" >Trang chủ</a></li>
                        <li >Liên Hệ</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Page Header Section Ending Here -->
            <!-- Contact Us Section Start Here -->
         <section class="contact-information padding-tb pb-xl-0">
         <div class="container">
             <div class="section-wrapper">
                 <div class="row">
                     <div class="col-lg-6 col-12">
                         <h5>Thông Tin Liên Hệ</h5>
                         <div class="post-item">
                             <div class="post-content">
                                 <h6>Địa Chỉ :</h6>
                                 <p>Số 41 Ngõ 285 Đội Cấn, Ba Đình, Hà Nội</p>
                                 
                             </div>
                         </div>
                         <div class="post-item">
                             <div class="post-content">
                                 <h6>Số Điện Thoại : </h6>
                                 <p>+8801678170593, 01919-264687</p>
                                 <p>02-9611936</p>
                             </div>
                         </div>
                         <div class="post-item">
                             <div class="post-content">
                                 <h6>Email : </h6>
                                 <p>support@FastFood.com</p>
                             </div>
                         </div>
                         <div class="post-item">
                             <div class="post-content">
                                 <h6>Website :</h6>
                                 <p>http://FastFood.com</p>
                             </div>
                         </div>
                     </div>
                     <div class="col-lg-6 col-12">
                         <h5>Liên Hệ Với Chúng Tôi</h5>
                         <form class="d-flex flex-wrap justify-content-between">
                             <input type="text" placeholder="Họ và Tên...">
                             <input type="text" placeholder="Email...">
                             <input class="w-100" type="text" placeholder="Tiêu Đề...">
                             <textarea rows="8" placeholder="Nội Dung..."></textarea>
                             <button type="submit" class="food-btn style-2"><span>Gửi</span></button>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </section>
     <!-- Contact Us Section Ending Here -->


     <!-- G-Map Section Start Here -->
     <div class="gmaps-section">
         <div class="map-area">
             <!-- <iframe src="https://maps.google.com/maps?q=new%40codexcoder&t=&z=17&ie=UTF8&iwloc=&output=embed" style="border:0" allowfullscreen></iframe> -->
             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.8964603035606!2d105.81651461424549!3d21.03682849288029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab0d0b127ce1%3A0x25663c35956b1eac!2zTmcuIDI4NSDEkOG7mWkgQ-G6pW4sIExp4buFdSBHaWFpLCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1642432612727!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
         </div>
     </div>
     <!-- G-Map Section Ending Here -->

            

        </div>
        
        ${FooterPage.render()}
        
        `;
    },
    afterRender() {
        Cart.afterRender()
        HeaderPage.afterRender()
    }

}
export default ContactPage;
