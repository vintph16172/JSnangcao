import AdminHeader from "../../component/admin-header";

const AdminPage = {
    render(){
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
                  <li class="breadcrumb-item active">Quản trị Sản Phẩm</li>
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
                      <h3 class="card-title">Quản Trị Sản Phẩm</h3>
                    </div>
                    <!-- /.card-header -->
                    <div class="card-body">
                      <button class="btn btn-primary btn-add"><a href="db-product-add.php" class="btn-link">Thêm Sản
                          Phẩm</a></button>
                      <table id="example2" class="table table-bordered table-hover">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Tên</th>
                            <th>Số Lượng</th>
                            <th>Giá</th>
                            <th>Ảnh</th>
                            <th>Trạng thái</th>
                            <th>Danh Mục</th>
                            <th>Lượt xem</th>
                            <th>Chi Tiết</th>
                            <th colspan="2">Hành Động</th>
                          </tr>
                        </thead>
                        <tbody>
  
                          <tr>
                            <th>1</th>
                            <th>Bò Hun Khói</th>
                            <th>99</th>
                            <th>200000 VNĐ</th>
                            <th><img src="../assets/img/menu12.png" alt="" width="100" height="100"></th>
                            <th>Còn Hàng</th>
                            <th>Burger</th>
                            <th>120</th>
                            <th>....</th>
                            <th><button class="btn btn-success btn-add"><a href="" class="btn-link">Sửa</a></button></th>
                            <th><button class="btn btn-danger btn-add"><a href="" class="btn-link">Xóa</a></button></th>
  
                          </tr>
  
                          <tr>
                            <th>2</th>
                            <th>Bò Hun Khói</th>
                            <th>99</th>
                            <th>200000 VNĐ</th>
                            <th><img src="../assets/img/menu12.png" alt="" width="100" height="100"></th>
                            <th>Còn Hàng</th>
                            <th>Burger</th>
                            <th>120</th>
                            <th>....</th>
                            <th><button class="btn btn-success btn-add"><a href="" class="btn-link">Sửa</a></button></th>
                            <th><button class="btn btn-danger btn-add"><a href="" class="btn-link">Xóa</a></button></th>
  
                          </tr>
  
                          <tr>
                            <th>3</th>
                            <th>Bò Hun Khói</th>
                            <th>99</th>
                            <th>200000 VNĐ</th>
                            <th><img src="../assets/img/menu12.png" alt="" width="100" height="100"></th>
                            <th>Còn Hàng</th>
                            <th>Burger</th>
                            <th>120</th>
                            <th>....</th>
                            <th><button class="btn btn-success btn-add"><a href="" class="btn-link">Sửa</a></button></th>
                            <th><button class="btn btn-danger btn-add"><a href="" class="btn-link">Xóa</a></button></th>
  
                          </tr>
  
                          <tr>
                            <th>4</th>
                            <th>Bò Hun Khói</th>
                            <th>99</th>
                            <th>200000 VNĐ</th>
                            <th><img src="../assets/img/menu12.png" alt="" width="100" height="100"></th>
                            <th>Còn Hàng</th>
                            <th>Burger</th>
                            <th>120</th>
                            <th>....</th>
                            <th><button class="btn btn-success btn-add"><a href="" class="btn-link">Sửa</a></button></th>
                            <th><button class="btn btn-danger btn-add"><a href="" class="btn-link">Xóa</a></button></th>
  
                          </tr>
  
                          <tr>
                            <th>5</th>
                            <th>Bò Hun Khói</th>
                            <th>99</th>
                            <th>200000 VNĐ</th>
                            <th><img src="../assets/img/menu12.png" alt="" width="100" height="100"></th>
                            <th>Còn Hàng</th>
                            <th>Burger</th>
                            <th>120</th>
                            <th>....</th>
                            <th><button class="btn btn-success btn-add"><a href="" class="btn-link">Sửa</a></button></th>
                            <th><button class="btn btn-danger btn-add"><a href="" class="btn-link">Xóa</a></button></th>
  
                          </tr>
  
                          <tr>
                            <th>6</th>
                            <th>Bò Hun Khói</th>
                            <th>99</th>
                            <th>200000 VNĐ</th>
                            <th><img src="../assets/img/menu12.png" alt="" width="100" height="100"></th>
                            <th>Còn Hàng</th>
                            <th>Burger</th>
                            <th>120</th>
                            <th>....</th>
                            <th><button class="btn btn-success btn-add"><a href="" class="btn-link">Sửa</a></button></th>
                            <th><button class="btn btn-danger btn-add"><a href="" class="btn-link">Xóa</a></button></th>
  
                          </tr>
  
  
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

    }

    
}

export default AdminPage;