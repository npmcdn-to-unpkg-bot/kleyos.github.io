<!DOCTYPE html>
<html>
<head>
    <title>HyperCode</title>
    <meta charset="UTF-8">
    <link href="css/bootstrap.min.css" rel="stylesheet">
    <link href="css/style.css" rel="stylesheet">
<link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
<link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32">
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96">
<link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16">
<link rel="manifest" href="/manifest.json">
<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
<meta name="msapplication-TileColor" content="#da532c">
<meta name="theme-color" content="#ffffff">
</head>
<body onload="calcsize();">
<?php
$letter="Фамилия: ".$_POST['firstName'];
$letter.="\nИмя: ".$_POST['lastName'];
$letter.="\nОтчество: ".$_POST['fathName'];
$letter.="\nEmail: ".$_POST['email'];
$letter.="\nТелефон: ".$_POST['tel'];
$letter.="\nОписание: ".$_POST['descr'];

mail("gaf04@mail.ru","Анкета с сайта",$letter,"Content-type: text/plain; charset=utf-8\r\n");
?>
<div class="container">

    <div id="header" class="row">
        <div class="col-lg-3 col-md-3 col-xs-5 col-sm-3">
            <img src="images/logo1.png" class="img-responsive">
        </div>
        <div class="col-lg-5 col-md-5 hidden-xs hidden-sm">
            <p class="text-center text_l">Быстро и качественно разработаем программное обеспечение, сайт, сервис.</p>
        </div>
        <div class="col-sm-5 col-xs-7 hidden-lg hidden-md">
            <p class="text-center text_n">Быстро и качественно разработаем программное обеспечение, сайт, сервис.</p>
        </div>
        <div class="col-lg-4 col-md-4 hidden-xs hidden-sm">
            <ul class="nav navbar-nav navbar-right nav-sm">
                <li><a href="index.html#">О нас</a></li>
                <li><a href="index.html#uslugi">Услуги</a></li>
                <li><a href="index.html#otzivi">Отзывы</a></li>
                <li><a href="index.html#contacts">Контакты</a></li>
            </ul>
        </div>
        <div class="col-sm-4 hidden-lg hidden-md hidden-xs">
            <ul class="nav navbar-nav navbar-right nav-sm">
                <li><a class="text_s" href="index.html#">О нас</a></li>
                <li><a class="text_s" href="index.html#uslugi">Услуги</a></li>
                <li><a class="text_s" href="index.html#otzivi">Отзывы</a></li>
                <li><a class="text_s" href="index.html#contacts">Контакты</a></li>
            </ul>
        </div>
        <div class="col-xs-12 hidden-lg hidden-md hidden-sm">
            <ul id="test" class="nav navbar-nav navbar-right nav-sm">
                <li><a class="text_s" href="index.html#">О нас</a></li>
                <li><a class="text_s" href="index.html#uslugi">Услуги</a></li>
                <li><a class="text_s" href="index.html#otzivi">Отзывы</a></li>
                <li><a class="text_s" href="index.html#contact">Контакты</a></li>
            </ul>
        </div>

    </div>
    <div id="thanx" class="row bgnd4">
        <h1 id="thmsg" class="text-center"><span class="dark">Спасибо<?php
        if(trim($_POST['lastName'])!="")
        {
        echo ", ".trim($_POST['lastName']);
        }
        ?>! В ближайшее время мы с вами свяжемся.</span></h1>
    </div>
    <div id="contacts" class="row footer">
        <div class="col-lg-4">
            <img src="images/logo1.png" class="img-responsive">
        </div>
            <div class="col-lg-4 col-lg-offset-4">
                <h3 class="text-center">Мы в социальных сетях</h3>
                <p class="text-center">
                    <a href="https://www.facebook.com/profile.php?id=100011120892845" target="_blank"><img src="images/social/fb.png" alt=""></a>
                    <a href="https://twitter.com/" target="_blank"><img src="images/social/tw.png" alt=""></a>
                    <a href="https://www.linkedin.com/" target="_blank"><img src="images/social/in.png" alt=""></a>
                    <a href="https://vk.com/alexcoder1" target="_blank"><img src="images/social/vk.png" alt=""></a>
                </p>
                <h3 class="text-center">Контакты</h3>
                <p class="text-center">(066)89-202-84</p>
                <p class="text-center">(063)14-780-35</p>
                <p class="text-center">informatik101@mail.ru</p>

            </div>
    </div>
</div>

<script src="http://code.jquery.com/jquery-latest.js"></script>
<script src="js/jquery.countdown.js" type="text/javascript"></script>
<script src="js/bootstrap.min.js"></script>
<script type="text/javascript">
    $(function(){
        $('#counter').countdown({
            image: 'img/digits_transparent.png',
            startTime: '01:12:12:00'
        });

    });
    function calcsize() {
        var hsize=document.getElementById("header").offsetHeight;
        var fsize=document.getElementById("contacts").offsetHeight;
        var tsize=document.getElementById("thanx").offsetHeight;
        var wndsize=document.documentElement.clientHeight;
        var h=(hsize+fsize+tsize)<wndsize?wndsize-hsize-fsize:tsize;
        document.getElementById("thanx").setAttribute("style","height: "+h+"px;");
        var msize=document.getElementById("thmsg").offsetHeight;
        document.getElementById("thmsg").setAttribute("style","margin-top: "+(h-msize)/2+"px;");
    }
</script>

</body>
</html>
