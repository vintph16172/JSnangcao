import AdminHeader from "../../../component/admin-header";
import { getAll,remove } from "../../../api/user"

import { reRender } from "../../../../utils/reRender"

const AdminUsers = {
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
                  <li class="breadcrumb-item active">Quản trị Tài Khoản</li>
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
                    <span class="info-box-text">Tài Khoản</span>
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
                      <h3 class="card-title">Quản Trị Tài Khoản</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                      
                      <table id="example2" class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Avatar</th>
                            <th>Tên </th>
                            <th>Email</th>
                            <th>Giới Tính</th>
                            <th>Số Điện Thoại</th>
                            <th>Địa Chỉ</th>
                            <th>Ngày Sinh</th>
                            <th>Chức Vụ</th>
                            <th colspan="2">Hành Động</th>
                          </tr>
                        </thead>
                        <tbody>
  
                          ${data.map((user) =>/*html*/`
                            <tr>
                              <th>${user.id}</th>
                              <th><img src="${user.avatar}" alt="" width="100" height="100"></th>
                              <th>${user.username}</th>
                              <th>${user.email}</th>
                              <th>${user.gender == 1?"Nam" :"Nữ"} </th>
                              
                              <th>${user.phonenumber}</th>
                              <th>${user.address}</th>
                              <th>${user.borndate}</th>
                              <th>${user.permission}</th>
                              <th>
                                  <a href="/admin/users/${user.id}/edit" >
                                    <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#04B24A] hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                
                                </a>
                              </th>
                              <th> 
                                <button type="submit" data-id="${user.id}" class="btn-delete inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-500 hover:bg-[#F26F1B] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F26F1B]" >
                                                                      
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                    </svg>
                                </button>
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
  afterRender() {
    AdminHeader.afterRender()
    const btns = document.querySelectorAll(".btn-delete");
    btns.forEach((buttonElement) => {
      const id = buttonElement.dataset.id;
      buttonElement.addEventListener("click", () => {
        const confirm = window.confirm("Bạn có muốn xóa hay không?");
        if (confirm) {
          remove(id)
            .then(() => alert('Bạn đã xóa thành công'))
            .then(() => { reRender(AdminUsers, "#content") })
        }

      });
    });
  }


}

export default AdminUsers;