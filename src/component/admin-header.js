


const AdminHeader = {
    render(){
        return /*html*/`
        <!-- Navbar -->
  <nav class="main-header navbar navbar-expand navbar-dark pb-0">
  <!-- Left navbar links -->
  <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
    </li>
    <li class="nav-item d-none d-sm-inline-block">
      <a href="/" class="nav-link">Trang chủ</a>
    </li>
    
  </ul>

  <!-- Right navbar links -->
  <ul class="navbar-nav ml-auto">
    <!-- Navbar Search -->
    <li class="nav-item">
      <a class="nav-link" data-widget="navbar-search" href="#" role="button">
        <i class="fas fa-search"></i>
      </a>
      <div class="navbar-search-block">
        <form class="form-inline">
          <div class="input-group input-group-sm">
            <input class="form-control form-control-navbar" type="search" placeholder="Tìm Kiếm" aria-label="Search">
            <div class="input-group-append">
              <button class="btn btn-navbar" type="submit">
                <i class="fas fa-search"></i>
              </button>
              <button class="btn btn-navbar" type="button" data-widget="navbar-search">
                <i class="fas fa-times"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>

    
    
    <li class="nav-item">
      <a class="nav-link" data-widget="fullscreen" href="#" role="button">
        <i class="fas fa-expand-arrows-alt"></i>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
        <i class="fas fa-th-large"></i>
      </a>
    </li>
  </ul>
</nav>
<!-- /.navbar -->

<!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4 ">
  <!-- Brand Logo -->
  <a href="index3.html" class="brand-link ">
    <img src="../assets/img/logo.png" alt="" class="brand-image  elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">FastFood</span>
  </a>

  <!-- Sidebar -->
  <div class=" ">
  <div class="sidebar mt-0  ">
  <!-- Sidebar user panel (optional) -->
  <div class="user-panel mt-3 pb-3 mb-3 d-flex">
    <div class="image">
      <img src="../assets/img/review2.png" class="img-circle elevation-2" alt="User Image">
    </div>
    <div class="info">
      <a href="#" class="d-block">vintph16172</a>
    </div>
  </div>

  <!-- SidebarSearch Form -->
  <div class="form-inline">
    <div class="input-group" data-widget="sidebar-search">
      <input class="form-control form-control-sidebar" type="search" placeholder="Tìm Kiếm" aria-label="Search">
      <div class="input-group-append">
        <button class="btn btn-sidebar">
          <i class="fas fa-search fa-fw"></i>
        </button>
      </div>
    </div>
  </div>

  <!-- Sidebar Menu -->
  <nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <!-- Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library -->
      <li class="nav-item menu-open">
        <a href="#" class="nav-link active">
          
          <i class=" nav-icon fas fa-desktop"></i>
          <p>
            Back End
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="./index.html" class="nav-link active">
              
              <i class="fas fa-hamburger nav-icon"></i>
              <p>Quản trị Sản Phẩm</p>
              <span class="badge badge-info right">18</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="./index2.html" class="nav-link">
              
              <i class="far fa-newspaper nav-icon"></i>
              <p>Quản trị Tin Tức </p>
              <span class="badge badge-info right">20</span>
            </a>
          </li>
          
        </ul>
      </li>

      <li class="nav-item menu-open">
        <a href="#" class="nav-link active">
          
          <i class="nav-icon fas fa-server"></i>
          <p>
            Front End
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="./index.html" class="nav-link">
              <i class="fas fa-pager nav-icon"></i>
              <p>Trang Chủ</p>
              <span class="right badge badge-danger">New</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="./index2.html" class="nav-link">
              
              <i class="fas fa-pager nav-icon"></i>
              <p>Thông Tin</p>
              <span class="right badge badge-danger">New</span>
            </a>
          </li>
          <li class="nav-item">
            <a href="./index3.html" class="nav-link">
              <i class="fas fa-pager nav-icon"></i>
              <p>Sản Phẩm</p>
              <span class="right badge badge-danger">New</span>
            </a>
          </li>
        </ul>
      </li>

      
      
        
    </ul>
  </nav>
  <!-- /.sidebar-menu -->
</div>
<!-- /.sidebar -->
  
  
  </div>
</aside>

        
        
        
        
        `;


    },
    afterRender(){
        
        // const a = document.querySelectorAll(".header-link")
        // a.forEach((i)=>{
        //     let mm = i.href.split("/")
        //     const spil = window.location.href.split("/")
        //     if(mm[4] === spil[4]){
        //         i.classList.add("bg-gray-900")
        //     }
        // })
       


    }



}
export default AdminHeader;