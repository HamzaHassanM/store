 <!-- Page Sidebar Start-->
 <div class="page-sidebar">
     <div class="main-header-left d-none d-lg-block">
         <div class="logo-wrapper">
             <a href="{{route('admin')}}">
                 <img class="d-none d-lg-block blur-up lazyloaded" src="{{asset($setting->logo)}}"
                     alt="" style="max-height: 125px">
             </a>
         </div>
     </div>
     <div class="sidebar custom-scrollbar">
         {{-- <a href="javascript:void(0)" class="sidebar-back d-lg-none d-block"><i class="fa fa-times"
                 aria-hidden="true"></i></a>
         <div class="sidebar-user">
             <img class="img-60" src="assets/images/dashboard/user3.jpg" alt="#">
             <div>
                 <h6 class="f-14">JOHN</h6>
                 <p>general manager.</p>
             </div>
         </div> --}}
         <ul class="sidebar-menu">
             <li>
                 <a class="sidebar-header" href="{{route('admin')}}">
                     <i data-feather="home"></i>
                     <span>لوحة التحكم</span>
                 </a>
             </li>

          
             <li>
                 <a class="sidebar-header" href="javascript:void(0)">
                     <i data-feather="folder"></i>
                     <span>الأقسام</span>
                     <i class="fa fa-angle-right pull-right"></i>
                 </a>
                 <ul class="sidebar-submenu">
                     <li>
                         <a href="{{route('dashboard.categories.index')}}">
                             <i class="fa fa-circle"></i>الأقسام
                         </a>
                     </li>
                 </ul>
             </li>



             <li>
                <a class="sidebar-header" href="javascript:void(0)">
                    <i data-feather="gift"></i>
                    <span>المنتجات</span>
                    <i class="fa fa-angle-right pull-right"></i>
                </a>
                <ul class="sidebar-submenu">
                    <li>
                        <a href="{{route('dashboard.products.index')}}">
                            <i class="fa fa-circle"></i>المنتجات
                        </a>
                    </li>
                    <li>
                        <a href="{{route('dashboard.products.create')}}">
                            <i class="fa fa-circle"></i>اضافة منتج
                        </a>
                    </li>
                </ul>
            </li>



             <li>
                <a class="sidebar-header" href="javascript:void(0)">
                    <i data-feather="shopping-cart"></i>
                    <span>الطلبات</span>
                    <i class="fa fa-angle-right pull-right"></i>
                </a>
                <ul class="sidebar-submenu">
                    <li>
                        <a href="order.html">
                            <i class="fa fa-circle"></i>الطلبات
                        </a>
                    </li>
                    <li>
                        <a href="transactions.html">
                            <i class="fa fa-circle"></i>Transactions
                        </a>
                    </li>
                </ul>
            </li>

             <li>
                 <a class="sidebar-header" href="javascript:void(0)">
                     <i data-feather="tag"></i>
                     <span>الكوبونات</span>
                     <i class="fa fa-angle-right pull-right"></i>
                 </a>
                 <ul class="sidebar-submenu">
                     <li>
                         <a href="coupon-list.html">
                             <i class="fa fa-circle"></i>الكوبونات
                         </a>
                     </li>
                     <li>
                         <a href="coupon-create.html">
                             <i class="fa fa-circle"></i>إنشاء كوبون
                         </a>
                     </li>
                 </ul>
             </li>

             <li>
                 <a class="sidebar-header" href="javascript:void(0)">
                    <i data-feather="user-plus"></i>
                     <span>أعضاء الموقع</span>
                     <i class="fa fa-angle-right pull-right"></i>
                 </a>
                 <ul class="sidebar-submenu">
                     <li>
                         <a href="pages-list.html">
                             <i class="fa fa-circle"></i>المديرين
                         </a>
                     </li>
                     <li>
                         <a href="page-create.html">
                             <i class="fa fa-circle"></i>المشترين
                         </a>
                     </li>
                 </ul>
             </li>

    

         
             <li>
                 <a class="sidebar-header" href="{{route('dashboard.settings.index')}}"><i data-feather="settings"></i><span>اعدادات
                         الموقع</span></a>
             </li>

         

             <li>
                 <a class="sidebar-header" href="login.html">
                     <i data-feather="log-in"></i>
                     <span>تسجيل الخروج</span>
                 </a>
             </li>
         </ul>
     </div>
 </div>
 <!-- Page Sidebar Ends-->

 <!-- Right sidebar Start-->
 <div class="right-sidebar" id="right_side_bar">
     <div>
         <div class="container p-0">
             <div class="modal-header p-l-20 p-r-20">
                 <div class="col-sm-8 p-0">
                     <h6 class="modal-title font-weight-bold">FRIEND LIST</h6>
                 </div>
                 <div class="col-sm-4 text-end p-0">
                     <i class="me-2" data-feather="settings"></i>
                 </div>
             </div>
         </div>
         <div class="friend-list-search mt-0">
             <input type="text" placeholder="search friend">
             <i class="fa fa-search"></i>
         </div>
         <div class="p-l-30 p-r-30 friend-list-name">
             <div class="chat-box">
                 <div class="people-list friend-list">
                     <ul class="list">
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/user.jpg" alt="">
                             <div class="status-circle online"></div>
                             <div class="about">
                                 <div class="name">Vincent Porter</div>
                                 <div class="status">Online</div>
                             </div>
                         </li>
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/user1.jpg" alt="">
                             <div class="status-circle away"></div>
                             <div class="about">
                                 <div class="name">Ain Chavez</div>
                                 <div class="status">28 minutes ago</div>
                             </div>
                         </li>
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/user2.jpg" alt="">
                             <div class="status-circle online"></div>
                             <div class="about">
                                 <div class="name">Kori Thomas</div>
                                 <div class="status">Online</div>
                             </div>
                         </li>
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/user3.jpg" alt="">
                             <div class="status-circle online"></div>
                             <div class="about">
                                 <div class="name">Erica Hughes</div>
                                 <div class="status">Online</div>
                             </div>
                         </li>
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/user3.jpg" alt="">
                             <div class="status-circle offline"></div>
                             <div class="about">
                                 <div class="name">Ginger Johnston</div>
                                 <div class="status">2 minutes ago</div>
                             </div>
                         </li>
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/user5.jpg" alt="">
                             <div class="status-circle away"></div>
                             <div class="about">
                                 <div class="name">Prasanth Anand</div>
                                 <div class="status">2 hour ago</div>
                             </div>
                         </li>
                         <li class="clearfix">
                             <img class="rounded-circle user-image blur-up lazyloaded"
                                 src="assets/images/dashboard/designer.jpg" alt="">
                             <div class="status-circle online"></div>
                             <div class="about">
                                 <div class="name">Hileri Jecno</div>
                                 <div class="status">Online</div>
                             </div>
                         </li>
                     </ul>
                 </div>
             </div>
         </div>
     </div>
 </div>
 <!-- Right sidebar Ends-->
