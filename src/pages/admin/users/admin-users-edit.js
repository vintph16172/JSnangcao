import AdminHeader from "../../../component/admin-header";
import { get, update } from "../../../api/user"
import axios from "axios";


const AdminUsersEdit = {
    async render(id) {
        const { data } = await get(id);
        
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
                    <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Sửa Tài Khoản</h3>
                      </div>
                      <!-- /.card-header -->
                      <!-- form start -->
                      <form id="form-update">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên:</label>
                                <input type="text" class="form-control" id="user-name" value="${data.username}">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email:</label>
                                <input type="email" class="form-control" id="user-email" value="${data.email}">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Giới Tính:</label>
                                <select id='user-gender' class="custom-select">
                                    
                                    ${data.gender == 0 ? '<option value="0" >Nữ</option><option value="1" >Nam</option>' : '<option value="1" >Nam</option><option value="0" >Nữ</option>'}
                                </select>
                            </div>
                            <div class="form-group">
                                <label label for="exampleInputEmail1">Số Điện Thoại:</label>
                                <input type="number" class="form-control" id="user-phonenumber" value="${data.phonenumber}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Địa Chỉ:</label>
                                <input type="text" class="form-control" id="user-address" value="${data.address}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Ngày Sinh:</label>
                                <input type="date" class="form-control" id="user-borndate" value="${data.borndate}">
                            </div>

                            

                            <div class="form-group">
                                <label for="exampleInputPassword1">Chức Vụ:</label>
                                <select id='user-permission' class="custom-select">
                                    
                                    ${data.permission == 0 ? '<option value="0" >Người Dùng</option><option value="1" >Admin</option>' : '<option value="1" >Admin</option><option value="0" >Người Dùng</option>'}
                                </select>
                            </div>


                          <div class="form-group">
                            <label for="exampleInputFile">Ảnh</label>
                            <img src="${data.avatar}" alt="" style="max-width: 100%; width: 100px; height: 100px; ">
                            <div class="input-group">
                              <div class="custom-file">
                                <input type="file" class="custom-file-input" id="file-upload">
                                <label class="custom-file-label" for="exampleInputFile">Choose file</label>
                              </div>
                              <div class="input-group-append">
                                <span class="input-group-text">Upload</span>
                              </div>
                            </div>
                          </div>
                           
                          
                        </div>
                        <!-- /.card-body -->
        
                        <div class="card-footer">
                          <button type="submit" class="btn btn-success">Sửa</button>
                        </div>
                      </form>
                    </div>
                    <!-- /.card -->
        
                    
                      </form>
                    </div>
                    <!-- /.card -->
        
                  </div>
                      
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
    async afterRender(id) {
        AdminHeader.afterRender()
        const { data } = await get(id);
        console.log(data);
        console.log(data.image);
        const formEdit = document.querySelector("#form-update");
        const imgPost = document.querySelector('#file-upload');
        const imgValue = document.querySelector('#file-upload').value;


        imgPost.addEventListener('change', async (e) => {

            const file = e.target.files[0];
            const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/vintph16172/image/upload"

            const formData = new FormData();

            formData.append('file', file);
            formData.append('upload_preset', "ypn4yccr");

            // call api cloudinary

            const response = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                }
            });
            console.log(response.data.url);

            formEdit.addEventListener("submit", (b) => {
                b.preventDefault();

                update({
                    id: id,
                    username: document.querySelector("#user-name").value,
                    email: document.querySelector("#user-email").value,
                    borndate: document.querySelector("#user-borndate").value,
                    gender: parseInt(document.querySelector("#user-gender").value),
                    phonenumber: document.querySelector("#user-phonenumber").value,
                    permission: parseInt(document.querySelector("#user-permission").value),
                    address:  document.querySelector("#user-address").value,
                    avatar: response.data.url,
                    password: "1234"

                });
                alert("Update Thành Công!")

            })

        });
        if (imgValue === "") {
            formEdit.addEventListener("submit", (b) => {
                b.preventDefault();

                update({
                    id: id,
                    username: document.querySelector("#user-name").value,
                    email: document.querySelector("#user-email").value,
                    borndate: document.querySelector("#user-borndate").value,
                    gender: parseInt(document.querySelector("#user-gender").value),
                    phonenumber: document.querySelector("#user-phonenumber").value,
                    permission: parseInt(document.querySelector("#user-permission").value),
                    address:  document.querySelector("#user-address").value,
                    avatar: data.avatar,
                    password: "1234"
                });
                // console.log(id);
                // console.log(data.img);
                // console.log(document.querySelector("#user-name").value);
                // console.log(document.querySelector("#user-category").value);
                // console.log(document.querySelector("#user-quantity").value);
                // console.log(document.querySelector("#user-code").value);
                // console.log(document.querySelector("#user-desc").value);
                // console.log(document.querySelector("#user-price").value);
                // console.log(document.querySelector("#user-sale").value);
                // console.log(document.querySelector("#user-view").value);
                // console.log(document.querySelector("#user-status").value);


                alert("Update Thành Công! 11")
            })
        }


    }


}


export default AdminUsersEdit