<!DOCTYPE html>
<html lang="en">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Multikart admin is super flexible, powerful, clean &amp; modern responsive bootstrap 4 admin template with unlimited possibilities.">
    <meta name="keywords"
        content="admin template, Multikart admin template, dashboard template, flat admin template, responsive admin template, web app">
    <meta name="author" content="pixelstrap">
    <link rel="icon" href="assets/images/dashboard/favicon.png" type="image/x-icon">
    <link rel="shortcut icon" href="assets/images/dashboard/favicon.png" type="image/x-icon">
    <title>Multikart - Premium Admin Template</title>

    <!-- Google font-->
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,500;1,600;1,700;1,800;1,900&display=swap">

    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap">


    <!-- Font Awesome-->
    <link rel="stylesheet" type="text/css" href="{{asset('dashboard')}}/assets/css/vendors/font-awesome.css">

    <!-- Flag icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('dashboard')}}/assets/css/vendors/themify-icons.css">

    <!-- slick icon-->
    <link rel="stylesheet" type="text/css" href="{{asset('dashboard')}}/assets/css/vendors/slick.css">
    <link rel="stylesheet" type="text/css" href="{{asset('dashboard')}}/assets/css/vendors/slick-theme.css">

    <!-- Bootstrap css-->
    <link rel="stylesheet" type="text/css" href="{{asset('dashboard')}}/assets/css/vendors/bootstrap.css">

    <!-- App css-->
    <link rel="stylesheet" type="text/css" href="{{asset('dashboard')}}/assets/css/style.css">

</head>

<body class="rtl">
    <div id="app">
        <main class="py-4">
            @yield('content')
        </main>
    </div>


    <!-- latest jquery-->
    <script src="{{asset('dashboard')}}/assets/js/jquery-3.3.1.min.js"></script>

    <!-- Bootstrap js-->
    <script src="{{asset('dashboard')}}/assets/js/bootstrap.bundle.min.js"></script>

    <!-- feather icon js-->
    <script src="{{asset('dashboard')}}/assets/js/icons/feather-icon/feather.min.js"></script>
    <script src="{{asset('dashboard')}}/assets/js/icons/feather-icon/feather-icon.js"></script>

    <!-- Sidebar jquery-->
    <script src="{{asset('dashboard')}}/assets/js/sidebar-menu.js"></script>
    <script src="{{asset('dashboard')}}/assets/js/slick.js"></script>

    <!-- lazyload js-->
    <script src="{{asset('dashboard')}}/assets/js/lazysizes.min.js"></script>

    <!--right sidebar js-->
    <script src="{{asset('dashboard')}}/assets/js/chat-menu.js"></script>

    <!--script admin-->
    <script src="{{asset('dashboard')}}/assets/js/admin-script.js"></script>
    <script>
        $('.single-item').slick({
            arrows: false,
            dots: true
        });
    </script>
</body>
</html>
