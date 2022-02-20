import Navigo from "navigo";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import ProductPage from "./pages/product";
import DetailNewsPage from "./pages/detailNews";
import SignUpPage from "./pages/signup";
import SignInPage from "./pages/signin";
import ProfilePage from "./pages/profile"
import DetailProductPage from "./pages/detailProduct"
import CategoryPage from "./pages/category"
import ContactPage from "./pages/contact"
import ReservPage from "./pages/reserv"
import NewsPage from "./pages/news"
import ProductSortPage from "./pages/product-sort";

// -----FRONT-END-------
import AdminPage from "./pages/admin/admin-dashbroad";
import AdminNews from "./pages/admin/news/admin-news";
import AdminNewsAdd from "./pages/admin/news/admin-news-add";
import AdminNewsEdit from "./pages/admin/news/admin-news-edit";
import AdminUsers from "./pages/admin/users/admin-users"
import AdminUsersEdit from "./pages/admin/users/admin-users-edit"

import AdminProducts from "./pages/admin/products/admin-products";
import AdminProductsAdd from "./pages/admin/products/admin-news-add";
import AdminProductsEdit from "./pages/admin/products/admin-product-edit"

import AdminCategoryProducts from "./pages/admin/categoryProducts/admin-categoryProducts";
import AdminCategoryProductsEdit from "./pages/admin/categoryProducts/admin-categoryProducts-edit";
import AdminCategoryProductsAdd from "./pages/admin/categoryProducts/admin-categoryProducts-add";
// -----BACK-END-------

// **********************PAGE********************



const router = new Navigo("/" , {linksSelector: "a"});

const print = async (content, id = "") => {
    document.getElementById("content").innerHTML = await content.render(id);
    if(content.afterRender) content.afterRender(id);
};

router.on("/admin/*", () => {}, {
    before(done, match) {
      // do something
        if(localStorage.getItem('user')){
            const userId = JSON.parse(localStorage.getItem('user')).id;
            
            if(userId === 1){
                done();     
            } else {
                document.location.href="/";
            }
        } else{
          document.location.href="/";
        }
      
    }
})


router.on({
    "/": () => {
        print(HomePage);
        
    },
    "/about": () => {
        print(AboutPage);
        
    },
    "/product": () => {
        print(ProductPage);
        
    },
    "/product/sort/:min&:max": (value) => {
        console.log(value.data);
        
        print(ProductSortPage,value.data);
        
    },
    // "/products/:category": (value) =>{
    //     console.log(value.data.category);
    //     print(CategoryPage,value.data.category);
        
    // },
    "/categoryProducts/:id": (value) =>{
        console.log(value.data.id);
        print(CategoryPage,value.data.id);
        
    },
    "/products/detail/:id": (value) =>{
        console.log(value.data.id);
        console.log(value);
        print(DetailProductPage,value.data.id);
        
    },
    "/news": () => {
        print(NewsPage);
        
    },
    "/news/:id": (value) =>{
        console.log(value.data.id);
        print(DetailNewsPage,value.data.id);
        
    },
    
    "/signup": () => {
        print(SignUpPage);
        
    },
    "/signin": () => {
        print(SignInPage);
        
    },
    "/reserv": () => {
        print(ReservPage);
        
    },
    "/profile": () => {
        print(ProfilePage);
        
    },
    "/contact": () => {
        print(ContactPage);
        
    },
    "/admin/dashbroad": () => {
        print(AdminPage);
    },
    "/admin/categoryProducts": () => {
        print(AdminCategoryProducts);
    },
    "/admin/categoryProducts/add": () => {
        print(AdminCategoryProductsAdd);
    },
    "/admin/categoryProducts/:id/edit": (value) => {
        
        print(AdminCategoryProductsEdit,value.data.id);
    },
    "/admin/products": () => {
        print(AdminProducts);
    },
    "/admin/products/add": () => {
        print(AdminProductsAdd);
    },
    "/admin/products/:id/edit": (value) => {
        
        print(AdminProductsEdit,value.data.id);
    },
    "/admin/news": () => {
        print(AdminNews);
    },
    "/admin/news/add": () => {
        print(AdminNewsAdd);
    },
    "/admin/news/:id/edit": (value) => {
        
        print(AdminNewsEdit,value.data.id);
    },
    "/admin/users": () => {
        print(AdminUsers);
    },
    "/admin/users/:id/edit": (value) => {
        print(AdminUsersEdit,value.data.id);
    },

    
})
router.notFound( () => {print("Not Found Page")} );
router.resolve();