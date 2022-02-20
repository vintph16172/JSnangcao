import AdminHeader from "../../../component/admin-header";
import {  add } from "../../../api/product"
import { getAllCateProduct } from "../../../api/cateProduct"
import axios from "axios";


const AdminProductsAdd = {
    async render(id) {
        
        const  data2  = await getAllCateProduct();
       
        console.log(data2);


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
                    <div class="col-md-12">
                    <!-- general form elements -->
                    <div class="card card-primary">
                      <div class="card-header">
                        <h3 class="card-title">Thêm Sản Phẩm</h3>
                      </div>
                      <!-- /.card-header -->
                      <!-- form start -->
                      <form id="form-add">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên:</label>
                                <input type="text" class="form-control" id="product-name" placeholder="...">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Danh Mục:</label>
                                <select id='product-category' class="custom-select">
                                   
                                    ${data2.data.map((cate)=>{
                                        return /*html*/`<option value="${cate.id}" >${cate.name}</option>`
                                    })}
                                </select>
                            </div>
                            <div class="form-group">
                                <label label for="exampleInputEmail1">Mã Sản Phẩm:</label>
                                <input type="text" class="form-control" id="product-code" placeholder="...">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Số Lượng:</label>
                                <input type="number" class="form-control" id="product-quantity" vplaceholder="...">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Giá:</label>
                                <input type="number" class="form-control" id="product-price" placeholder="...">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Giảm Giá:</label>
                                <input type="number" class="form-control" id="product-sale" placeholder="...">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">View:</label>
                                <input type="number" class="form-control" id="product-view" placeholder="...">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Danh Mục:</label>
                                <select id='product-status' class="custom-select">
                                    
                                    
                                    <option value="1" >Hoạt Động</option>
                                    <option value="0" >Ẩn</option>}
                                </select>
                            </div>


                          <div class="form-group">
                            <label for="exampleInputFile">Ảnh</label>
                            <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
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
                            <div class="form-group">
                                <label>Textarea</label>
                                <textarea id="product-desc" class="form-control" rows="3" placeholder="..."></textarea>
                            </div>
                          
                        </div>
                        <!-- /.card-body -->
        
                        <div class="card-footer">
                          <button type="submit" class="btn btn-primary">Thêm</button>
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
    afterRender(){
        AdminHeader.afterRender()
        const formAdd = document.querySelector("#form-add");
        const imgPost = document.querySelector('#file-upload');

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
      
      
            formAdd.addEventListener("submit",(b) =>{
                b.preventDefault();
                console.log("submited");
                add({
                    
                    image: response.data.url,
                    name: document.querySelector("#product-name").value,
                    categoryProductId: parseInt(document.querySelector("#product-category").value) ,
                    quantity_amount: document.querySelector("#product-quantity").value,
                    code: document.querySelector("#product-code").value,
                    desc: document.querySelector("#product-desc").value,
                    price: document.querySelector("#product-price").value,
                    sale: document.querySelector("#product-sale").value,
                    view: document.querySelector("#product-view").value,
                    status: parseInt(document.querySelector("#product-status").value)
                });
            })
          });

            



        
    }
        
        
    


}

export default AdminProductsAdd;