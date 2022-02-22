import AdminHeader from "../../../component/admin-header";
import { get, update } from "../../../api/carts";
import { getAllProductCate } from "../../../api/product"
import { reRender } from "../../../../utils/reRender"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const AdminDetailCarts = {
    async render(id) {
        const { data } = await get(id);
        const data2 =   await getAllProductCate();
        let total = 0
        let shipping = 30000
        console.log(data);
        console.log(data2.data);
        const dataMain =[]
        data.productId.map((arr)=>{
            data2.data.map((product)=>{
               if( arr.id ==  product.id ){
                dataMain.push({ ...product, quantity: arr.quantity })
               }
            })
        })
        console.log(dataMain);
        dataMain.map((productCart)=>{
            total += productCart.price * productCart.quantity
        })
        let totalCart = total + (total * 0.05) + shipping
        if (data.couponId !== 0) {
            totalCart = (total + (total * 0.05) + shipping) * (data.coupon.sale / 100)
        }
        console.log(total);
        console.log(totalCart);

        return /*html*/`
            

            <div class="hold-transition dark-mode sidebar-mini layout-fixed layout-navbar-fixed layout-footer-fixed">

    
            <div class="wrapper">
            
      
  
      ${AdminHeader.render()}
  
      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
          <div class="container-fluid">
            <div class="row mb-2">
              <div class="col-sm-6">
                <h1 class="m-0">Quản Trị</h1>
              </div><!-- /.col -->
              <div class="col-sm-6">
                <ol class="breadcrumb float-sm-right">
                  <li class="breadcrumb-item"><a href="#">Trang Chủ</a></li>
                  <li class="breadcrumb-item active">Quản trị Đơn Hàng</li>
                </ol>
              </div><!-- /.col -->
            </div><!-- /.row -->
          </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->
  
        <!-- Main content -->
        <section class="content">
  
          <div class="container-fluid">
            <!-- Info boxes -->
            <div class="row">
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box">
                  <span class="info-box-icon bg-info elevation-1"><i class="fab fa-product-hunt"></i></span>
  
                  <div class="info-box-content">
                    <span class="info-box-text">Sản Phẩm</span>
                    <span class="info-box-number">
                      18
  
                    </span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-list"></i></span>
  
                  <div class="info-box-content">
                    <span class="info-box-text">Danh Mục</span>
                    6
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
  
              <!-- fix for small devices only -->
              <div class="clearfix hidden-md-up"></div>
  
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-success elevation-1"><i class="fas fa-comments"></i></span>
  
                  <div class="info-box-content">
                    <span class="info-box-text">Bình Luận</span>
                    <span class="info-box-number">99</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
              <div class="col-12 col-sm-6 col-md-3">
                <div class="info-box mb-3">
                  <span class="info-box-icon bg-warning elevation-1"><i class="far fa-newspaper"></i></span>
  
                  <div class="info-box-content">
                    <span class="info-box-text">Tin Tức</span>
                    <span class="info-box-number">20</span>
                  </div>
                  <!-- /.info-box-content -->
                </div>
                <!-- /.info-box -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
  
          <!-- Content Header (Page header) -->
  
  
  
          <!-- Main content -->
          <section class="content">
            <div class="container-fluid">
  
              <div class="row">
                <div class="col-12">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Quản Trị Đơn Hàng</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                      
                      <table id="example2" class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Ảnh</th>
                            <th>Tên</th>
                            <th>Danh Mục</th>
                            <th>Trạng thái</th>
                            <th>Mã</th>
                            <th>Giá</th>
                            <th>Số Lượng</th>
                            <th>Tổng</th>
                            
                          </tr>
                        </thead>
                        <tbody>
  
                            ${dataMain.map((cart) =>/*html*/`
                                <tr>
                                    <th>${cart.id}</th>
                                    <th><img src="${cart.image}" alt="" width="100" height="100"></th>
                                    <th>${cart.name}</th>
                                    <th>${cart.categoryProduct.name}</th>
                                    <th>${cart.status == 1 ? "Còn Hàng" : "Hết Hàng"}</th>
                                    <th>${cart.code}</th>
                                    <th>${cart.price} VNĐ</th>
                                    <th>${cart.quantity}</th>
                                    <th>${cart.price * cart.quantity } VNĐ</th>
                                
                                

                                </tr>
                            
                            `).join("")}
                                
  
                          
  
  
                        </tbody>
                        <tfoot>
                            <tr>
                               
                                <td colspan="9">
                                    <span class="block">Tổng Sản Phẩm: ${total} VNĐ</span>
                                    <span class="block">Thuế: ${total * 0.05} VNĐ</span>
                                    <span class="block">Shipping: ${shipping} VNĐ</span>
                                    ${data.couponId !== 0 ? /*html*/` <span class="block">Coupon Giảm Giá: ${data.coupon.sale}%</span>` : ""}
                                    <span class="block">Tổng: ${totalCart} VNĐ</span>
                                </td>
                            </tr>
                        </tfoot>
  
                      </table>
                    </div>
                    <!-- /.card-body -->
                  </div>
                  <!-- /.card -->
  
  
                  <!-- /.card -->
                </div>
                <!-- /.col -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /.container-fluid -->
          </section>
          <!-- /.content -->
        </section>
        <!-- /.content -->
      </div>
      <!-- /.content-wrapper -->
  
      <!-- Control Sidebar -->
      <aside class="control-sidebar control-sidebar-dark">
        <!-- Control sidebar content goes here -->
      </aside>
      <!-- /.control-sidebar -->
  
      <!-- Main Footer -->
      <footer class="main-footer">
        <strong>Copyright &copy; 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong>
        All rights reserved.
        <div class="float-right d-none d-sm-inline-block">
          <b>Version</b> 3.1.0
        </div>
      </footer>
    </div>
  </div>
        `;

    },
    async afterRender() {
        AdminHeader.afterRender()
        // const { data } = await getAll();
        // console.log(data);


        // const btns = document.querySelectorAll(".btn-delete");
        // const btns_permisson_up = document.querySelectorAll(".btn-permission-up");
        // const btns_permisson_down = document.querySelectorAll(".btn-permission-down");

        // btns.forEach((buttonElement) => {
        //     const id = buttonElement.dataset.id;
        //     buttonElement.addEventListener("click", () => {
        //         const confirm = window.confirm("Bạn có muốn xóa hay không?");
        //         if (confirm) {
        //             remove(id)
        //                 .then(() => toastr.success('Bạn đã xóa thành công'))
        //                 .then(() => { reRender(AdminDetailCarts, "#content") })

        //         }

        //     });
        // });

        // btns_permisson_up.forEach((buttonElement) => {
        //     const id = buttonElement.dataset.id;


        //     buttonElement.addEventListener("click", () => {
        //         const data10 = data.filter((user) => user.id == id)
        //         console.log(data10);

        //         console.log(id);
        //         const confirm = window.confirm("Bạn có muốn xác nhận Đơn Hàng hay không?");
        //         if (confirm) {
        //             update({
        //                 id,
        //                 productId: data10[0].productId,
        //                 total: data10[0].total,
        //                 name: data10[0].name,
        //                 email: data10[0].email,
        //                 phone: data10[0].phone,
        //                 address: data10[0].address,
        //                 status: 1,
        //             })
        //                 .then(() => toastr.success('Bạn đã xác nhận Đơn Hàng thành công'))
        //                 .then(() => { reRender(AdminDetailCarts, "#content") })

        //         }

        //     });
        // });

        // btns_permisson_down.forEach((buttonElement) => {
        //     const id = buttonElement.dataset.id;


        //     buttonElement.addEventListener("click", () => {
        //         const data10 = data.filter((user) => user.id == id)
        //         console.log(data10);

        //         console.log(id);
        //         const confirm = window.confirm("Bạn có muốn Hủy xác nhận Đơn Hàng hay không?");
        //         if (confirm) {
        //             update({
        //                 id,
        //                 productId: data10[0].productId,
        //                 total: data10[0].total,
        //                 name: data10[0].name,
        //                 email: data10[0].email,
        //                 phone: data10[0].phone,
        //                 address: data10[0].address,
        //                 status: 0,
        //             })
        //                 .then(() => toastr.success('Bạn đã Hủy xác nhận Đơn Hàng thành công'))
        //                 .then(() => { reRender(AdminDetailCarts, "#content") })

        //         }

        //     });
        // });
    }


}

export default AdminDetailCarts;