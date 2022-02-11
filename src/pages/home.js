import News from "../component/news";
import HeaderPage from "../component/header";
import FooterPage from "../component/footer";
import Cart from "../component/cart";

const HomePage = {
    async render(){
        return /*html*/`
        <div id="header">
            ${HeaderPage.render()}
        </div>

        <div class="banner mt-4">
            <img src="/img/banner lab1.png" alt="" class="w-full">
        </div>

        <div class="content">
            <div class="content1">
              ${await News.render()}
            </div>

            

        </div>
        
        ${FooterPage.render()}
        
        `;
    },
    afterRender(){
        Cart.afterRender()
        HeaderPage.afterRender()
    }

}
export default HomePage;