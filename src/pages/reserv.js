

import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";

const ReservPage = {
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
                    <h3 class="text-4xl" style="color:#FBE202">Đặt Bàn</h3>
                    <ul class="breadcrumb">
                        <li><a href="/" >Trang chủ</a></li>
                        <li >Đặt Bàn</li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- Booking Table Section Start Here -->
        <section class="booking-table padding-tb">
            <div class="container">
                <div class="section-header">
                    <img src="./assets/img/logo.png" alt="sc-img" class="header-img">
                    <span style="color:#FBE202" >Đặt Bàn Ngay!</span>
                    <h2 class="text-5xl font-bold ">Đặt chỗ Chọn bàn của bạn</h2>
                    
                    
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




        <!-- ------------------------------------MAIN------------------- -->
        
        ${FooterPage.render()}
        
        `;
    },
    afterRender() {
        Cart.afterRender()
        HeaderPage.afterRender()
    }

}
export default ReservPage;
