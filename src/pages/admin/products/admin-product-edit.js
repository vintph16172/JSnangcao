import AdminHeader from "../../../component/admin-header";
import { get, update } from "../../../api/product"
import { getAllCateProduct } from "../../../api/cateProduct"
import { reRender } from "../../../../utils/reRender"
import axios from "axios";

const AdminProductsEdit = {
    async render(id) {
        const { data } = await get(id);
        const  data2  = await getAllCateProduct();
        console.log(data);
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
                        <h3 class="card-title">Sửa Sản Phẩm</h3>
                      </div>
                      <!-- /.card-header -->
                      <!-- form start -->
                      <form id="form-update">
                        <div class="card-body">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Tên:</label>
                                <input type="text" class="form-control" id="product-name" value="${data.name}">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Danh Mục:</label>
                                <select id='product-category' class="custom-select">
                                    <option value="${data.categoryProduct.id}" >${data.categoryProduct.name}</option>
                                    ${data2.data.map((cate)=>{
                                        if(cate.id!==data.categoryProduct.id){
                                            return /*html*/`<option value="${cate.id}" >${cate.name}</option>`
                                        }
                                    })}
                                </select>
                            </div>
                            <div class="form-group">
                                <label label for="exampleInputEmail1">Mã Sản Phẩm:</label>
                                <input type="text" class="form-control" id="product-code" value="${data.code}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Số Lượng:</label>
                                <input type="number" class="form-control" id="product-quantity" value="${data.quantity_amount}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Giá:</label>
                                <input type="number" class="form-control" id="product-price" value="${data.price}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">Giảm Giá:</label>
                                <input type="number" class="form-control" id="product-sale" value="${data.sale}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">View:</label>
                                <input type="number" class="form-control" id="product-view" value="${data.view}">
                            </div>

                            <div class="form-group">
                                <label for="exampleInputPassword1">Danh Mục:</label>
                                <select id='product-status' class="custom-select">
                                    
                                    ${data.status == 0 ?'<option value="0" >Ẩn</option><option value="1" >Hoạt Động</option>' :'<option value="1" >Hoạt Động</option><option value="0" >Ẩn</option>'}
                                </select>
                            </div>


                          <div class="form-group">
                            <label for="exampleInputFile">Ảnh</label>
                            <img src="${data.image}" alt="" style="max-width: 100%; width: 100px; height: 100px; ">
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
                                <textarea id="product-desc" class="form-control" rows="3" >${data.desc}</textarea>
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
            
            formEdit.addEventListener("submit",(b) =>{
                b.preventDefault();
                
                update({
                    id: id,
                    image: response.data.url,
                    name: document.querySelector("#product-name").value,
                    categoryProductId: parseInt(document.querySelector("#product-category").value),
                    quantity_amount: document.querySelector("#product-quantity").value,
                    code: document.querySelector("#product-code").value,
                    desc: document.querySelector("#product-desc").value,
                    price: document.querySelector("#product-price").value,
                    sale: document.querySelector("#product-sale").value,
                    view: document.querySelector("#product-view").value,
                    status: parseInt(document.querySelector("#product-status").value)
                    
                });
                alert("Update Thành Công!")
                
            })
      
        });
        if(imgValue === ""){
            formEdit.addEventListener("submit",(b) =>{
                b.preventDefault();
                
                update({
                    id: id,
                    image: data.image,
                    name: document.querySelector("#product-name").value,
                    categoryProductId: parseInt(document.querySelector("#product-category").value),
                    quantity_amount: document.querySelector("#product-quantity").value,
                    code: document.querySelector("#product-code").value,
                    desc: document.querySelector("#product-desc").value,
                    price: document.querySelector("#product-price").value,
                    sale: document.querySelector("#product-sale").value,
                    view: document.querySelector("#product-view").value,
                    status: parseInt(document.querySelector("#product-status").value)
                });
                // console.log(id);
                // console.log(data.img);
                // console.log(document.querySelector("#product-name").value);
                // console.log(document.querySelector("#product-category").value);
                // console.log(document.querySelector("#product-quantity").value);
                // console.log(document.querySelector("#product-code").value);
                // console.log(document.querySelector("#product-desc").value);
                // console.log(document.querySelector("#product-price").value);
                // console.log(document.querySelector("#product-sale").value);
                // console.log(document.querySelector("#product-view").value);
                // console.log(document.querySelector("#product-status").value);

                
                alert("Update Thành Công! 11")
            })
        }
        
        
    }


}

export default AdminProductsEdit;