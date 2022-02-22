import AdminHeader from "../../../component/admin-header";
import {  getAll,update } from "../../../api/carts";
import { reRender } from "../../../../utils/reRender"
import toastr from 'toastr';
import "toastr/build/toastr.min.css";

const AdminCarts = {
  async render() {
    const { data } = await getAll();
    console.log(data);


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
                            <th>Tên</th>
                            <th>Email</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Tổng</th>
                            <th>Trạng thái</th>
                            <th colspan="2">Hành Động</th>
                          </tr>
                        </thead>
                        <tbody>
  
                          ${data.map((cart) =>/*html*/`
                            <tr>
                              <th>${cart.id}</th>
                              <th>${cart.name}</th>
                              <th>${cart.email}</th>
                              <th>${cart.phone}</th>
                              <th>${cart.address}</th>
                              
                              <th>${cart.total} VNĐ</th>
                              <th>${cart.status == 0 ? "Giao Hàng" : "Đã Nhận"}</th>
                              <th>
                                  <a href="/admin/carts/detail/${cart.id}" >
                                    <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#04B24A] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                
                                </a>
                              </th>
                              <th> 
                              ${cart.status == 0 ? /*html*/`
                                    <button type="button" data-id="${cart.id}" class="btn-permission-up bg-blue-600 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                                        </svg>
                                    </button>
                                    ` : /*html*/`
                                    <button type="button" data-id="${cart.id}" class="btn-permission-down bg-blue-600 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white  hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" >
                                        
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </button>
                                    `}
                              </th>

                            </tr>
                          
                          `).join("")}
  
                          
  
  
                        </tbody>
  
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
    const { data } = await getAll();
        console.log(data);


        const btns = document.querySelectorAll(".btn-delete");
        const btns_permisson_up = document.querySelectorAll(".btn-permission-up");
        const btns_permisson_down = document.querySelectorAll(".btn-permission-down");

        btns.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;
            buttonElement.addEventListener("click", () => {
                const confirm = window.confirm("Bạn có muốn xóa hay không?");
                if (confirm) {
                    remove(id)
                        .then(() => toastr.success('Bạn đã xóa thành công'))
                        .then(() => { reRender(AdminCarts, "#content") })

                }

            });
        });

        btns_permisson_up.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;


            buttonElement.addEventListener("click", () => {
                const data10 = data.filter((user) => user.id == id)
                console.log(data10);

                console.log(id);
                const confirm = window.confirm("Bạn có muốn xác nhận Đơn Hàng hay không?");
                if (confirm) {
                    update({
                        id,
                        productId: data10[0].productId,
                        total: data10[0].total,
                        name: data10[0].name,
                        email: data10[0].email,
                        phone: data10[0].phone,
                        address: data10[0].address,
                        status: 1,
                    })
                        .then(() => toastr.success('Bạn đã xác nhận Đơn Hàng thành công'))
                        .then(() => { reRender(AdminCarts, "#content") })

                }

            });
        });

        btns_permisson_down.forEach((buttonElement) => {
            const id = buttonElement.dataset.id;


            buttonElement.addEventListener("click", () => {
                const data10 = data.filter((user) => user.id == id)
                console.log(data10);

                console.log(id);
                const confirm = window.confirm("Bạn có muốn Hủy xác nhận Đơn Hàng hay không?");
                if (confirm) {
                    update({
                        id,
                        productId: data10[0].productId,
                        total: data10[0].total,
                        name: data10[0].name,
                        email: data10[0].email,
                        phone: data10[0].phone,
                        address: data10[0].address,
                        status: 0,
                    })
                        .then(() => toastr.success('Bạn đã Hủy xác nhận Đơn Hàng thành công'))
                        .then(() => { reRender(AdminCarts, "#content") })

                }

            });
        });
  }


}

export default AdminCarts;